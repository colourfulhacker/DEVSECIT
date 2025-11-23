import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Courses: NextPage = () => {
  const courses = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      price: '₹24,999',
      duration: '4–6 Months',
      description: 'Frontend & Backend mastery with real projects',
      modules: ['HTML, CSS, JavaScript', 'React.js + Next.js', 'Node.js, Express', 'Databases & APIs', 'CI/CD & Deployment'],
      learnings: 6
    },
    {
      id: 2,
      title: 'DevSecOps',
      price: '₹29,999',
      duration: '3 Months',
      description: 'CI/CD, Docker, Kubernetes & Cloud Security',
      modules: ['Git/GitHub Automation', 'Jenkins/GitHub Actions', 'Container Security', 'Log Monitoring'],
      learnings: 4
    },
    {
      id: 3,
      title: 'Cyber Security & Ethical Hacking',
      price: '₹34,999',
      duration: '4–6 Months',
      description: 'Ethical hacking, SOC analysis & penetration testing',
      modules: ['Linux Security', 'OWASP Top 10', 'Vulnerability Assessment', 'Digital Forensics'],
      learnings: 5
    },
    {
      id: 4,
      title: 'Mobile App Development',
      price: '₹27,999',
      duration: '3–4 Months',
      description: 'Flutter, Android & iOS development',
      modules: ['Dart Programming', 'Flutter Framework', 'State Management', 'App Security'],
      learnings: 4
    },
    {
      id: 5,
      title: 'Cloud Computing (AWS/Azure/GCP)',
      price: '₹22,999',
      duration: '2–3 Months',
      description: 'Cloud architecture & deployment',
      modules: ['EC2, Lambda', 'S3 Buckets', 'VPC & Load Balancers', 'Cloud Security'],
      learnings: 4
    },
    {
      id: 6,
      title: 'AI & Machine Learning',
      price: '₹34,999',
      duration: '4–6 Months',
      description: 'Deep learning, NLP & AI model deployment',
      modules: ['Python for AI', 'ML Algorithms', 'Deep Learning (CNN, RNN)', 'ChatGPT/Gemini APIs'],
      learnings: 4
    },
    {
      id: 7,
      title: 'Secure Software Engineering',
      price: '₹19,999',
      duration: '2–3 Months',
      description: 'Secure code & threat modeling',
      modules: ['SDLC Security', 'OWASP Practices', 'API Security', 'Encryption & Hashing'],
      learnings: 4
    },
    {
      id: 8,
      title: 'Advanced Backend Engineering',
      price: '₹28,999',
      duration: '3–4 Months',
      description: 'Microservices, Kafka & scalable systems',
      modules: ['Microservices Architecture', 'Kafka, RabbitMQ', 'API Gateway', 'Database Scaling'],
      learnings: 4
    },
    {
      id: 9,
      title: 'Data Engineering & Big Data',
      price: '₹32,999',
      duration: '4–5 Months',
      description: 'ETL pipelines, Spark & data warehousing',
      modules: ['ETL/ELT Pipelines', 'Spark, Hadoop', 'BigQuery/AWS Glue', 'Streaming Pipelines'],
      learnings: 4
    },
    {
      id: 10,
      title: 'Software Testing & QA',
      price: '₹17,999',
      duration: '2–3 Months',
      description: 'Manual & automation testing',
      modules: ['Selenium, Appium', 'API Testing (Postman)', 'JMeter Performance Tests', 'CI/CD Testing'],
      learnings: 4
    }
  ];

  return (
    <div suppressHydrationWarning className="min-h-screen dark:bg-dark-900 light:bg-white transition-colors">
      <Head>
        <title>Courses - DEV SEC IT | Professional IT Training</title>
        <meta name="description" content="10 professional IT courses from Full-Stack Development to AI/ML. Practical training with certifications and job support." />
      </Head>

      <Header activePage="courses" />

      {/* Header */}
      <div className="pt-24 pb-20 px-4 text-center dark:bg-gradient-to-b dark:from-dark-800 dark:to-dark-900 light:bg-gradient-to-b light:from-gray-50 light:to-white">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 dark:text-white light:text-gray-900">
          Professional <span className="text-gradient">IT Courses</span>
        </h1>
        <p className="text-xl md:text-2xl dark:text-gray-300 light:text-gray-600 mb-8 max-w-2xl mx-auto">
          Industry-leading training with certifications, real projects & job support
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <span className="px-6 py-3 dark:bg-dark-800 light:bg-gray-100 rounded-full dark:text-primary-400 light:text-primary-600">✨ 100% Practical</span>
          <span className="px-6 py-3 dark:bg-dark-800 light:bg-gray-100 rounded-full dark:text-primary-400 light:text-primary-600">💼 Job Support</span>
          <span className="px-6 py-3 dark:bg-dark-800 light:bg-gray-100 rounded-full dark:text-primary-400 light:text-primary-600">📜 Certified</span>
        </div>
      </div>

      {/* Courses Grid */}
      <section id="courses" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="glass-card dark:glass-dark light:bg-gray-50 border dark:border-dark-700 light:border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold dark:text-white light:text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-sm dark:text-gray-400 light:text-gray-600 mb-3">{course.description}</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="text-2xl font-bold text-primary-400">{course.price}</div>
                <div className="text-sm dark:text-gray-400 light:text-gray-600">⏱️ {course.duration}</div>
              </div>

              <div className="space-y-2 mb-6">
                {course.modules.map((module, idx) => (
                  <div key={idx} className="text-sm dark:text-gray-300 light:text-gray-700 flex items-start gap-2">
                    <span className="text-primary-400">✓</span>
                    <span>{module}</span>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/918101979855" className="w-full inline-block text-center bg-gradient-to-r from-primary-500 to-blue-600 px-4 py-3 rounded-lg font-semibold text-white hover:shadow-lg transition">
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto dark:bg-dark-800 light:bg-gray-50 rounded-2xl p-12 border dark:border-dark-700 light:border-gray-200">
          <h2 className="text-3xl font-bold dark:text-white light:text-gray-900 mb-4">Ready to Transform Your Career?</h2>
          <p className="dark:text-gray-300 light:text-gray-600 mb-8">
            Get lifetime access to study materials, real-world projects, and job placement support.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:+918101979855" className="px-8 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg transition">
              📞 Call +91 8101 979855
            </a>
            <a href="https://wa.me/918101979855" className="px-8 py-3 dark:bg-dark-700 light:bg-gray-200 rounded-lg font-semibold dark:text-white light:text-gray-900 hover:shadow-lg transition">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
