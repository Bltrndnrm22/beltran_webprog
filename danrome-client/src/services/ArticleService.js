import seedArticles from '../assets/article-content.js';

const STORAGE_KEY = 'danrome-articles';

const canUseStorage = () => typeof window !== 'undefined' && window.localStorage;

const slugify = (value) =>
  String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || `article-${Date.now()}`;

const isValidImageUrl = (value) => {
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol);
  } catch {
    return false;
  }
};

const readStoredArticles = () => {
  if (!canUseStorage()) {
    return [];
  }

  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writeStoredArticles = (articles) => {
  if (canUseStorage()) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  }
};

export const getArticles = () => [...seedArticles, ...readStoredArticles()];

export const createArticle = ({ title, image, content }) => {
  const cleanTitle = String(title || '').trim();
  const cleanImage = String(image || '').trim();
  const paragraphs = String(content || '')
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  if (!cleanTitle) {
    throw new Error('Title is required.');
  }

  if (!isValidImageUrl(cleanImage)) {
    throw new Error('Enter a valid http or https image URL.');
  }

  if (!paragraphs.length) {
    throw new Error('Content is required.');
  }

  const existingNames = new Set(getArticles().map((article) => article.name));
  const baseName = slugify(cleanTitle);
  let name = baseName;
  let count = 2;

  while (existingNames.has(name)) {
    name = `${baseName}-${count}`;
    count += 1;
  }

  const article = {
    name,
    title: cleanTitle,
    image: cleanImage,
    content: paragraphs,
    createdAt: new Date().toISOString(),
  };

  writeStoredArticles([article, ...readStoredArticles()]);
  return article;
};
