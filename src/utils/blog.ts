import { getCollection, type CollectionEntry } from 'astro:content';

const LABELS: Record<string, string> = {
  'e-waste': 'E-Waste',
  vadodara: 'Vadodara',
  gujarat: 'Gujarat',
  'precious-metals': 'Precious Metals',
  'gold-recovery': 'Gold Recovery',
  'urban-mining': 'Urban Mining',
  regulations: 'Regulations',
  'circular-economy': 'Circular Economy',
  'business-guide': 'Business Guide',
  'data-security': 'Data Security',
  'jewellery-waste': 'Jewellery Waste',
  catalysts: 'Catalysts',
  sustainability: 'Sustainability',
};

export const tagSlug = (tag: string) => tag.toLowerCase().trim().replace(/\s+/g, '-');
export const tagLabel = (tag: string) =>
  LABELS[tagSlug(tag)] ?? tag.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export async function getPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getTags() {
  const counts = new Map<string, number>();
  for (const p of await getPosts()) {
    for (const t of p.data.tags) counts.set(tagSlug(t), (counts.get(tagSlug(t)) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([slug, count]) => ({ slug, count, label: tagLabel(slug) }));
}

export const readingTime = (text: string) => Math.max(1, Math.round(text.split(/\s+/).length / 220));
