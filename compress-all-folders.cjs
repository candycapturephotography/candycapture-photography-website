const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const folders = ['baby', 'birthday', 'maternity', 'model'];

async function compressFolder(folderName) {
  const inputDir = `./public/images/${folderName}`;
  const outputDir = `./public/images/${folderName}-compressed`;
  
  if (!fs.existsSync(inputDir)) {
    console.log(`Folder not found: ${inputDir}`);
    return;
  }
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const files = fs.readdirSync(inputDir);
  let count = 0;
  let totalOriginal = 0;
  let totalCompressed = 0;
  
  console.log(`\n========== Compressing ${folderName.toUpperCase()} ==========`);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;
    
    const inputPath = path.join(inputDir, file);
    const cleanName = `${folderName}-${(count + 1).toString().padStart(2, '0')}.jpg`;
    const outputPath = path.join(outputDir, cleanName);
    
    try {
      const stats = fs.statSync(inputPath);
      const sizeMB = stats.size / (1024 * 1024);
      totalOriginal += sizeMB;
      
      console.log(`[${count + 1}] ${file} (${sizeMB.toFixed(2)} MB)`);
      
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
      console.log(`    → ${cleanName} (${newSizeMB.toFixed(2)} MB)`);
      count++;
    } catch (err) {
      console.error(`Error: ${file} - ${err.message}`);
    }
  }
  
  console.log(`\n${folderName}: ${totalOriginal.toFixed(2)} MB → ${totalCompressed.toFixed(2)} MB (saved ${(totalOriginal - totalCompressed).toFixed(2)} MB)`);
  return { folder: folderName, count, original: totalOriginal, compressed: totalCompressed };
}

async function main() {
  console.log('Starting compression of all folders...\n');
  
  const results = [];
  for (const folder of folders) {
    const result = await compressFolder(folder);
    if (result) results.push(result);
  }
  
  console.log('\n\n========== SUMMARY ==========');
  let totalOrig = 0, totalComp = 0;
  for (const r of results) {
    totalOrig += r.original;
    totalComp += r.compressed;
    console.log(`${r.folder}: ${r.count} files, ${r.original.toFixed(2)} MB → ${r.compressed.toFixed(2)} MB`);
  }
  console.log(`\nTOTAL: ${totalOrig.toFixed(2)} MB → ${totalComp.toFixed(2)} MB`);
  console.log(`SAVED: ${(totalOrig - totalComp).toFixed(2)} MB`);
  console.log('\nNow run: node replace-folders.cjs');
}

main();
