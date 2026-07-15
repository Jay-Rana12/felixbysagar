import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

const pdfDir = './src/assets/Client (2)/Client';
const files = fs.readdirSync(pdfDir).filter(f => f.endsWith('.png') && !f.includes('_cropped'));

async function run() {
    for (const file of files) {
        try {
            const inputPath = path.join(pdfDir, file);
            const outputPath = path.join(pdfDir, file.replace('.png', '_cropped.png'));
            
            if (fs.existsSync(outputPath)) {
                continue;
            }

            console.log(`Cropping ${inputPath}...`);
            const image = await Jimp.read(inputPath);
            const w = image.bitmap.width;
            const h = image.bitmap.height;
            
            let top = 0, bottom = Math.floor(h * 0.8), left = 0, right = w - 1;
            
            for (let y = 0; y < h; y++) {
                let nonWhite = 0;
                for (let x = 0; x < w; x++) {
                    const idx = (w * y + x) * 4;
                    if (image.bitmap.data[idx] < 240) nonWhite++;
                }
                if (nonWhite > w * 0.05) { top = y; break; }
            }
            
            for (let y = Math.floor(h * 0.8); y >= 0; y--) {
                let nonWhite = 0;
                for (let x = 0; x < w; x++) {
                    const idx = (w * y + x) * 4;
                    if (image.bitmap.data[idx] < 240) nonWhite++;
                }
                if (nonWhite > w * 0.05) { bottom = y; break; }
            }
            
            for (let x = 0; x < w; x++) {
                let nonWhite = 0;
                for (let y = top; y <= bottom; y++) {
                    const idx = (w * y + x) * 4;
                    if (image.bitmap.data[idx] < 240) nonWhite++;
                }
                if (nonWhite > (bottom - top) * 0.05) { left = x; break; }
            }
            
            for (let x = w - 1; x >= 0; x--) {
                let nonWhite = 0;
                for (let y = top; y <= bottom; y++) {
                    const idx = (w * y + x) * 4;
                    if (image.bitmap.data[idx] < 240) nonWhite++;
                }
                if (nonWhite > (bottom - top) * 0.05) { right = x; break; }
            }
            
            const cropW = right - left;
            const cropH = bottom - top;
            
            if (cropW > 10 && cropH > 10) {
                const padding = 5;
                const cropX = Math.max(0, left + padding);
                const cropY = Math.max(0, top + padding);
                const finalW = Math.max(1, cropW - padding * 2);
                const finalH = Math.max(1, cropH - padding * 2);
                
                if (cropW < w * 0.9 && cropH < h * 0.9) {
                    image.crop({ x: cropX, y: cropY, w: finalW, h: finalH });
                    await image.write(outputPath);
                    console.log(`Saved ${outputPath}`);
                }
            }
        } catch (err) {
            console.error(`Error ${file}:`, err);
        }
    }
}
run();
