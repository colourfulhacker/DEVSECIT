import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  schemas?: Array<Record<string, unknown>>;
}

export const SEOHead = ({
  title,
  description,
  keywords,
  ogImage = "https://devsecit.com/og-image.png",
  ogUrl = "https://devsecit.com",
  canonicalUrl = "https://devsecit.com",
  schemas = []
}: SEOHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      
      {/* Essential Meta Tags */}
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      
      {/* Keywords - West Bengal & India focused */}
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Author & Copyright */}
      <meta name="author" content="DevSecIT" />
      <meta name="copyright" content="DevSecIT 2025" />
      <meta name="creator" content="DevSecIT" />
      
      {/* Robots & Crawling */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large" />
      <meta name="bingbot" content="index, follow, max-image-preview:large" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en-IN" />
      <meta name="language" content="English" />
      
      {/* Open Graph - Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:site_name" content="DevSecIT" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@devsecit" />
      <meta name="twitter:site" content="@devsecit" />
      
      {/* Geographic & Business Info */}
      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content="West Bengal, India" />
      <meta name="ICBM" content="22.5726,88.3639" />
      
      {/* Contact Info */}
      <meta name="contact" content="sales@devsecit.com" />
      <meta name="phone" content="+91-8101979855" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate Links */}
      <link rel="alternate" hrefLang="en-IN" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      
      {/* Favicon & Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Performance & Prefetch */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Schema.org Structured Data */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
};

export default SEOHead;
