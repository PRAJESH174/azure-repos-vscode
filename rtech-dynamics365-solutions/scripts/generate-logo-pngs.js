const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 72, 96, 144, 192, 512];
const svgPath = path.join(__dirname, '../public/images/logo.svg');
const outputDir = path.join(__dirname, '../public/icons');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generatePNGs() {
  console.log('Generating PNG logos from SVG...\n');
  
  for (const size of sizes) {
    const outputPath = path.join(outputDir, `logo-${size}x${size}.png`);
    
    try {
      await sharp(svgPath)
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      console.log(`✓ Generated: logo-${size}x${size}.png`);
    } catch (error) {
      console.error(`✗ Failed to generate logo-${size}x${size}.png:`, error.message);
    }
  }
  
  // Generate favicon.ico (using 32x32 as base)
  try {
    const faviconPath = path.join(__dirname, '../public/favicon.ico');
    await sharp(svgPath)
      .resize(32, 32)
      .png()
      .toFile(faviconPath.replace('.ico', '.png'));
    
    // Note: For true .ico format, you'd need a specialized library
    // For now, we'll create a PNG that can be renamed
    console.log('\n✓ Generated: favicon.png (rename to favicon.ico if needed)');
  } catch (error) {
    console.error('✗ Failed to generate favicon:', error.message);
  }
  
  console.log('\n✅ Logo generation complete!');
  console.log(`\nGenerated files in: ${outputDir}`);
}

generatePNGs().catch(console.error);
