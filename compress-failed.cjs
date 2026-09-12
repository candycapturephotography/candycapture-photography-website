const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images/Prewedding';
const outputDir = './public/images/prewedding-temp';

const failedFiles = ['02.jpg', '2I1A1888.JPG', '2I1A1910.JPG', 'Beloved.jpg', 'Connenction.jpg', 'Dream.jpg', 'Soulmate.jpg'];

async function compressImages() {
  for (const file of failedFiles) {
    const inputPath = path.join(inputDir, file);
    const cleanName = file.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-\.]/g, '').replace(/--+/g, '-');
    const outputPath = path.join(outputDir, cleanName);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`File not found: ${file}`);
      continue;
    }
    
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
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
  
  console.log('\nDone! Now copy files from prewedding-temp to prewedding folder.');
}

compressImages();
