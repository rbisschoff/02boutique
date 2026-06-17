# 02FASHION Men's Promotions — Cursor Refinement Guide

## What's Ready to Use

The file `mens-promotions.html` is fully functional with:

✅ **Bilingual Support (IT/EN)** — Toggle at top right switches all text  
✅ **6 Products** — Sample data in JavaScript array (easy to modify)  
✅ **Image Carousel** — Click any product image → opens full-screen carousel with 3 images per product  
✅ **Size Selection** — iOS-style buttons, highlights when selected  
✅ **Add to Bag Button** — iOS active state (press animation)  
✅ **Toast Notifications** — Appears when item added to cart  
✅ **Responsive Design** — Works mobile, tablet, desktop  
✅ **Placeholder Images** — Using placeholder.com URLs (ready to swap for real product photos)  

---

## How to Use in Cursor

1. **Open the file** in Cursor
2. **Live preview** — Use Cursor's built-in preview to see changes in real-time
3. **Make edits** and watch them apply instantly
4. **Test interactions** — Click products, toggle language, use carousel, select sizes

---

## What to Refine in Cursor

### 1. **Product Images**
Currently using placeholder URLs:
```javascript
images: [
  'https://via.placeholder.com/600x750?text=Navy+Jacket+1',
  'https://via.placeholder.com/600x750?text=Navy+Jacket+2',
  'https://via.placeholder.com/600x750?text=Navy+Jacket+3'
],
```

**To swap real images:**
- Replace the placeholder URLs with actual image paths (local or hosted)
- Or use a service like Cloudinary, Imgix, or host images on your own server
- Carousel will automatically work with any image URLs

### 2. **Spacing & Layout**
Adjust these values in the CSS to tighten/expand spacing:

```css
.product-grid {
  gap: 20px; /* Space between product cards — reduce to 16px for tighter grid */
}

.product-card {
  border-radius: 12px; /* Roundness of card corners — adjust to taste */
}

.container {
  padding: 0 20px; /* Side padding on desktop */
}

.section {
  padding: 40px 0; /* Vertical padding between sections */
}
```

### 3. **Colors & Visual Refinement**
Current palette:
- Primary accent: `#D946A6` (hot pink) — used for promo badges, discount labels
- Background: `#F5F0EB` (warm cream) — hero and footer
- Text: `#000` (black), `#666` (gray)
- Borders: `#E5E5E5` (light gray)

**To change the feel:**
- Edit hero gradient: `linear-gradient(135deg, #F8F4F0 0%, #F5F0EB 100%)`
- Change promo color: search for `#D946A6` and replace
- Adjust button styling in `.add-to-bag-btn`

### 4. **Typography**
Current system font stack (iOS/modern):
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

To use a custom font (Google Fonts, etc.):
1. Add `<link>` in `<head>`
2. Change the font-family value

Adjust sizes for headlines:
```css
.hero h1 { font-size: 32px; } /* Change this */
.section-title { font-size: 28px; } /* And this */
```

### 5. **Button & Interaction Polish**
Current iOS-style button:
```css
.add-to-bag-btn {
  padding: 14px;
  border-radius: 8px;
  transition: all 0.2s;
  active: 0.85; /* Press opacity */
}
```

To refine:
- Adjust `padding` for taller/shorter button
- Change `border-radius` (4px = sharp, 12px = rounded, 20px = pill)
- Add shadows: `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);`

### 6. **Product Card Styling**
```css
.product-card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.product-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}
```

Adjust shadow depth for subtle/dramatic effect.

### 7. **Price Display**
Current format shows original price struck through:
```html
€280 €400 -30%
```

To change the layout, edit in the `renderProducts()` function:
```javascript
<div class="price-section">
  <div class="product-price">€${product.price}</div>
  <span class="original-price">€${product.originalPrice}</span>
  <span class="discount">-${discount}%</span>
</div>
```

### 8. **Size Button Styling**
```css
.size-btn {
  padding: 10px;
  border: 1.5px solid #E5E5E5;
  border-radius: 8px;
}

.size-btn.selected {
  background: #000;
  color: #FFF;
  border-color: #000;
}
```

Adjust border width, border-radius, or colors.

### 9. **Carousel Styling**
Currently has dark overlay `rgba(0, 0, 0, 0.95)`. To change:
```css
.modal {
  background: rgba(0, 0, 0, 0.95); /* Increase opacity for darker, reduce for lighter */
}
```

Control button sizes:
```css
.carousel-btn {
  width: 44px;
  height: 44px;
}
```

### 10. **Add More Products**
Simply add to the `products` array:
```javascript
const products = [
  // ... existing products ...
  {
    id: 7,
    name_it: 'Your Product IT Name',
    name_en: 'Your Product EN Name',
    category_it: 'Categoria',
    category_en: 'Category',
    description_it: 'Descrizione',
    description_en: 'Description',
    price: 250,
    originalPrice: 350,
    images: [
      'url-to-image-1',
      'url-to-image-2',
      'url-to-image-3'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  }
];
```

---

## Testing in Cursor

1. **Language Toggle** — Click IT/EN at top right, verify all text switches
2. **Product Carousel** — Click product image → verify carousel loads, arrow buttons work, counter shows "1 / 3"
3. **Size Selection** — Click size buttons, verify they highlight in black
4. **Add to Bag** — Select a size, click button, verify toast notification appears
5. **Responsive** — Resize browser window, verify layout adjusts properly
6. **Keyboard** — Press ESC while carousel open, verify modal closes

---

## Next Steps

1. Get real product photography (or GIF animations if you want movement)
2. Replace placeholder URLs in the products array with real image paths
3. Refine colors, spacing, fonts to match your brand
4. Test with real product images to see how they look in the grid
5. Deploy to your hosting (GitHub Pages, Vercel, or your own server)

---

## Notes for Implementation

- **GIF Support**: The carousel works with GIF files too. Just use `.gif` URLs in the `images` array.
- **Real Images**: Once you have product photos, upload them and update the URLs
- **Performance**: Consider optimizing images (JPG quality, responsive sizes) for web
- **Mobile**: The design is mobile-first. Test on actual devices to ensure tap targets are large enough
- **Translations**: To add more languages, extend the `translations` object and add corresponding buttons

---

**Ready to customize!** Open in Cursor and start refining. You'll see live changes as you edit.
