import { pdfToPng } from 'pdf-to-png-converter';
import fs from 'fs';
import path from 'path';

const pdfNames = [
    "Nikunjbhai_Patel"
];

async function run() {
    for (const name of pdfNames) {
        try {
            const pdfPath = `./src/assets/${name}.pdf`;
            const outputPath = `./src/assets/${name}.png`;
            console.log(`Converting ${pdfPath} to ${outputPath}...`);
            const pages = await pdfToPng(pdfPath, {
                viewportScale: 2.0
            });
            if (pages && pages.length > 0) {
                const buffer = pages[0].content || pages[0].buffer;
                if (buffer) {
                    fs.writeFileSync(outputPath, buffer);
                    console.log(`Successfully saved ${outputPath}`);
                } else {
                    console.error(`Could not find content or buffer for ${name}`);
                }
            } else {
                console.error(`No pages returned for ${name}`);
            }
        } catch (err) {
            console.error(`Error converting ${name}:`, err);
        }
    }
}

run();
