import { faker } from '@faker-js/faker';
import fs from 'fs/promises';
import path from 'path';

// Ensure directories exist
async function ensureDir(dirPath) {
  try {
    await fs.access(dirPath);
  } catch (error) {
    await fs.mkdir(dirPath, { recursive: true });
  }
}

// Generate Empower template pages
async function generateEmpowerPages(count = 10) {
  const contentDir = path.join(process.cwd(), 'content', 'empower');
  await ensureDir(contentDir);

  for (let i = 1; i <= count; i++) {
    const content = `---
id: ${i}
title: "${faker.commerce.productName()} Flow Empower"
subtitle: "${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()}"
heroHeadline: "${faker.commerce.productAdjective()} ${faker.commerce.productName()} That ${faker.company.catchPhrase()}"
benefit1: "${faker.company.buzzPhrase()}"
benefit2: "${faker.company.buzzPhrase()}"
benefit3: "${faker.company.buzzPhrase()}"
ctaButtonText: "Get Your ${faker.commerce.productAdjective()} Flow Now"
heroImage: "/placeholder-product.jpg"
testimonialText: "${faker.lorem.paragraph()}"
testimonialAuthor: "${faker.person.fullName()}"
footerText: "Copyright © ${new Date().getFullYear()} Flow Empower. All Rights Reserved."
---
`;

    await fs.writeFile(path.join(contentDir, `empower-${i}.md`), content);
    console.log(`Created empower-${i}.md`);
  }
}

// Generate Glucose template pages
async function generateGlucosePages(count = 10) {
  const contentDir = path.join(process.cwd(), 'content', 'glucose');
  await ensureDir(contentDir);

  for (let i = 1; i <= count; i++) {
    const content = `---
id: ${i}
title: "${faker.commerce.productName()} Glucose Control Guide"
headline: "${faker.commerce.productAdjective()} Method To ${faker.company.catchPhrase()}"
subheadline: "${faker.lorem.sentence()}"
mainVideo: "/placeholder-video.jpg"
videoUrl: "#"
ctaHeadline: "${faker.company.catchPhrase()}"
ctaButtonText: "Get Access Now"
disclaimer: "${faker.lorem.paragraph()}"
---
`;

    await fs.writeFile(path.join(contentDir, `glucose-${i}.md`), content);
    console.log(`Created glucose-${i}.md`);
  }
}

// Create public folder with placeholder images
async function createPlaceholders() {
  const publicDir = path.join(process.cwd(), 'public');
  await ensureDir(publicDir);

  // Create simple placeholder images
  const placeholderFiles = [
    { name: 'empower-logo.png', content: 'Flow Empower Logo' },
    { name: 'glucose-logo.png', content: 'Glucose Control Guide Logo' },
    { name: 'placeholder-product.jpg', content: 'Product Placeholder' },
    { name: 'placeholder-video.jpg', content: 'Video Placeholder' },
    { name: 'favicon.svg', content: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" fill="#1a56db"/></svg>' }
  ];

  for (const file of placeholderFiles) {
    if (file.name.endsWith('.svg')) {
      await fs.writeFile(path.join(publicDir, file.name), file.content);
    } else {
      // Create a placeholder text file for images
      // In a real scenario, you would generate actual images
      await fs.writeFile(path.join(publicDir, file.name), `This is a placeholder for ${file.content}`);
    }
    console.log(`Created ${file.name}`);
  }
}

// Criar estrutura de diretórios necessária
async function createStructure() {
  const dirs = [
    path.join(process.cwd(), 'content'),
    path.join(process.cwd(), 'content/empower'),
    path.join(process.cwd(), 'content/glucose'),
    path.join(process.cwd(), 'public'),
    path.join(process.cwd(), '.github'),
    path.join(process.cwd(), '.github/workflows')
  ];
  
  for (const dir of dirs) {
    await ensureDir(dir);
    console.log(`Ensured directory exists: ${dir}`);
  }
}

// Main execution
async function main() {
  const count = process.argv[2] ? parseInt(process.argv[2]) : 10;
  
  try {
    await createStructure();
    await createPlaceholders();
    await generateEmpowerPages(count);
    await generateGlucosePages(count);
    console.log(`Successfully generated ${count} pages for each template`);
  } catch (error) {
    console.error('Error generating content:', error);
  }
}

main();