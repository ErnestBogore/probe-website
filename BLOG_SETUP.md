# Blog Setup with DatoCMS

This document explains how the blog functionality is integrated with DatoCMS.

## Overview

The blog system uses DatoCMS as a headless CMS to manage blog content. The implementation includes:

- **Blog listing page** at `/blog` - displays all published blog posts
- **Individual blog post pages** at `/blog/[slug]` - shows full blog post content
- **Rich content support** - structured text with images, videos, and custom formatting
- **SEO optimization** - meta tags, Open Graph, and Twitter Card support
- **Responsive design** - mobile-first layout with Tailwind CSS

## DatoCMS Configuration

### Project Details
- **Project ID**: 164164
- **Project Name**: Probe
- **Admin URL**: probe-9594.admin.datocms.com

### Required Content Models

You need to create the following content models in your DatoCMS project:

#### 1. Blog Post Model
- **API Key**: `blog_post`
- **Name**: Blog Post

**Fields**:
- `title` (Single-line string) - Required
- `slug` (Slug) - Required, auto-generated from title
- `excerpt` (Multi-paragraph text) - Optional
- `content` (Structured text) - Optional, with blocks support
- `published_date` (Date) - Optional
- `author` (Single link to Author) - Optional
- `featured_image` (Single asset) - Optional
- `tags` (Multiple links to Tag) - Optional
- `seo` (Single link to SEO) - Optional

#### 2. Author Model
- **API Key**: `author`
- **Name**: Author

**Fields**:
- `name` (Single-line string) - Required
- `bio` (Multi-paragraph text) - Optional  
- `picture` (Single asset) - Optional

#### 3. Tag Model
- **API Key**: `tag`
- **Name**: Tag

**Fields**:
- `name` (Single-line string) - Required
- `slug` (Slug) - Required, auto-generated from name

#### 4. SEO Model
- **API Key**: `seo`
- **Name**: SEO

**Fields**:
- `title` (Single-line string) - Optional
- `description` (Multi-paragraph text) - Optional
- `image` (Single asset) - Optional

#### 5. Image Block Model (for structured content)
- **API Key**: `image_block`
- **Name**: Image Block

**Fields**:
- `image` (Single asset) - Required

#### 6. Video Block Model (for structured content)
- **API Key**: `video_block`
- **Name**: Video Block

**Fields**:
- `video` (Single asset) - Required

## Environment Variables

The following environment variables are required:

```bash
# DatoCMS API Configuration
DATOCMS_API_TOKEN=your_api_token_here
DATOCMS_ENVIRONMENT=main
NEXT_PUBLIC_DATOCMS_PROJECT_ID=your_project_id_here
```

**Important**: Never commit your API token to version control. The `.env.local` file is already in `.gitignore`.

## File Structure

```
src/
├── app/
│   ├── blog/
│   │   ├── page.tsx              # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx          # Individual blog post page
├── lib/
│   └── datocms.ts               # DatoCMS API client
└── types/
    └── blog.ts                  # TypeScript interfaces
```

## Features

### Blog Listing Page (`/blog`)
- Grid layout of blog post cards
- Featured images with hover effects
- Author information and avatars
- Publication dates
- Tag display
- Responsive design (1/2/3 column layout)
- Error handling for API failures

### Blog Post Page (`/blog/[slug]`)
- Full-width featured image
- Structured content rendering
- Custom typography with Tailwind CSS
- Author bio and picture
- Publication and update dates
- Tag listing
- Navigation back to blog listing
- SEO meta tags
- Static generation for performance

### Content Features
- **Rich Text**: Full structured text support with custom styling
- **Images**: Embedded images with responsive sizing
- **Videos**: Embedded video support with controls
- **Links**: External and internal link support
- **Typography**: Custom heading styles, paragraphs, and formatting

## Usage

1. **Create content** in your DatoCMS project using the admin interface
2. **Publish posts** - only published posts will appear on the site
3. **Access the blog** at `yoursite.com/blog`
4. **Individual posts** are accessible at `yoursite.com/blog/your-post-slug`

## Development

To run the blog locally:

```bash
npm run dev
```

Visit `http://localhost:3000/blog` to see the blog listing.

## Deployment

The blog uses Next.js static generation for optimal performance:

- Blog post pages are pre-generated at build time
- Content is cached for 60 seconds in production
- Images are optimized automatically by Next.js

## Troubleshooting

### Common Issues

1. **"No blog posts yet" message**
   - Check that you have published blog posts in DatoCMS
   - Verify your API token has read permissions
   - Ensure the content model API keys match those in the code

2. **Images not loading**
   - Check that images are published in DatoCMS
   - Verify the image URLs are accessible
   - Add your DatoCMS domain to Next.js image domains if needed

3. **API errors**
   - Verify your DATOCMS_API_TOKEN is correct
   - Check that the project ID matches your DatoCMS project
   - Ensure your content models match the expected structure

### Logs

Check the browser console and server logs for detailed error messages when troubleshooting. 