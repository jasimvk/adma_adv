# 📸 Quick Guide: Adding Product Images from PDFs

## Step 1: Extract Images from Your PDFs

### Method A: Screenshot (Easiest - Mac)
1. Open any PDF file
2. Press `Cmd + Shift + 4`
3. Click and drag to capture product image
4. Image saves to Desktop automatically
5. Rename to descriptive name like `business-card-sample.jpg`

### Method B: Export from Preview (Mac)
1. Open PDF in Preview
2. Click "File" → "Export"
3. Format: Choose "JPEG"
4. Quality: Best
5. Click "Save"
6. This exports all pages as separate images

### Method C: Online PDF to Image Converter
1. Go to: https://www.ilovepdf.com/pdf_to_jpg
2. Upload your PDF
3. Select "Extract Images"
4. Download ZIP file
5. Extract images

## Step 2: Organize Images

Create this folder structure:
```
/Users/admin/adma_adv/adma-next/public/images/products/
```

Move all product images there with clear names:
- `business-cards.jpg`
- `flyers-brochures.jpg`
- `mugs-drinkware.jpg`
- `tshirts-apparel.jpg`
- `usb-drives.jpg`
- `keychains.jpg`
- `banners-rollup.jpg`
- `acrylic-signs.jpg`
- etc...

## Step 3: Add Products to Website

Open this file:
```
/Users/admin/adma_adv/adma-next/src/app/products/page.tsx
```

Find the `products` array (around line 16) and add more items:

```typescript
const products = [
  { id: 1, name: 'Business Cards', category: 'stationery', image: '/images/cat1.jpg', description: 'Premium business cards with various finishes' },
  { id: 2, name: 'Flyers & Brochures', category: 'printing', image: '/images/cat2.jpg', description: 'Eye-catching marketing materials' },
  { id: 3, name: 'Corporate Gifts', category: 'gifts', image: '/images/cat3.jpg', description: 'Customized promotional items' },
  { id: 4, name: 'Banners & Signage', category: 'signage', image: '/images/cat4.jpg', description: 'Large format printing' },
  
  // ADD MORE PRODUCTS BELOW:
  { id: 5, name: 'Letterheads', category: 'stationery', image: '/images/products/letterheads.jpg', description: 'Professional letterheads on premium paper stock' },
  { id: 6, name: 'Envelopes', category: 'stationery', image: '/images/products/envelopes.jpg', description: 'Custom printed envelopes in various sizes' },
  { id: 7, name: 'Notebooks', category: 'stationery', image: '/images/products/notebooks.jpg', description: 'Branded notebooks and planners' },
  { id: 8, name: 'Calendars', category: 'gifts', image: '/images/products/calendars.jpg', description: 'Wall and desk calendars with custom designs' },
  { id: 9, name: 'Mugs & Drinkware', category: 'gifts', image: '/images/products/mugs.jpg', description: 'Sublimation mugs, magic mugs, and bottles' },
  { id: 10, name: 'T-Shirts & Caps', category: 'promotional', image: '/images/products/apparel.jpg', description: 'Custom apparel with printing and embroidery' },
  { id: 11, name: 'USB Flash Drives', category: 'gifts', image: '/images/products/usb.jpg', description: 'Branded USB drives with custom logos' },
  { id: 12, name: 'Keychains', category: 'promotional', image: '/images/products/keychains.jpg', description: 'Metal and acrylic keychains' },
  { id: 13, name: 'Shopping Bags', category: 'promotional', image: '/images/products/bags.jpg', description: 'Eco-friendly branded shopping bags' },
  { id: 14, name: 'Roll-up Banners', category: 'signage', image: '/images/products/rollup.jpg', description: 'Portable display stands for exhibitions' },
  { id: 15, name: 'Acrylic Signs', category: 'signage', image: '/images/products/acrylic.jpg', description: 'Professional acrylic signage for offices' },
  { id: 16, name: 'LED Signs', category: 'signage', image: '/images/products/led.jpg', description: 'Illuminated LED displays and signs' },
  { id: 17, name: 'Vehicle Branding', category: 'signage', image: '/images/products/vehicle.jpg', description: 'Full vehicle wraps and decals' },
  { id: 18, name: 'Stickers & Decals', category: 'signage', image: '/images/products/stickers.jpg', description: 'Vinyl stickers, clear stickers, one-way vision' },
  { id: 19, name: 'Trophies & Awards', category: 'gifts', image: '/images/products/awards.jpg', description: 'Crystal awards, wooden plaques, medals' },
  { id: 20, name: 'Canvas Prints', category: 'printing', image: '/images/products/canvas.jpg', description: 'Gallery-quality canvas printing' },
  { id: 21, name: 'Invitation Cards', category: 'printing', image: '/images/products/invitations.jpg', description: 'Elegant invitation cards for all occasions' },
  { id: 22, name: 'Posters', category: 'printing', image: '/images/products/posters.jpg', description: 'High-quality posters for marketing' },
  { id: 23, name: 'ID Cards & Lanyards', category: 'promotional', image: '/images/products/id-cards.jpg', description: 'Professional ID cards with lanyards' },
  { id: 24, name: 'Photo Frames', category: 'gifts', image: '/images/products/frames.jpg', description: 'Sublimation photo frames and rock slates' },
];
```

## Step 4: Test Your Website

```bash
cd /Users/admin/adma_adv/adma-next
npm run dev
```

Open http://localhost:3000/products and check:
- ✅ All product images load
- ✅ Category filters work
- ✅ Hover effects work
- ✅ Mobile responsive

## 📝 Product Categories

Use these categories when adding products:
- `'stationery'` - Business cards, letterheads, envelopes
- `'printing'` - Flyers, posters, brochures, invitations
- `'gifts'` - Mugs, USB drives, awards, frames, calendars
- `'promotional'` - T-shirts, bags, keychains, ID cards
- `'signage'` - Banners, signs, vehicle branding, stickers

## 💡 Tips

1. **Image Size**: Keep images around 800x600px for best performance
2. **File Size**: Compress images to under 200KB using tinypng.com
3. **Format**: Use JPG for photos, PNG for graphics with transparency
4. **Naming**: Use descriptive names with hyphens (no spaces)

## 🎨 Where Images Appear

Your product images will show on:
- Homepage (Featured Products section)
- Products Page (All products with filters)
- Category filtered views

## ⚡ Quick Command to Create Folder

```bash
mkdir -p /Users/admin/adma_adv/adma-next/public/images/products
```

## 🎯 Priority Products to Add First

From your PDFs, focus on these popular items:
1. Business cards (multiple designs)
2. Flyers and brochures
3. Mugs and drinkware
4. T-shirts and apparel
5. Roll-up banners
6. USB drives
7. Trophies and awards
8. Vehicle branding examples
9. Stickers and decals
10. LED signs

---

**Need Help?**
- All product images should be in `/public/images/products/` folder
- Reference them in code as `/images/products/filename.jpg`
- Save this file and refer back when adding products!
