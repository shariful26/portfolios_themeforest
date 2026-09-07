/**
 * ============================================================================
 * NEXUS PRO — PORTFOLIO ASYNC SERVICE PROVIDER
 * ============================================================================
 * 
 * Clean API-Ready Service Layer.
 * Decouples React UI components from static data files.
 * 
 * Returns Promises resolving static data from portfolio.config.js.
 * Future CMS Expansion: To connect a REST API or Headless CMS, simply update
 * the methods below to make native fetch() calls without touching UI components.
 */

import { portfolioConfig } from '../data/portfolio.config';
import { personaPresets } from '../data/presets';

/**
 * Fetch complete portfolio configuration with optional active preset overlay
 */
export async function getPortfolioConfig(activePresetKey = null) {
  let baseConfig = JSON.parse(JSON.stringify(portfolioConfig));

  if (activePresetKey && personaPresets[activePresetKey]) {
    const preset = personaPresets[activePresetKey];
    baseConfig.personal = {
      ...baseConfig.personal,
      ...preset.personal
    };
  }

  return Promise.resolve(baseConfig);
}

/**
 * Fetch profile personal info
 */
export async function getProfile(activePresetKey = null) {
  const config = await getPortfolioConfig(activePresetKey);
  return config.personal;
}

/**
 * Fetch stats cards
 */
export async function getStats() {
  return Promise.resolve(portfolioConfig.stats);
}

/**
 * Fetch skills categories
 */
export async function getSkillCategories() {
  return Promise.resolve(portfolioConfig.skillCategories);
}

/**
 * Fetch projects with optional category filtering & search query
 */
export async function getProjects({ category = 'All', search = '', featuredOnly = false } = {}) {
  let items = [...portfolioConfig.projects];

  if (featuredOnly) {
    items = items.filter(p => p.featured);
  }

  if (category && category !== 'All') {
    items = items.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (search && search.trim() !== '') {
    const q = search.toLowerCase().trim();
    items = items.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }

  return Promise.resolve(items);
}

/**
 * Fetch single project by slug or ID
 */
export async function getProjectBySlug(slug) {
  const project = portfolioConfig.projects.find(p => p.slug === slug || p.id === slug);
  return Promise.resolve(project || null);
}

/**
 * Fetch work experience timeline
 */
export async function getExperience() {
  return Promise.resolve(portfolioConfig.experience);
}

/**
 * Fetch education & certifications
 */
export async function getEducation() {
  return Promise.resolve(portfolioConfig.education);
}

/**
 * Fetch services grid
 */
export async function getServices() {
  return Promise.resolve(portfolioConfig.services);
}

/**
 * Fetch client testimonials
 */
export async function getTestimonials() {
  return Promise.resolve(portfolioConfig.testimonials);
}

/**
 * Fetch blog posts with optional category filtering
 */
export async function getBlogPosts({ category = 'All', search = '' } = {}) {
  let posts = [...portfolioConfig.blog];

  if (category && category !== 'All') {
    posts = posts.filter(b => b.category.toLowerCase() === category.toLowerCase());
  }

  if (search && search.trim() !== '') {
    const q = search.toLowerCase().trim();
    posts = posts.filter(b => 
      b.title.toLowerCase().includes(q) ||
      b.excerpt.toLowerCase().includes(q)
    );
  }

  return Promise.resolve(posts);
}

/**
 * Fetch single blog post by slug
 */
export async function getBlogPostBySlug(slug) {
  const post = portfolioConfig.blog.find(b => b.slug === slug || b.id === Number(slug));
  return Promise.resolve(post || null);
}

/**
 * Fetch contact section metadata
 */
export async function getContactConfig() {
  return Promise.resolve(portfolioConfig.contact);
}
