import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';
import { ThemeToggle } from '../../components/ThemeToggle';
import { getCityBySlug, getAllCitySlugs, City } from '../../lib/cities';
import { 
  generateOrganizationSchema, 
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateAggregateOfferSchema 
} from '../../lib/seoSchema';

interface CityPageProps {
  city: City;
}

const CityPage: NextPage<CityPageProps> = ({ city }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sales@devsecit.com?subject=Project Inquiry from ${city.name} - ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nCity: ${city.name}\n\nProject Details:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateServiceSchema(
      `Software Development Services in ${city.name}`,
      `Professional custom software development, cybersecurity, and API integration services in ${city.name}. Serving businesses across ${city.region}.`
    ),
    generateAggregateOfferSchema()
  ];

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://devsecit.com/cities/${city.slug}`,
    name: `DevSecIT ${city.name}`,
    description: city.description,
    areaServed: city.state,
    address: {
      '@type': 'PostalAddress',
      addressRegion: city.state,
      addressCountry: 'IN'
    }
  };

  return (
    <div className="min-h-screen dark:bg-dark-900 light:bg-white transition-colors duration-300">
      <Head>
        <title>{`Software Development & Custom APIs in ${city.name} | DevSecIT`}</title>
        <meta name="description" content={city.metaDescription} />
        <meta name="keywords" content={city.keywords} />
        <link rel="canonical" href={`https://devsecit.com/cities/${city.slug}`} />
        <meta property="og:title" content={`Software Development Services in ${city.name}`} />
        <meta property="og:description" content={city.description} />
        <meta property="og:url" content={`https://devsecit.com/cities/${city.slug}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
        {schemas.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </Head>

      <nav className="fixed top-0 w-full z-50 dark:bg-dark-900/95 light:bg-white/95 backdrop-blur-lg dark:border-dark-700 light:border-gray-200 border-b transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-display font-bold text-gradient">DevSecIT</Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="dark:text-gray-300 light:text-gray-700 hover:text-primary-400 transition-colors">Services</a>
              <a href="#techstack" className="dark:text-gray-300 light:text-gray-700 hover:text-primary-400 transition-colors">Tech Stack</a>
              <a href="#contact" className="dark:text-gray-300 light:text-gray-700 hover:text-primary-400 transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <a 
                href="#contact" 
                className="hidden sm:inline-block bg-gradient-to-r from-primary-500 to-blue-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all text-white"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 overflow-hidden dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-primary-900/20 dark:via-dark-900 dark:to-blue-900/20 light:bg-gradient-to-br light:from-primary-50 light:via-white light:to-blue-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 dark:bg-primary-500/10 light:bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 dark:bg-blue-500/10 light:bg-blue-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 dark:bg-primary-500/10 light:bg-primary-50 rounded-full border dark:border-primary-500/30 light:border-primary-200 transition-colors duration-300">
              <span className="text-primary-400 dark:text-primary-400 light:text-primary-600 font-semibold text-sm transition-colors duration-300">{city.name} • {city.region}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight dark:text-white light:text-gray-900 transition-colors duration-300">
              Software Development in <br />
              <span className="text-gradient">{city.name}</span>
            </h1>
            <p className="text-xl md:text-2xl dark:text-gray-400 light:text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
              {city.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#contact" 
                className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-lg text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105"
              >
                Start Your Project
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <Link 
                href="/" 
                className="px-8 py-4 border-2 dark:border-primary-500/50 light:border-primary-400 rounded-lg font-bold text-lg dark:text-gray-100 light:text-gray-900 dark:hover:bg-primary-500/10 light:hover:bg-primary-50 transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900 transition-colors duration-300">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
              Comprehensive software solutions tailored for {city.name} businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Custom Software Development', desc: 'Bespoke applications built for your unique business needs' },
              { title: 'Cybersecurity Integration', desc: 'Enterprise-grade security built into every layer' },
              { title: 'Custom API Development', desc: '7-day MVP delivery for rapid prototyping' },
              { title: 'AI & Automation', desc: 'Machine learning solutions to optimize processes' },
              { title: 'Full Project Outsourcing', desc: 'End-to-end project delivery from concept to deployment' },
              { title: 'Digital Transformation', desc: 'Modernize your business with cutting-edge technology' }
            ].map((service, i) => (
              <div key={i} className="group dark:bg-dark-900 light:bg-white p-8 rounded-2xl dark:border dark:border-dark-700 light:border light:border-gray-200 dark:hover:border-primary-500/50 light:hover:border-primary-400 transition-all duration-300 dark:hover:shadow-2xl dark:hover:shadow-primary-500/10 light:hover:shadow-lg light:hover:shadow-primary-200/20">
                <h3 className="text-2xl font-bold mb-3 dark:text-gray-100 light:text-gray-900 transition-colors duration-300">{service.title}</h3>
                <p className="dark:text-gray-400 light:text-gray-600 transition-colors duration-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 dark:text-white light:text-gray-900 transition-colors duration-300">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl dark:text-gray-400 light:text-gray-600 mb-8 transition-colors duration-300">
                Get in touch with us today and let&apos;s discuss how we can help your business in {city.name} grow with custom software solutions.
              </p>
              <div className="space-y-4">
                <a href={`mailto:${city.managerEmail}`} className="block p-4 dark:bg-primary-900/20 light:bg-primary-50 rounded-lg border dark:border-primary-500/30 light:border-primary-200 dark:hover:border-primary-500/50 light:hover:border-primary-300 transition-colors">
                  <div className="text-primary-400 font-bold text-lg mb-2">{city.name} Office Manager</div>
                  <div className="dark:text-gray-300 light:text-gray-800 text-base font-semibold">{city.managerEmail}</div>
                  <div className="dark:text-gray-400 light:text-gray-600 text-xs mt-2">Dedicated contact for {city.name}</div>
                </a>
                <a href={`https://wa.me/918101979855?text=Hi DevSecIT, I'm from ${city.name} and interested in software development services`} target="_blank" rel="noopener noreferrer" className="block p-4 dark:bg-dark-800 light:bg-gray-100 rounded-lg dark:hover:bg-dark-700 light:hover:bg-gray-200 transition-colors">
                  <div className="text-green-400 font-bold">💬 WhatsApp</div>
                  <div className="dark:text-gray-400 light:text-gray-600 text-sm transition-colors">Chat with us directly</div>
                </a>
                <a href="mailto:sales@devsecit.com" className="block p-4 dark:bg-dark-800 light:bg-gray-100 rounded-lg dark:hover:bg-dark-700 light:hover:bg-gray-200 transition-colors">
                  <div className="text-primary-400 font-bold">📧 General Sales</div>
                  <div className="dark:text-gray-400 light:text-gray-600 text-sm transition-colors">sales@devsecit.com</div>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="dark:bg-dark-800 light:bg-gray-50 p-8 rounded-2xl border dark:border-dark-700 light:border-gray-200 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-6 dark:text-white light:text-gray-900 transition-colors duration-300">Send us a Message</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 dark:bg-dark-700 light:bg-white border dark:border-dark-600 light:border-gray-300 rounded-lg dark:text-white light:text-gray-900 dark:placeholder-gray-500 light:placeholder-gray-400 transition-colors duration-300"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 dark:bg-dark-700 light:bg-white border dark:border-dark-600 light:border-gray-300 rounded-lg dark:text-white light:text-gray-900 dark:placeholder-gray-500 light:placeholder-gray-400 transition-colors duration-300"
                  required
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 dark:bg-dark-700 light:bg-white border dark:border-dark-600 light:border-gray-300 rounded-lg dark:text-white light:text-gray-900 dark:placeholder-gray-500 light:placeholder-gray-400 transition-colors duration-300"
                />
                <textarea
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 dark:bg-dark-700 light:bg-white border dark:border-dark-600 light:border-gray-300 rounded-lg dark:text-white light:text-gray-900 dark:placeholder-gray-500 light:placeholder-gray-400 transition-colors duration-300"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="dark:bg-dark-800 light:bg-gray-50 py-8 border-t dark:border-dark-700 light:border-gray-200 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="dark:text-gray-400 light:text-gray-600 transition-colors duration-300">
            DevSecIT © 2025. Serving {city.name} and across India with premium software solutions.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="/privacy" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition-colors">Terms</Link>
            <Link href="/" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllCitySlugs();
  return {
    paths: slugs.map(slug => ({
      params: { city: slug }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<CityPageProps> = async ({ params }) => {
  const city = getCityBySlug(params?.city as string);
  
  if (!city) {
    return { notFound: true };
  }

  return {
    props: { city },
    revalidate: 3600
  };
};

export default CityPage;
