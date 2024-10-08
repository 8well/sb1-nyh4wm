import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Replace this with your actual base64 encoded image
const base64Image = "YOUR_BASE64_ENCODED_IMAGE_STRING_HERE";

const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, "");
const buffer = Buffer.from(base64Data, 'base64');

try {
  await fs.writeFile(path.join(__dirname, '../public/founder-image.jpg'), buffer);
  console.log('Founder image saved successfully!');
} catch (err) {
  console.error('Error saving image:', err);
}