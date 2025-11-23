import { NextResponse } from 'next/server'
import { cities } from '../../lib/cities'
import { COURSES } from '../../lib/content/courses'

export const revalidate = 3600 // ISR: revalidate every hour

export async function GET() {
  const baseUrl = 'https://devsecit.com'
  
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.85', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/pricing', priority: '0.85', changefreq: 'monthly' },
    { url: '/courses', priority: '0.9', changefreq: 'weekly' },
    { url: '/portfolio', priority: '0.75', changefreq: 'monthly' },
    { url: '/virtual-cto', priority: '0.8', changefreq: 'monthly' },
    { url: '/process', priority: '0.7', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms', priority: '0.5', changefreq: 'yearly' },
  ]

  const coursePages = COURSES.map(course => ({
    url: `/courses/${course.slug}`,
    priority: '0.8',
    changefreq: 'monthly' as const,
  }))

  const cityPages = cities.map(city => ({
    url: `/cities/${city.slug}`,
    priority: '0.75',
    changefreq: 'weekly' as const,
  }))

  const allPages = [...staticPages, ...coursePages, ...cityPages]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allPages
  .map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`)
  .join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
