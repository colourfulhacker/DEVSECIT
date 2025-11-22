
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ThemeToggle } from '../components/ThemeToggle';

const VirtualCTO: NextPage = () => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Virtual CTO Service',
    description: 'Strategic technology leadership for startups and businesses with equity partnership model',
    provider: {
      '@type': 'Organization',
      name: 'DevSecIT'
    }
  };

  return (
    <div className="min-h-screen dark:bg-dark-900 light:bg-white transition-colors duration-300">
      <Head>
        <title>Virtual CTO Service - DevSecIT | Startup Technology Leadership</title>
        <meta name="description" content="Virtual CTO service with 10% equity stake. 90-day MVP guarantee, 100% legal agreements, strategic technology mentorship for startups." />
        <meta name="keywords" content="virtual CTO, startup founder, technical advisor, MVP development, equity partnership, technology leadership" />
        <link rel="canonical" href="https://devsecit.com/virtual-cto" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      </Head>

      <nav className="fixed top-0 w-full z-50 dark:bg-dark-900/95 light:bg-white/95 backdrop-blur-lg dark:border-dark-700 light:border-gray-200 border-b transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-display font-bold text-gradient">DevSecIT</Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="#contact" className="hidden sm:inline-block bg-gradient-to-r from-primary-500 to-blue-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all text-white">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 overflow-hidden dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-primary-900/20 dark:via-dark-900 dark:to-blue-900/20 light:bg-gradient-to-br light:from-primary-50 light:via-white light:to-blue-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 dark:bg-primary-500/10 light:bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 dark:bg-primary-500/10 light:bg-primary-50 rounded-full border dark:border-primary-500/30 light:border-primary-200">
              <span className="text-primary-400 dark:text-primary-400 light:text-primary-600 font-semibold text-sm">Your Technology Partner</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight dark:text-white light:text-gray-900 transition-colors duration-300">
              Virtual <span className="text-gradient">CTO Service</span>
            </h1>
            <p className="text-xl md:text-2xl dark:text-gray-400 light:text-gray-600 mb-8 max-w-3xl mx-auto transition-colors duration-300">
              Strategic technology leadership for startups. Build your MVP in 90 days with equity partnership, legal agreements, and mentorship.
            </p>
            <Link href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-xl font-bold text-lg text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105">
              Apply for Virtual CTO
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center dark:text-white light:text-gray-900 transition-colors duration-300">
            What You <span className="text-gradient">Get</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: '🎯',
                title: 'MVP in 90 Days',
                desc: 'Rapid delivery of your minimum viable product with all core features and security built-in.'
              },
              {
                icon: '💰',
                title: '10% Equity',
                desc: 'We take equity stake showing our commitment to your success long-term.'
              },
              {
                icon: '📋',
                title: '100% Legal Agreements',
                desc: 'Comprehensive legal framework with clear IP rights, equity terms, and exit clauses.'
              },
              {
                icon: '👔',
                title: 'Strategic Leadership',
                desc: 'Act as your CTO providing technology decisions, roadmap planning, and hiring guidance.'
              },
              {
                icon: '🔒',
                title: 'Security & Compliance',
                desc: 'Enterprise-grade security and compliance built into every aspect of your product.'
              },
              {
                icon: '🚀',
                title: 'Scale Support',
                desc: 'Ongoing support to scale your technology as you grow and reach product-market fit.'
              }
            ].map((item, i) => (
              <div key={i} className="dark:bg-dark-900 light:bg-white p-8 rounded-2xl border dark:border-dark-700 light:border-gray-200">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 dark:text-white light:text-gray-900 transition-colors duration-300">{item.title}</h3>
                <p className="dark:text-gray-400 light:text-gray-600 transition-colors duration-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold mb-12 text-center dark:text-white light:text-gray-900 transition-colors duration-300">
            How It <span className="text-gradient">Works</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                items: [
                  'Understand your vision and business model',
                  'Analyze competitive landscape',
                  'Define MVP scope and features',
                  'Create technology roadmap'
                ]
              },
              {
                step: '02',
                title: 'Legal Framework',
                items: [
                  'Draft equity agreement with clear terms',
                  'Define CTO responsibilities and scope',
                  'Establish IP rights and ownership',
                  'Set exit and liquidity clauses'
                ]
              },
              {
                step: '03',
                title: 'MVP Development',
                items: [
                  'Build core product features',
                  'Implement security best practices',
                  'Set up infrastructure and deployment',
                  'Create comprehensive documentation'
                ]
              },
              {
                step: '04',
                title: 'Launch & Support',
                items: [
                  'Deploy to production',
                  'Provide ongoing technical leadership',
                  'Help with fundraising strategy',
                  'Guide team scaling and hiring'
                ]
              }
            ].map((phase, i) => (
              <div key={i} className="dark:bg-dark-800 light:bg-gray-50 p-8 rounded-xl border dark:border-dark-700 light:border-gray-200">
                <div className="text-4xl font-bold text-primary-400 mb-3">{phase.step}</div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white light:text-gray-900 transition-colors duration-300">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex gap-2 dark:text-gray-400 light:text-gray-600 transition-colors duration-300">
                      <span className="text-primary-400">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold mb-8 text-center dark:text-white light:text-gray-900 transition-colors duration-300">
            Ideal <span className="text-gradient">Founders</span>
          </h2>
          <p className="text-lg dark:text-gray-400 light:text-gray-600 mb-8 text-center transition-colors duration-300">
            We&apos;re looking for founders who have:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Clear business idea with market validation',
              'Willingness to work with a dedicated tech partner',
              'Focus on execution and growth',
              'Open to equity partnership model',
              'Commitment to building a sustainable business',
              'Vision to transform their industry'
            ].map((criterion, i) => (
              <div key={i} className="flex gap-3 dark:bg-dark-900 light:bg-white p-4 rounded-lg">
                <span className="text-primary-400 font-bold text-lg">✓</span>
                <span className="dark:text-gray-400 light:text-gray-600 transition-colors duration-300">{criterion}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 dark:text-white light:text-gray-900 transition-colors duration-300">
            Ready to Build Your <span className="text-gradient">Vision?</span>
          </h2>
          <p className="text-lg dark:text-gray-400 light:text-gray-600 mb-8 transition-colors duration-300">
            Let&apos;s discuss your idea. If it&apos;s a great fit, we can start building your MVP immediately.
          </p>
          <Link href="/#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105">
            Apply for Virtual CTO Program
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VirtualCTO;
