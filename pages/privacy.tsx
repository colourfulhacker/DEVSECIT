import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Privacy: NextPage = () => {
  return (
    <div className="min-h-screen bg-dark-900">
      <Head>
        <title>Privacy Policy - DevSecIT</title>
        <meta name="description" content="DevSecIT Privacy Policy - How we collect, use, and protect your information." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="fixed top-0 w-full z-50 bg-dark-900/95 backdrop-blur-lg border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-display font-bold text-gradient">DevSecIT</Link>
            <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors">← Back to Home</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <p className="text-gray-400 mb-8">Last updated: November 21, 2024</p>

        <div className="space-y-8 text-gray-300">
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

        <div className="mt-12 pt-8 border-t border-dark-700">
          <Link href="/" className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-primary-500/50 transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
