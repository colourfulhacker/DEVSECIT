
interface Testimonial {
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO & Founder',
    company: 'TechStart India',
    feedback: 'DevSecIT transformed our startup vision into a working MVP in just 90 days. Their Virtual CTO service provided strategic guidance that accelerated our growth by 3x. Highly recommended!',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Product Manager',
    company: 'E-Commerce Solutions Ltd',
    feedback: 'The custom API development was seamless and delivered within 7 days. Their team&apos;s attention to security and performance is exceptional. We&apos;ve integrated 15+ APIs through their platform.',
    rating: 5
  },
  {
    name: 'Amit Patel',
    role: 'CTO',
    company: 'FinTech Innovations',
    feedback: 'We partnered with DevSecIT for cybersecurity integration and full-stack development. Their 24/7 support and 99.9% uptime guarantee gave us the confidence to scale our financial platform.',
    rating: 5
  },
  {
    name: 'Neha Desai',
    role: 'Founder',
    company: 'SaaS Platform Co',
    feedback: 'Exceptional team, exceptional results. DevSecIT handled our complex requirements with professionalism and delivered ahead of schedule. Their AI automation features alone saved us thousands in operational costs.',
    rating: 5
  }
];

export const Testimonials = () => {
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: testimonials.map((t, i) => ({
      '@type': 'Review',
      position: i + 1,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating,
        bestRating: '5',
        worstRating: '1'
      },
      reviewBody: t.feedback,
      author: {
        '@type': 'Person',
        name: t.name
      },
      organizationReviewed: {
        '@type': 'Organization',
        name: 'DevSecIT'
      }
    }))
  };

  return (
    <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors duration-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900 transition-colors duration-300">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl dark:text-gray-400 light:text-gray-600 transition-colors duration-300">
            Trusted by 500+ businesses across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="dark:bg-dark-900 light:bg-white p-8 rounded-2xl dark:border dark:border-dark-700 light:border light:border-gray-200 hover:dark:border-primary-500/50 hover:light:border-primary-400 transition-all duration-300 dark:hover:shadow-2xl dark:hover:shadow-primary-500/10 light:hover:shadow-lg light:hover:shadow-primary-200/20"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              
              <p className="dark:text-gray-300 light:text-gray-700 mb-6 italic leading-relaxed transition-colors duration-300">
                &quot;{testimonial.feedback}&quot;
              </p>
              
              <div>
                <h4 className="font-bold dark:text-white light:text-gray-900 transition-colors duration-300">{testimonial.name}</h4>
                <p className="text-sm dark:text-gray-400 light:text-gray-600 transition-colors duration-300">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
