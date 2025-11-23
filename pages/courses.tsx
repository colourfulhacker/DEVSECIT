import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useLayoutEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AdmissionForm } from '../components/AdmissionForm';
import { COURSES } from '../lib/content/courses';
import { Award, Briefcase, BookOpen, Users, Monitor, Laptop, Clock, DollarSign, GraduationCap } from 'lucide-react';

const Courses: NextPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);
  
  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div suppressHydrationWarning className="min-h-screen dark:bg-dark-900 light:bg-white">
      <Head>
        <title>Courses - DEV SEC IT | Professional IT Training</title>
        <meta name="description" content="10 professional IT courses from Full-Stack Development to AI/ML. Practical training with certifications and job support." />
      </Head>

      <Header activePage="courses" />

      {isClient && (
      <>
      {showAdmissionForm ? (
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setShowAdmissionForm(false)}
              className="mb-6 flex items-center gap-2 dark:text-gray-400 light:text-gray-600 hover:text-primary-400"
            >
              ← Back to All Courses
            </button>
            <AdmissionForm onClose={() => setShowAdmissionForm(false)} />
          </div>
        </div>
      ) : (
        <>
          <div className="pt-24 pb-20 px-4 text-center dark:bg-gradient-to-b dark:from-dark-800 dark:to-dark-900 light:bg-gradient-to-b light:from-gray-50 light:to-white">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 dark:text-white light:text-gray-900">
              Professional <span className="text-gradient">IT Courses</span>
            </h1>
            <p className="text-xl md:text-2xl dark:text-gray-300 light:text-gray-600 mb-8 max-w-2xl mx-auto">
              Industry-leading training with certifications, real projects & job support
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <span className="px-6 py-3 dark:bg-dark-800 light:bg-gray-100 rounded-full dark:text-primary-400 light:text-primary-600 flex items-center gap-2">
                <Award className="w-4 h-4" /> 100% Practical
              </span>
              <span className="px-6 py-3 dark:bg-dark-800 light:bg-gray-100 rounded-full dark:text-primary-400 light:text-primary-600 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Job Support
              </span>
              <span className="px-6 py-3 dark:bg-dark-800 light:bg-gray-100 rounded-full dark:text-primary-400 light:text-primary-600 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Certified
              </span>
            </div>
            <button
              onClick={() => setShowAdmissionForm(true)}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg transition"
            >
              Apply for Admission
            </button>
          </div>

          {/* Why Choose Us Section */}
          <section className="py-16 px-4 dark:bg-dark-800/50 light:bg-gray-100">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center dark:text-white light:text-gray-900 mb-12">
                Why Choose <span className="text-gradient">DEV SEC IT?</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { Icon: Award, title: '100% Practical Training', desc: 'Live projects & real-world case studies' },
                  { Icon: Briefcase, title: 'Internship & Job Support', desc: '2-3 months internship program + placement assistance' },
                  { Icon: BookOpen, title: 'Hands-on Labs', desc: 'Premium learning materials & practical labs' },
                  { Icon: Users, title: 'Expert Trainers', desc: 'Trained by senior engineers and security experts' },
                  { Icon: Monitor, title: 'Online / Offline', desc: 'Choose your preferred mode of learning' },
                  { Icon: Clock, title: 'Lifetime Access', desc: 'Recordings, notes, and project files forever' },
                  { Icon: DollarSign, title: 'EMI Options', desc: 'Affordable pricing with flexible payment plans' },
                  { Icon: GraduationCap, title: 'Certification', desc: 'Official certification for every course completion' },
                  { Icon: Laptop, title: 'Industry Standards', desc: 'Curriculum aligned with latest industry requirements' }
                ].map((feature, i) => (
                  <div key={i} className="dark:bg-dark-900 light:bg-white p-6 rounded-xl border dark:border-dark-700 light:border-gray-200 hover:shadow-lg transition group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.Icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <h3 className="font-bold dark:text-white light:text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm dark:text-gray-400 light:text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="courses" className="py-20 px-4 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COURSES.map((course) => (
                <div key={course.id} className="dark:bg-dark-800 light:bg-gray-50 rounded-2xl p-6 border dark:border-dark-700 light:border-gray-200 hover:shadow-xl hover:dark:border-primary-500/50 transition-all group">
                  <h3 className="text-xl font-bold dark:text-white light:text-gray-900 mb-2 group-hover:text-primary-400 transition">
                    {course.title}
                  </h3>
                  <p className="text-sm dark:text-gray-400 light:text-gray-600 mb-4">{course.shortDescription}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-2xl font-bold text-primary-400">{course.price}</div>
                    <div className="text-sm dark:text-gray-400 light:text-gray-600">{course.duration}</div>
                    <div className="text-xs dark:text-gray-500 light:text-gray-500">{course.modules.length} Modules • {course.projects.length} Projects</div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {course.modules.slice(0, 3).map((module, idx) => (
                      <div key={idx} className="text-xs dark:text-gray-400 light:text-gray-600 flex items-start gap-2">
                        <span className="text-primary-400">✓</span>
                        <span>{module.title}</span>
                      </div>
                    ))}
                    {course.modules.length > 3 && (
                      <div className="text-xs dark:text-gray-500 light:text-gray-500">
                        + {course.modules.length - 3} more modules
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Link 
                      href={`/courses/${course.slug}`}
                      className="flex-1 text-center bg-gradient-to-r from-primary-500 to-blue-600 px-4 py-3 rounded-lg font-semibold text-white hover:shadow-lg transition"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => setShowAdmissionForm(true)}
                      className="px-4 py-3 dark:bg-dark-700 light:bg-gray-200 rounded-lg font-semibold dark:text-white light:text-gray-900 hover:shadow-lg transition"
                    >
                      Enroll
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-20 px-4 text-center">
            <div className="max-w-2xl mx-auto dark:bg-dark-800 light:bg-gray-50 rounded-2xl p-12 border dark:border-dark-700 light:border-gray-200">
              <h2 className="text-3xl font-bold dark:text-white light:text-gray-900 mb-4">Ready to Transform Your Career?</h2>
              <p className="dark:text-gray-300 light:text-gray-600 mb-8">
                Get lifetime access to study materials, real-world projects, and job placement support.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button
                  onClick={() => setShowAdmissionForm(true)}
                  className="px-8 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg transition"
                >
                  Apply for Admission
                </button>
                <a href="tel:+918101979855" className="px-8 py-3 dark:bg-dark-700 light:bg-gray-200 rounded-lg font-semibold dark:text-white light:text-gray-900 hover:shadow-lg transition">
                  Call +91 8101 979855
                </a>
                <a href="https://wa.me/918101979855" className="px-8 py-3 dark:bg-dark-700 light:bg-gray-200 rounded-lg font-semibold dark:text-white light:text-gray-900 hover:shadow-lg transition">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </section>
        </>
      )}
      </>
      )}

      <Footer />
    </div>
  );
};

export default Courses;
