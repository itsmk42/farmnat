# 📸 Image Upload Guide for Arogya Saram Website

## 🗂️ Folder Structure

Your images should be organized in the `public/images/` folder:

```
farmnaturelle/
├── public/
│   ├── images/
│   │   ├── products/
│   │   │   ├── shilajit-main.jpg
│   │   │   ├── shilajit-lifestyle.jpg
│   │   │   ├── shilajit-ingredient.jpg
│   │   │   ├── shilajit-packaging.jpg
│   │   │   ├── ghee-main.jpg
│   │   │   ├── ghee-bilona-process.jpg
│   │   │   ├── ghee-lifestyle.jpg
│   │   │   ├── ghee-packaging.jpg
│   │   │   ├── stevia-main.jpg
│   │   │   ├── stevia-plant.jpg
│   │   │   ├── stevia-lifestyle.jpg
│   │   │   └── stevia-packaging.jpg
│   │   ├── hero/
│   │   │   ├── wellness-lifestyle.jpg
│   │   │   └── hero-background.jpg
│   │   ├── blog/
│   │   │   ├── ayurveda-doshas.jpg
│   │   │   ├── south-indian-recipes.jpg
│   │   │   └── shilajit-benefits.jpg
│   │   └── testimonials/
│   │       ├── customer-1.jpg
│   │       └── customer-2.jpg
```

## 📋 How to Add Images

### Method 1: Manual Upload (Recommended for now)

1. **Create the folder structure** (already done):
   ```bash
   mkdir -p public/images/products public/images/blog public/images/hero public/images/testimonials
   ```

2. **Copy your images** to the appropriate folders:
   - Drag and drop images into the folders using your file explorer
   - Or use command line: `cp your-image.jpg public/images/products/`

3. **Update the file names** in your data files to match your actual images

### Method 2: Using Next.js Image Component (Already implemented)

The website is already set up to use the Next.js `Image` component which provides:
- ✅ Automatic optimization
- ✅ Lazy loading
- ✅ Responsive images
- ✅ Fallback placeholders

## 🖼️ Image Requirements

### **Product Images:**
- **Format**: JPG, PNG, or WebP
- **Size**: 800x800px minimum (square aspect ratio)
- **Quality**: High resolution for main product images
- **Naming**: Use descriptive names like `shilajit-main.jpg`

### **Hero Images:**
- **Format**: JPG or WebP
- **Size**: 1200x1200px minimum
- **Quality**: High resolution for hero sections

### **Blog Images:**
- **Format**: JPG, PNG, or WebP
- **Size**: 1200x600px (2:1 aspect ratio)
- **Quality**: Medium to high resolution

## 🔄 Current Image Paths in Code

The website expects these specific image paths:

### Products (in `/src/data/products.ts`):
```typescript
images: [
  '/images/products/shilajit-main.jpg',
  '/images/products/shilajit-lifestyle.jpg',
  '/images/products/shilajit-ingredient.jpg',
  '/images/products/shilajit-packaging.jpg'
]
```

### Hero Section:
```typescript
src="/images/hero/wellness-lifestyle.jpg"
```

### Blog Posts:
```typescript
image: '/images/blog/ayurveda-doshas.jpg'
```

## 🛠️ Quick Setup Steps

1. **Add your images** to the `public/images/` folders
2. **Update file names** in the data files to match your actual images
3. **Restart the development server** if needed:
   ```bash
   npm run dev
   ```

## 🎨 Image Optimization Tips

1. **Compress images** before uploading (use tools like TinyPNG)
2. **Use WebP format** when possible for better performance
3. **Provide multiple sizes** for responsive design
4. **Use descriptive alt text** for accessibility

## 🔧 Advanced: Dynamic Image Upload (Future Enhancement)

For a production website, you might want to implement:
- **Cloud storage** (AWS S3, Cloudinary, etc.)
- **Admin panel** for image management
- **Image upload API** for dynamic content
- **CDN integration** for faster loading

## 📝 Example: Adding a New Product Image

1. Save your image as `public/images/products/new-product-main.jpg`
2. Update the product data in `src/data/products.ts`:
   ```typescript
   images: [
     '/images/products/new-product-main.jpg',
     '/images/products/new-product-lifestyle.jpg'
   ]
   ```
3. The website will automatically use the new images!

## 🚨 Troubleshooting

- **Image not showing?** Check the file path and name match exactly
- **Slow loading?** Compress your images or use WebP format
- **Blurry images?** Use higher resolution source images
- **404 errors?** Make sure images are in the `public/` folder, not `src/`

## 📞 Need Help?

If you need assistance with image optimization or setting up dynamic uploads, let me know!
