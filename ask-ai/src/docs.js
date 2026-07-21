import fs from 'node:fs/promises';
import path from 'node:path';
import {config} from './config.js';

const supportedExtensions = new Set(['.md', '.mdx']);

async function walk(directory) {
  const entries = await fs.readdir(directory, {withFileTypes: true});
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
    } else if (supportedExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

export function stripFrontmatter(content) {
  return content.replace(/^---\n[\s\S]*?\n---\n?/, '');
}

export function stripMdx(content) {
  return content
    .replace(/^import\s.+$/gm, '')
    .replace(/^export\s.+$/gm, '')
    .replace(/<([A-Z][A-Za-z0-9.]*)\b[^>]*\/>/g, '')
    .replace(/<([A-Z][A-Za-z0-9.]*)\b[^>]*>[\s\S]*?<\/\1>/g, '');
}

export function getFrontmatterValue(content, field) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    return '';
  }

  const line = match[1]
    .split('\n')
    .find((item) => item.trim().startsWith(`${field}:`));

  return line ? line.replace(`${field}:`, '').trim().replace(/^['"]|['"]$/g, '') : '';
}

export function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[`~!@#$%^&*()+=\[\]{}\\|;:'",.<>/?]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function pathToUrl(filePath, rawContent = '') {
  const relativePath = path.relative(config.docsRoot, filePath).replace(/\\/g, '/');
  const withoutExtension = relativePath.replace(/\.(md|mdx)$/, '');
  const frontmatterSlug = getFrontmatterValue(rawContent, 'slug');

  if (frontmatterSlug) {
    const cleanSlug = frontmatterSlug.replace(/^\/+|\/+$/g, '');
    const directory = path.posix.dirname(withoutExtension);

    if (frontmatterSlug.startsWith('/')) {
      return `/docs/${cleanSlug}`;
    }

    return `/docs/${directory === '.' ? cleanSlug : `${directory}/${cleanSlug}`}`;
  }

  const routePath = withoutExtension.endsWith('/README') ? withoutExtension.replace(/\/README$/, '') : withoutExtension;

  return `/docs/${routePath}`;
}

function getTitle(rawContent, filePath) {
  const frontmatterTitle = getFrontmatterValue(rawContent, 'title') || getFrontmatterValue(rawContent, 'sidebar_label');
  if (frontmatterTitle) {
    return frontmatterTitle;
  }

  const heading = rawContent.match(/^#\s+(.+)$/m);
  if (heading) {
    return heading[1].trim();
  }

  return path.basename(filePath, path.extname(filePath)).replace(/[-_]/g, ' ');
}

export function cleanDocContent(content) {
  return stripMdx(stripFrontmatter(content));
}

export function splitSections(content) {
  const lines = content.split('\n');
  const sections = [];
  let currentHeading = 'Overview';
  let currentLines = [];

  function flush() {
    const text = currentLines.join('\n').trim();
    if (text) {
      sections.push({heading: currentHeading, text});
    }
  }

  for (const line of lines) {
    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      flush();
      currentHeading = heading[2].trim();
      currentLines = [line];
    } else {
      currentLines.push(line);
    }
  }

  flush();
  return sections;
}

function chunkText(text, maxLength = 4500, overlap = 400) {
  if (text.length <= maxLength) {
    return [text];
  }

  const chunks = [];
  let start = 0;

  while (start < text.length) {
    const end = Math.min(start + maxLength, text.length);
    chunks.push(text.slice(start, end).trim());

    if (end === text.length) {
      break;
    }

    start = Math.max(0, end - overlap);
  }

  return chunks;
}

export async function loadDocChunks() {
  const files = await walk(config.docsRoot);
  const chunks = [];

  for (const filePath of files) {
    const rawContent = await fs.readFile(filePath, 'utf8');
    const title = getTitle(rawContent, filePath);
    const url = pathToUrl(filePath, rawContent);
    const content = cleanDocContent(rawContent);
    const sections = splitSections(content);

    sections.forEach((section) => {
      chunkText(section.text).forEach((chunk, index) => {
        const sectionSlug = slugify(section.heading);
        chunks.push({
          id: `${path.relative(config.repoRoot, filePath).replace(/\\/g, '/')}#${sectionSlug}-${index}`,
          title,
          section: section.heading,
          url,
          anchorUrl: sectionSlug === 'overview' ? url : `${url}#${sectionSlug}`,
          sourcePath: path.relative(config.repoRoot, filePath).replace(/\\/g, '/'),
          content: chunk,
        });
      });
    });
  }

  return chunks;
}

export async function loadDocSections(sourcePath) {
  const filePath = path.join(config.repoRoot, sourcePath);
  const rawContent = await fs.readFile(filePath, 'utf8');
  const title = getTitle(rawContent, filePath);
  const url = pathToUrl(filePath, rawContent);
  const content = cleanDocContent(rawContent);

  return {
    title,
    url,
    sourcePath,
    sections: splitSections(content).map((section) => ({
      ...section,
      url,
      anchorUrl: section.heading === 'Overview' ? url : `${url}#${slugify(section.heading)}`,
    })),
  };
}
