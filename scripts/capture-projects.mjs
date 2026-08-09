import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { chromium } from "@playwright/test";
import sharp from "sharp";

const root = process.cwd();
const outputDir = path.join(root, "public", "projects");

const projects = [
  ["https://casamance-legacy-academy.vercel.app/", "casamance-legacy-academy.webp", "Casamance Legacy Academy"],
  ["https://senegram-six.vercel.app/", "senegram.webp", "Senegram"],
  ["https://www.sengaming.xyz/", "sengaming.webp", "SenGaming"]
];

const placeholders = [
  ["project-placeholder-1.webp", "Projet à venir 01"],
  ["project-placeholder-2.webp", "Projet à venir 02"],
  ["project-placeholder-3.webp", "Projet à venir 03"]
];

async function makePlaceholder(fileName, label) {
  const svg = `
    <svg width="1440" height="900" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#050816"/>
          <stop offset=".55" stop-color="#0f172a"/>
          <stop offset="1" stop-color="#083344"/>
        </linearGradient>
      </defs>
      <rect width="1440" height="900" fill="url(#g)"/>
      <g opacity=".22" stroke="#22d3ee">
        <path d="M0 120h1440M0 240h1440M0 360h1440M0 480h1440M0 600h1440M0 720h1440"/>
        <path d="M160 0v900M320 0v900M480 0v900M640 0v900M800 0v900M960 0v900M1120 0v900M1280 0v900"/>
      </g>
      <rect x="420" y="330" width="600" height="240" rx="24" fill="rgba(255,255,255,.08)" stroke="rgba(34,211,238,.42)"/>
      <text x="720" y="430" text-anchor="middle" fill="#f8fafc" font-family="Arial" font-size="54" font-weight="700">${label}</text>
      <text x="720" y="490" text-anchor="middle" fill="#94a3b8" font-family="Arial" font-size="28">Capture à remplacer</text>
    </svg>`;
  await sharp(Buffer.from(svg)).webp({ quality: 88 }).toFile(path.join(outputDir, fileName));
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  await Promise.all(placeholders.map(([fileName, label]) => makePlaceholder(fileName, label)));

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });

    for (const [url, fileName, label] of projects) {
      try {
        await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
        await page.screenshot({ path: path.join(outputDir, fileName), fullPage: false, type: "webp", quality: 86 });
        console.log(`Captured ${label}`);
      } catch (error) {
        console.warn(`Capture failed for ${label}: ${error.message}`);
        await makePlaceholder(fileName, label);
      }
    }
  } finally {
    await browser?.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
