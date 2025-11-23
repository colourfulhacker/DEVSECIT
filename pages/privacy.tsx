import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Privacy: NextPage = () => {
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - DevSecIT",
    "description": "Privacy policy for DevSecIT software development company in West Bengal, India",
    "url": "https://devsecit.com/privacy",
    "isPartOf": {
      "@type": "Website",
      "name": "DevSecIT",
      "url": "https://devsecit.com"
    }
  };

  return (
    <div className="min-h-screen dark:bg-dark-900 light:bg-white transition-colors duration-300">
      <Head>
        <title>Privacy Policy - DevSecIT | Software Development West Bengal</title>
        <meta name="description" content="DevSecIT Privacy Policy - Data protection and privacy practices for software development services in West Bengal, India. Secure and compliant." />
        <meta name="keywords" content="privacy policy, data protection, software company India, cybersecurity, GDPR, data privacy" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://devsecit.com/privacy" />
        <meta property="og:title" content="Privacy Policy - DevSecIT" />
        <meta property="og:description" content="How DevSecIT protects your data and privacy" />
        <meta property="og:url" content="https://devsecit.com/privacy" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
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
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-8 transition-colors duration-300">Last updated: November 21, 2025</p>

        <div className="space-y-8 text-gray-300 dark:text-gray-300 light:text-gray-700 transition-colors duration-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              At DevSecIT, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="leading-relaxed mb-4">We may collect information about you in various ways, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personal Data: Name, email address, phone number, and company information you provide when contacting us</li>
              <li>Technical Data: IP address, browser type, device information, and usage patterns</li>
              <li>Communication Data: Messages you send us through our contact forms or email</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver our services and fulfill contractual obligations</li>
              <li>Improve our website and services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security practices include encryption, access controls, and regular security assessments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing and Disclosure</h2>
            <p className="leading-relaxed mb-4">We do not sell your personal information. We may share your information only in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>With service providers who assist us in operating our business</li>
              <li>When required by law or to protect our legal rights</li>
              <li>In connection with a business transaction (merger, acquisition, etc.)</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
            <p className="leading-relaxed mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking</h2>
            <p className="leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
            <p className="leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Children&apos;s Privacy</h2>
            <p className="leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
              <br /><br />
              Email: <a href="mailto:privacy@devsecit.com" className="text-primary-400 hover:text-primary-300">privacy@devsecit.com</a>
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

export default Privacy;
