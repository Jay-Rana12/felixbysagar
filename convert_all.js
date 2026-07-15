import { pdfToPng } from 'pdf-to-png-converter';
import fs from 'fs';
import path from 'path';

const pdfDir = './src/assets/Client/Client';
const files = fs.readdirSync(pdfDir).filter(f => f.endsWith('.pdf'));

async function run() {
    for (const file of files) {
        try {
            const pdfPath = path.join(pdfDir, file);
            const name = file.replace('.pdf', '');
            const outputPath = path.join(pdfDir, `${name}.png`);
            
            if (fs.existsSync(outputPath)) {
                console.log(`Skipping ${file}, image already exists`);
                continue;
            }

            console.log(`Converting ${pdfPath} to ${outputPath}...`);
            const pages = await pdfToPng(pdfPath, {
                viewportScale: 2.0
            });
            if (pages && pages.length > 0) {
                const buffer = pages[0].content || pages[0].buffer;
                if (buffer) {
                    fs.writeFileSync(outputPath, buffer);
                    console.log(`Successfully saved ${outputPath}`);
                }
            }
        } catch (err) {
            console.error(`Error converting ${file}:`, err);
        }
    }
}

run();
