
interface Testimonial {
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  type: 'student' | 'client';
  location: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    role: 'Web Developer',
    company: 'Placed after Full Stack Course',
    location: 'Pune',
    feedback: 'DEV SEC IT completely changed my career. I joined the Full Stack course and within 4 months I got placed as a Web Developer. The trainers were very supportive.',
    rating: 5,
    type: 'student'
  },
  {
    name: 'Rohit Kumar',
    role: 'Bug Bounty Hunter',
    company: 'Ethical Hacking Graduate',
    location: 'Delhi',
    feedback: 'The Ethical Hacking course was amazing. Hands-on labs, real hacking tools, and continuous mentoring. I even started bug bounty hunting.',
    rating: 5,
    type: 'student'
  },
  {
    name: 'Sneha Das',
    role: 'Mobile App Developer',
    company: 'Working Professional',
    location: 'Kolkata',
    feedback: 'I learned Flutter development here and now I am working as a Mobile App Developer. The projects were industry-standard.',
    rating: 5,
    type: 'student'
  },
  {
    name: 'Arvind Mishra',
    role: 'DevOps Engineer',
    company: 'Got Job in 2 Months',
    location: 'Bangalore',
    feedback: 'The DevSecOps training gave me practical knowledge in Docker, Kubernetes, and CI/CD. I secured a job in just two months after completion.',
    rating: 5,
    type: 'student'
  },
  {
    name: 'Meenakshi Iyer',
    role: 'AI/ML Engineer',
    company: 'Building ML Models',
    location: 'Chennai',
    feedback: 'The trainers explain everything in a simple way. The AI/ML course was excellent and helped me build real ML models.',
    rating: 5,
    type: 'student'
  },
  {
    name: 'Rajesh Kumar',
    role: 'CEO & Founder',
    company: 'TechStart India',
    location: 'Mumbai',
    feedback: 'DevSecIT transformed our startup vision into a working MVP in just 90 days. Their Virtual CTO service provided strategic guidance that accelerated our growth by 3x.',
    rating: 5,
    type: 'client'
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
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl dark:text-gray-400 light:text-gray-600 transition-colors duration-300">
            From students to clients - hear what they say about us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="dark:bg-dark-900 light:bg-white p-8 rounded-2xl dark:border dark:border-dark-700 light:border light:border-gray-200 hover:dark:border-primary-500/50 hover:light:border-primary-400 transition-all duration-300 dark:hover:shadow-2xl dark:hover:shadow-primary-500/10 light:hover:shadow-lg light:hover:shadow-primary-200/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  testimonial.type === 'student' 
                    ? 'bg-green-500/10 text-green-400' 
                    : 'bg-blue-500/10 text-blue-400'
                }`}>
                  {testimonial.type === 'student' ? 'Student' : 'Client'}
                </span>
              </div>
              
              <p className="dark:text-gray-300 light:text-gray-700 mb-6 italic leading-relaxed transition-colors duration-300">
                &quot;{testimonial.feedback}&quot;
              </p>
              
              <div>
                <h4 className="font-bold dark:text-white light:text-gray-900 transition-colors duration-300">{testimonial.name}</h4>
                <p className="text-sm dark:text-gray-400 light:text-gray-600 transition-colors duration-300">
                  {testimonial.role}
                </p>
                <p className="text-xs dark:text-gray-500 light:text-gray-500 mt-1 transition-colors duration-300">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
