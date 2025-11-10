# Rtech Dynamics 365 Solutions - Logo Assets

## Available Formats

### SVG (Vector Format)
- **File**: `logo.svg`
- **Use**: Web, scalable applications, print
- **Advantages**: Infinitely scalable, small file size, crisp at any resolution

### PNG (Raster Format)
All PNG files are located in `/public/icons/` directory:

| Size | Filename | Use Case |
|------|----------|----------|
| 16x16 | `logo-16x16.png` | Browser favicon, small UI elements |
| 32x32 | `logo-32x32.png` | Taskbar icons, small thumbnails |
| 48x48 | `logo-48x48.png` | Desktop shortcuts, app icons |
| 72x72 | `logo-72x72.png` | Mobile web icons (iOS/Android) |
| 96x96 | `logo-96x96.png` | High-DPI favicons, app tiles |
| 144x144 | `logo-144x144.png` | Windows tiles, high-res mobile icons |
| 192x192 | `logo-192x192.png` | Android home screen icons, PWA icons |
| 512x512 | `logo-512x512.png` | App store listings, splash screens, high-res displays |

## Usage Guidelines

### Web Applications
```html
<!-- Favicon -->
<link rel="icon" type="image/png" sizes="32x32" href="/icons/logo-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/icons/logo-16x16.png">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" sizes="192x192" href="/icons/logo-192x192.png">

<!-- Android Chrome -->
<link rel="icon" type="image/png" sizes="192x192" href="/icons/logo-192x192.png">
```

### Progressive Web App (PWA)
```json
{
  "icons": [
    {
      "src": "/icons/logo-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/logo-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### React/Next.js Components
```tsx
import Image from 'next/image';
import logo from '@/public/images/logo.svg';

<Image src={logo} alt="Rtech D365 Solutions" width={200} height={200} />
```

## Color Palette

- **Primary Blue**: `#2563eb` (RGB: 37, 99, 235)
- **Dark Blue**: `#1e40af` (RGB: 30, 64, 175)
- **White**: `#ffffff` (RGB: 255, 255, 255)

## Regenerating PNG Files

To regenerate PNG files from the SVG source:

```bash
node scripts/generate-logo-pngs.js
```

This will create all PNG sizes in the `/public/icons/` directory.

## Brand Guidelines

1. **Minimum Size**: Do not display the logo smaller than 32x32 pixels
2. **Clear Space**: Maintain clear space around the logo equal to 10% of its width
3. **Background**: Logo works best on light backgrounds; use white text version on dark backgrounds
4. **Modifications**: Do not modify, rotate, or distort the logo
5. **Colors**: Use official brand colors; do not change logo colors

## File Locations

```
/public/
  ├── images/
  │   ├── logo.svg          # Source SVG file
  │   └── LOGO_README.md    # This file
  ├── icons/
  │   ├── logo-16x16.png
  │   ├── logo-32x32.png
  │   ├── logo-48x48.png
  │   ├── logo-72x72.png
  │   ├── logo-96x96.png
  │   ├── logo-144x144.png
  │   ├── logo-192x192.png
  │   └── logo-512x512.png
  └── favicon.png           # Favicon (rename to .ico if needed)
```

## Technical Specifications

- **Format**: SVG 1.1, PNG (24-bit with alpha channel)
- **Color Space**: sRGB
- **Compression**: PNG optimized with sharp library
- **Transparency**: Full alpha channel support
- **Aspect Ratio**: 1:1 (square)
