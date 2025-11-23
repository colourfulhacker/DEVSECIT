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

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateFAQPageSchema = (faqs: Array<{ question: string; answer: string }>) => {
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

export const generateArticleSchema = (title: string, description: string, publishDate: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": publishDate,
    "author": {
      "@type": "Organization",
      "name": "DevSecIT"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DevSecIT",
      "logo": {
        "@type": "ImageObject",
        "url": "https://devsecit.com/logo.png"
      }
    }
  };
};

export const generateRatingSchema = (ratingValue: number, reviewCount: number) => {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": ratingValue.toString(),
    "reviewCount": reviewCount.toString(),
    "bestRating": "5",
    "worstRating": "1"
  };
};

export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DevSecIT",
    "url": "https://devsecit.com",
    "description": "Elite software development and cybersecurity solutions in West Bengal",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://devsecit.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
};

export const generateEducationalOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "DevSecIT Professional Training",
    "url": "https://devsecit.com",
    "logo": "https://devsecit.com/logo.png",
    "description": "Professional IT training and certification programs in software development, cybersecurity, and cloud computing",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8101979855",
      "contactType": "Student Services",
      "email": "admissions@devsecit.com"
    },
    "areaServed": ["West Bengal", "India", "Global"],
    "knowsAbout": [
      "Full Stack Web Development",
      "DevSecOps",
      "Cybersecurity & Ethical Hacking",
      "Mobile App Development",
      "Cloud Computing",
      "AI & Machine Learning",
      "Secure Software Engineering",
      "QA & Testing",
      "Business Analysis",
      "Blockchain Development"
    ]
  };
};

export const generateCourseSchema = (courseName: string, courseDescription: string, duration: string, price: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseName,
    "description": courseDescription,
    "provider": {
      "@type": "Organization",
      "name": "DevSecIT",
      "url": "https://devsecit.com"
    },
    "duration": duration,
    "teaches": [
      "Professional Development",
      "Technical Skills",
      "Industry Best Practices"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    }
  };
};

export const generateContactPageSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact DevSecIT",
    "url": "https://devsecit.com",
    "telephone": "+91-8101979855",
    "email": "sales@devsecit.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8101979855",
      "contactType": "Sales",
      "email": "sales@devsecit.com"
    }
  };
};
