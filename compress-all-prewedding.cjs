const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images/prewedding';
const outputDir = './public/images/prewedding-compressed';

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function compressImages() {
  const files = fs.readdirSync(inputDir);
  let count = 0;
  let totalOriginal = 0;
  let totalCompressed = 0;
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;
    
    const inputPath = path.join(inputDir, file);
    // Clean filename - remove spaces and special characters, add prewedding prefix
    let cleanName = 'prewedding-' + (count + 1).toString().padStart(2, '0') + '.jpg';
    const outputPath = path.join(outputDir, cleanName);
    
    try {
      const stats = fs.statSync(inputPath);
      const sizeMB = stats.size / (1024 * 1024);
      totalOriginal += sizeMB;
      
      console.log(`[${count + 1}/46] Compressing: ${file} (${sizeMB.toFixed(2)} MB)`);
      
      await sharp(inputPath)
        .resize(1920, 1280, { 
          fit: 'inside', 
          withoutEnlargement: true 
        })
        .jpeg({ quality: 85, progressive: true })
        .toFile(outputPath);
      
      const newStats = fs.statSync(outputPath);
      const newSizeMB = newStats.size / (1024 * 1024);
      totalCompressed += newSizeMB;
      console.log(`         → Saved as: ${cleanName} (${newSizeMB.toFixed(2)} MB)`);
      count++;
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
  
  console.log(`\n========================================`);
  console.log(`Done! Compressed ${count} images.`);
  console.log(`Original size: ${totalOriginal.toFixed(2)} MB`);
  console.log(`Compressed size: ${totalCompressed.toFixed(2)} MB`);
  console.log(`Saved: ${(totalOriginal - totalCompressed).toFixed(2)} MB`);
  console.log(`========================================`);
}

compressImages();
