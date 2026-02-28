// TypeScript types for the Nxtedge Studio site

export interface SanityImageRef {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface PortableTextBlock {
  _type: 'block';
  _key: string;
  style: string;
  children: Array<{ _type: 'span'; _key: string; text: string; marks: string[] }>;
  markDefs: Array<{ _key: string; _type: string; [key: string]: unknown }>;
}

export type PortableTextContent = PortableTextBlock | { _type: string; _key: string; [key: string]: unknown };

export interface StudioSettings {
  _id: string;
  siteTitle?: string;
  tagline?: string;
  heroHeading?: string;
  heroBio?: string;
  aboutHeading?: string;
  aboutBody?: PortableTextContent[];
  email?: string;
  phone?: string;
  linkedIn?: string;
  instagram?: string;
  calendarLink?: string;
  logo?: SanityImageRef;
  ogImage?: SanityImageRef;
  metaTitle?: string;
  metaDescription?: string;
}

export interface StudioService {
  _id: string;
  title: string;
  description?: string;
  icon?: string;
  tags?: string[];
}

export interface StudioProject {
  _id: string;
  title: string;
  slug?: SanitySlug;
  summary?: string;
  coverImage?: SanityImageRef;
  tags?: string[];
  client?: string;
  liveUrl?: string;
}
