import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Terms: NextPage = () => {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - DevSecIT",
    "description": "Terms of service for DevSecIT software development and API integration services",
    "url": "https://devsecit.com/terms",
    "isPartOf": {
      "@type": "Website",
      "name": "DevSecIT",
      "url": "https://devsecit.com"
    }
  };

  return (
    <div className="min-h-screen dark:bg-dark-900 light:bg-white transition-colors duration-300">
      <Head>
        <title>Terms of Service - DevSecIT | Custom Software Development</title>
        <meta name="description" content="DevSecIT Terms of Service - Legal terms and conditions for custom software development, API integration, and cybersecurity services in West Bengal, India." />
        <meta name="keywords" content="terms of service, service agreement, software development terms, API integration terms, contract terms" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://devsecit.com/terms" />
        <meta property="og:title" content="Terms of Service - DevSecIT" />
        <meta property="og:description" content="Terms and conditions for DevSecIT services" />
        <meta property="og:url" content="https://devsecit.com/terms" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
        />
      </Head>

      <nav className="fixed top-0 w-full z-50 dark:bg-dark-900/95 light:bg-white/95 backdrop-blur-lg dark:border-dark-700 light:border-gray-200 border-b transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-display font-bold text-gradient">DevSecIT</Link>
            <Link href="/" className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-primary-400 transition-colors">← Back to Home</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 dark:text-white light:text-gray-900 transition-colors duration-300">
          Terms of <span className="text-gradient">Service</span>
        </h1>
        <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-8 transition-colors duration-300">Last updated: November 21, 2025</p>

        <div className="space-y-8 text-gray-300 dark:text-gray-300 light:text-gray-700 transition-colors duration-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              By accessing or using DevSecIT&apos;s services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
            <p className="leading-relaxed mb-4">DevSecIT provides the following services:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Custom software development</li>
              <li>Cybersecurity integration and consulting</li>
              <li>AI and automation solutions</li>
              <li>Custom API development</li>
              <li>Full project outsourcing</li>
              <li>Digital transformation consulting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
            <p className="leading-relaxed mb-4">When using our services, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content, features, and functionality of our services are owned by DevSecIT and are protected by international copyright, trademark, and other intellectual property laws. Custom work created for clients will be transferred to the client upon full payment, unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
            <p className="leading-relaxed mb-4">For paid services:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Payment terms will be specified in individual project agreements</li>
              <li>Invoices are due within the timeframe specified in the agreement</li>
              <li>Late payments may incur additional fees</li>
              <li>We reserve the right to suspend services for non-payment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Project Timelines</h2>
            <p className="leading-relaxed">
              While we strive to meet all project deadlines, timelines are estimates and may be affected by factors beyond our control. We commit to communicating any delays promptly and working to minimize their impact.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Warranties and Disclaimers</h2>
            <p className="leading-relaxed">
              Our services are provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, timely, secure, or error-free. We will, however, work diligently to resolve any issues that arise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by law, DevSecIT shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Confidentiality</h2>
            <p className="leading-relaxed">
              We respect the confidentiality of your business information and will not disclose it to third parties except as required by law or with your explicit consent. We may enter into separate Non-Disclosure Agreements (NDAs) for sensitive projects.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Service Level Agreement (SLA)</h2>
            <p className="leading-relaxed">
              For production systems and ongoing support contracts, specific SLA terms will be outlined in your service agreement, including uptime guarantees, response times, and resolution commitments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Termination</h2>
            <p className="leading-relaxed">
              Either party may terminate services with written notice as specified in the project agreement. We reserve the right to terminate access immediately for violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Modifications to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these terms at any time. We will provide notice of significant changes. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law</h2>
            <p className="leading-relaxed">
              These terms shall be governed by and construed in accordance with applicable laws. Any disputes will be resolved through binding arbitration or in courts of competent jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Contact Information</h2>
            <p className="leading-relaxed">
              For questions about these Terms of Service, please contact us at:
              <br /><br />
              Email: <a href="mailto:legal@devsecit.com" className="text-primary-400 hover:text-primary-300">legal@devsecit.com</a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t dark:border-dark-700 light:border-gray-200">
          <Link href="/" className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-primary-500/50 transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;
