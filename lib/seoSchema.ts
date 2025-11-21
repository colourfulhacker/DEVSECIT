// SEO Schema.org structured data generation for better search engine visibility

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevSecIT",
    "url": "https://devsecit.com",
    "logo": "https://devsecit.com/logo.png",
    "description": "Elite software development and cybersecurity solutions in West Bengal. Custom development, AI integration, rapid API creation in 7 days.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8101979855",
      "contactType": "Sales",
      "email": "sales@devsecit.com"
    },
    "sameAs": [
      "https://www.facebook.com/devsecit",
      "https://twitter.com/devsecit",
      "https://www.linkedin.com/company/devsecit"
    ],
    "areaServed": ["West Bengal", "India", "Global"],
    "knowsAbout": [
      "Software Development",
      "Cybersecurity",
      "AI Integration",
      "Custom API Development",
      "Full Stack Development",
      "Digital Transformation"
    ]
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DevSecIT - West Bengal IT Solutions",
    "image": "https://devsecit.com/logo.png",
    "description": "Premier software development and cybersecurity company serving West Bengal and India with custom solutions, API development, and AI integration.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "West Bengal",
      "addressCountry": "India"
    },
    "telephone": "+91-8101979855",
    "email": "sales@devsecit.com",
    "url": "https://devsecit.com",
    "priceRange": "Customizable",
    "areaServed": ["Kolkata", "West Bengal", "India", "Global"],
    "serviceType": ["Software Development", "Cybersecurity", "API Development", "AI Solutions"]
  };
};

export const generateServiceSchema = (serviceName: string, description: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "DevSecIT",
      "url": "https://devsecit.com"
    },
    "areaServed": ["West Bengal", "India", "Global"],
    "availableLanguage": ["en-IN", "hi-IN"]
  };
};

export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateAggregateOfferSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "offerCount": "500+",
    "name": "DevSecIT Services",
    "offers": [
      {
        "@type": "Offer",
        "name": "Custom Software Development",
        "url": "https://devsecit.com#services"
      },
      {
        "@type": "Offer",
        "name": "Cybersecurity Solutions",
        "url": "https://devsecit.com#services"
      },
      {
        "@type": "Offer",
        "name": "7-Day API MVP",
        "url": "https://devsecit.com#api"
      },
      {
        "@type": "Offer",
        "name": "AI & Automation",
        "url": "https://devsecit.com#services"
      }
    ]
  };
};
