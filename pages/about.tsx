
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ThemeToggle } from '../components/ThemeToggle';

const About: NextPage = () => {
  const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevSecIT',
    description: 'Leading software development and cybersecurity solutions company in India',
    url: 'https://devsecit.com',
    foundingDate: '2020',
    foundingLocation: 'West Bengal, India',
    numberOfEmployees: '50+',
    areaServed: 'India',
    knowsAbout: ['Software Development', 'Cybersecurity', 'API Development', 'AI/ML', 'Cloud Architecture']
  };

  return (
    <div className="min-h-screen dark:bg-dark-900 light:bg-white transition-colors duration-300">
      <Head>
        <title>About DevSecIT - Team & Company Mission | West Bengal, India</title>
        <meta name="description" content="Meet the DevSecIT team. We&apos;re a group of elite developers, architects, and security experts building the future of Indian software technology." />
        <meta name="keywords" content="about devSecIT, team, company, founders, experts, software developers, cybersecurity, India" />
        <link rel="canonical" href="https://devsecit.com/about" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      </Head>

      <nav className="fixed top-0 w-full z-50 dark:bg-dark-900/95 light:bg-white/95 backdrop-blur-lg dark:border-dark-700 light:border-gray-200 border-b transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-display font-bold text-gradient dark:text-gradient light:text-gradient">DevSecIT</Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/#contact" className="hidden sm:inline-block bg-gradient-to-r from-primary-500 to-blue-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all text-white">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-primary-900/20 dark:via-dark-900 dark:to-blue-900/20 light:bg-gradient-to-br light:from-primary-50 light:via-white light:to-blue-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 dark:bg-primary-500/10 light:bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight dark:text-white light:text-gray-900 transition-colors duration-300">
            Meet <span className="text-gradient">DevSecIT</span>
          </h1>
          <p className="text-xl md:text-2xl dark:text-gray-400 light:text-gray-600 mb-8 max-w-3xl mx-auto transition-colors duration-300">
            We&apos;re a team of elite developers, architects, and security experts building the future of Indian software technology.
          </p>
        </div>
      </section>

      <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6 dark:text-white light:text-gray-900 transition-colors duration-300">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-lg dark:text-gray-400 light:text-gray-600 mb-4 leading-relaxed transition-colors duration-300">
                To empower businesses across India with world-class software solutions, cybersecurity integration, and innovative technology that drives growth and transformation.
              </p>
              <p className="text-lg dark:text-gray-400 light:text-gray-600 leading-relaxed transition-colors duration-300">
                We believe in building secure, scalable, and sustainable software that makes a real difference in how businesses operate.
              </p>
            </div>
            <div className="dark:bg-dark-900 light:bg-white p-8 rounded-2xl border dark:border-dark-700 light:border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-center">
                {[
                  { number: '50+', label: 'Team Members' },
                  { number: '500+', label: 'Projects Delivered' },
                  { number: '12+', label: 'Years Experience' },
                  { number: '99.9%', label: 'Uptime SLA' }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-gradient">{stat.number}</div>
                    <div className="text-sm dark:text-gray-400 light:text-gray-600 mt-1 transition-colors duration-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-display font-bold mb-12 text-center dark:text-white light:text-gray-900 transition-colors duration-300">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🎯', title: 'Excellence', desc: 'We deliver nothing but the best in quality, design, and functionality.' },
                { icon: '🔒', title: 'Security First', desc: 'Every line of code is built with security and privacy at its core.' },
                { icon: '💡', title: 'Innovation', desc: 'We embrace cutting-edge technologies to solve tomorrow&apos;s problems today.' },
                { icon: '🤝', title: 'Partnership', desc: 'Your success is our success. We&apos;re invested in your long-term growth.' },
                { icon: '⚡', title: 'Speed', desc: 'Rapid delivery without compromising on quality or security.' },
                { icon: '🌱', title: 'Growth', desc: 'We continuously evolve and help our clients scale their businesses.' }
              ].map((value, i) => (
                <div key={i} className="dark:bg-dark-900 light:bg-white p-8 rounded-2xl border dark:border-dark-700 light:border-gray-200 transition-colors duration-300">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white light:text-gray-900 transition-colors duration-300">{value.title}</h3>
                  <p className="dark:text-gray-400 light:text-gray-600 transition-colors duration-300">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 dark:text-white light:text-gray-900 transition-colors duration-300">
            Why Choose <span className="text-gradient">DevSecIT?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              'Expert team with 12+ years of combined experience',
              '500+ successful projects delivered across India',
              'Security-first approach to all development',
              '24/7 dedicated support and maintenance',
              'Transparent communication and regular updates',
              'Fair pricing with flexible engagement models',
              'Proven track record with enterprise clients',
              'Commitment to quality and innovation'
            ].map((reason, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-primary-400 font-bold text-xl">✓</span>
                <span className="dark:text-gray-400 light:text-gray-600 transition-colors duration-300">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 dark:text-white light:text-gray-900 transition-colors duration-300">
            Ready to Partner With <span className="text-gradient">Us?</span>
          </h2>
          <p className="text-lg dark:text-gray-400 light:text-gray-600 mb-8 transition-colors duration-300">
            Let&apos;s discuss your project and how we can help you achieve your business goals.
          </p>
          <Link href="/#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105">
            Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
