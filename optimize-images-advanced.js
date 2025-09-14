#!/usr/bin/env node

/**
 * Advanced Image Optimization Script
 * 
 * This script automatically optimizes images in your /public/images/ folder
 * 
 * Prerequisites:
 * npm install sharp
 * 
 * Usage:
 * node optimize-images-advanced.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.log('❌ Sharp is not installed. Please run: npm install sharp');
  console.log('Then run this script again.');
  process.exit(1);
}

const imagesDir = path.join(__dirname, 'public', 'images');
const optimizedDir = path.join(__dirname, 'public', 'images', 'optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Image optimization settings
const optimizationSettings = {
  // High quality for main images
  high: {
    quality: 85,
    maxWidth: 1600,
    maxHeight: 1200
  },
  // Medium quality for thumbnails
  medium: {
    quality: 80,
    maxWidth: 800,
    maxHeight: 600
  },
  // Low quality for previews
  low: {
    quality: 75,
    maxWidth: 400,
    maxHeight: 300
  }
};

async function optimizeImage(inputPath, outputPath, settings) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Calculate new dimensions while maintaining aspect ratio
    let { width, height } = metadata;
    const { maxWidth, maxHeight } = settings;
    
    if (width > maxWidth || height > maxHeight) {
      const ratio = Math.min(maxWidth / width, maxHeight / height);
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
    }
    
    await image
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ quality: settings.quality })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    return {
      success: true,
      originalSize,
      optimizedSize,
      reduction,
      dimensions: `${width}x${height}`
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

async function optimizeAllImages() {
  console.log('🖼️  Starting image optimization...\n');
  
  const files = fs.readdirSync(imagesDir);
  const imageFiles = files.filter(file => 
    /\.(png|jpg|jpeg)$/i.test(file) && !file.includes('optimized')
  );
  
  if (imageFiles.length === 0) {
    console.log('❌ No images found to optimize.');
    return;
  }
  
  console.log(`Found ${imageFiles.length} images to optimize:\n`);
  
  for (const file of imageFiles) {
    const inputPath = path.join(imagesDir, file);
    const baseName = path.parse(file).name;
    
    console.log(`📁 Processing: ${file}`);
    
    // Create optimized versions
    const results = {};
    
    for (const [quality, settings] of Object.entries(optimizationSettings)) {
      const outputPath = path.join(optimizedDir, `${baseName}-${quality}.jpg`);
      const result = await optimizeImage(inputPath, outputPath, settings);
      
      if (result.success) {
        results[quality] = result;
        console.log(`  ✅ ${quality}: ${(result.optimizedSize / 1024).toFixed(1)}KB (${result.reduction}% reduction) ${result.dimensions}`);
      } else {
        console.log(`  ❌ ${quality}: Failed - ${result.error}`);
      }
    }
    
    console.log('');
  }
  
  console.log('🎉 Optimization complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Review optimized images in /public/images/optimized/');
  console.log('2. Replace original images with optimized versions');
  console.log('3. Update your carousel to use the new images');
  console.log('4. Test loading speed improvement');
  
  console.log('\n💡 Tips:');
  console.log('- Use high-quality versions for main carousel');
  console.log('- Use medium-quality versions for thumbnails');
  console.log('- Consider WebP format for even better compression');
}

// Run optimization
optimizeAllImages().catch(console.error);
