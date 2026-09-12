const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images/Prewedding';
const outputDir = './public/images/prewedding';

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function compressImages() {
  const files = fs.readdirSync(inputDir);
  let count = 0;
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;
    
    const inputPath = path.join(inputDir, file);
    // Clean filename - remove spaces and special characters
    const cleanName = file
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-\.]/g, '')
      .replace(/--+/g, '-')
      .replace(/\.jpg\.jpg/g, '.jpg')
      .replace(/\.jpgcc\.jpg/g, '.jpg');
    const outputPath = path.join(outputDir, cleanName);
    
    try {
      const stats = fs.statSync(inputPath);
      const sizeMB = stats.size / (1024 * 1024);
      
      console.log(`Compressing: ${file} (${sizeMB.toFixed(2)} MB)`);
      
      await sharp(inputPath)
        .resize(1920, 1280, { 
          fit: 'inside', 
          withoutEnlargement: true 
        })
        .jpeg({ quality: 80, progressive: true })
        .toFile(outputPath);
      
      const newStats = fs.statSync(outputPath);
      const newSizeMB = newStats.size / (1024 * 1024);
      console.log(`  → Saved as: ${cleanName} (${newSizeMB.toFixed(2)} MB)`);
      count++;
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
  
  console.log(`\nDone! Compressed ${count} images.`);
  console.log(`Output folder: ${outputDir}`);
  console.log(`\nYou can now delete the original Prewedding folder.`);
}

compressImages();
