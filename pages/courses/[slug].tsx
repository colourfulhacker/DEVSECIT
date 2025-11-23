import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useLayoutEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AdmissionForm } from '../../components/AdmissionForm';
import { COURSES, Course, getCourseBySlug } from '../../lib/content/courses';

interface CourseDetailProps {
  course: Course;
}

const CourseDetail: NextPage<CourseDetailProps> = ({ course }) => {
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'outcomes' | 'career'>('overview');
  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div suppressHydrationWarning className="min-h-screen dark:bg-dark-900 light:bg-white">
      <Head>
        <title>{course.title} - DevSecIT Professional Training</title>
        <meta name="description" content={course.description} />
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
                  ← Back to Course Details
                </button>
                <AdmissionForm onClose={() => setShowAdmissionForm(false)} />
              </div>
            </div>
          ) : (
            <>
              <section className="pt-32 pb-12 px-4 dark:bg-gradient-to-b dark:from-dark-800 dark:to-dark-900 light:bg-gradient-to-b light:from-gray-50 light:to-white">
                <div className="max-w-6xl mx-auto">
                  <Link href="/courses" className="inline-flex items-center gap-2 dark:text-gray-400 light:text-gray-600 hover:text-primary-400 mb-6">
                    ← Back to All Courses
                  </Link>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
                        {course.title}
                      </h1>
                      <p className="text-xl dark:text-gray-300 light:text-gray-600 mb-6">
                        {course.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-4 py-2 dark:bg-primary-500/20 light:bg-primary-100 rounded-full dark:text-primary-400 light:text-primary-700 font-semibold">
                          {course.duration}
                        </span>
                        <span className="px-4 py-2 dark:bg-green-500/20 light:bg-green-100 rounded-full dark:text-green-400 light:text-green-700 font-semibold">
                          {course.price}
                        </span>
                        <span className="px-4 py-2 dark:bg-blue-500/20 light:bg-blue-100 rounded-full dark:text-blue-400 light:text-blue-700 font-semibold">
                          {course.schedule.batchSize}
                        </span>
                      </div>
                    </div>

                    <div className="dark:bg-dark-800 light:bg-gray-50 p-6 rounded-2xl border dark:border-dark-700 light:border-gray-200 h-fit">
                      <h3 className="text-xl font-bold mb-4 dark:text-white light:text-gray-900">Enroll Now</h3>
                      <div className="text-3xl font-bold text-primary-400 mb-4">{course.price}</div>
                      <button
                        onClick={() => setShowAdmissionForm(true)}
                        className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg transition mb-3"
                      >
                        Apply for Admission
                      </button>
                      <a
                        href="https://wa.me/918101979855"
                        className="block w-full px-6 py-3 dark:bg-dark-700 light:bg-gray-200 rounded-lg font-semibold dark:text-white light:text-gray-900 hover:shadow-lg transition text-center"
                      >
                        💬 Chat on WhatsApp
                      </a>
                      <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-2 text-sm dark:text-gray-300 light:text-gray-700">
                          <span className="text-primary-400">✓</span> 100% Practical Training
                        </div>
                        <div className="flex items-center gap-2 text-sm dark:text-gray-300 light:text-gray-700">
                          <span className="text-primary-400">✓</span> Job Support Included
                        </div>
                        <div className="flex items-center gap-2 text-sm dark:text-gray-300 light:text-gray-700">
                          <span className="text-primary-400">✓</span> Certificate on Completion
                        </div>
                        <div className="flex items-center gap-2 text-sm dark:text-gray-300 light:text-gray-700">
                          <span className="text-primary-400">✓</span> Lifetime Access
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="flex gap-4 mb-8 border-b dark:border-dark-700 light:border-gray-200 overflow-x-auto">
                    {(['overview', 'syllabus', 'outcomes', 'career'] as const).map(tab => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 font-semibold capitalize whitespace-nowrap transition ${
                          activeTab === tab
                            ? 'border-b-2 border-primary-500 text-primary-400'
                            : 'dark:text-gray-400 light:text-gray-600 hover:text-primary-400'
                        }`}
                      >
                        {tab === 'syllabus' ? 'Course Modules' : tab === 'outcomes' ? 'Learning Outcomes' : tab}
                      </button>
                    ))}
                  </div>

                  {activeTab === 'overview' && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold mb-4 dark:text-white light:text-gray-900">Course Overview</h2>
                        <p className="text-lg dark:text-gray-300 light:text-gray-700 mb-6">{course.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="dark:bg-dark-800 light:bg-gray-50 p-6 rounded-lg border dark:border-dark-700 light:border-gray-200">
                            <h3 className="font-bold mb-3 dark:text-white light:text-gray-900">Eligibility</h3>
                            <ul className="space-y-2">
                              {course.eligibility.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 dark:text-gray-300 light:text-gray-700">
                                  <span className="text-primary-400">•</span>{item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="dark:bg-dark-800 light:bg-gray-50 p-6 rounded-lg border dark:border-dark-700 light:border-gray-200">
                            <h3 className="font-bold mb-3 dark:text-white light:text-gray-900">Mode of Learning</h3>
                            <ul className="space-y-2">
                              {course.schedule.mode.map((mode, i) => (
                                <li key={i} className="flex items-start gap-2 dark:text-gray-300 light:text-gray-700">
                                  <span className="text-primary-400">•</span>{mode}
                                </li>
                              ))}
                            </ul>
                            <p className="text-sm dark:text-gray-400 light:text-gray-600 mt-4">
                              {course.schedule.type}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4 dark:text-white light:text-gray-900">Tools & Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {course.tools.map((tool, i) => (
                            <span key={i} className="px-4 py-2 dark:bg-dark-800 light:bg-gray-100 rounded-lg dark:text-gray-300 light:text-gray-700 border dark:border-dark-700 light:border-gray-200">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4 dark:text-white light:text-gray-900">Certifications</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          {course.certifications.map((cert, i) => (
                            <div key={i} className="dark:bg-dark-800 light:bg-gray-50 p-4 rounded-lg border dark:border-dark-700 light:border-gray-200">
                              <span className="text-2xl mb-2 block">🏆</span>
                              <p className="text-sm dark:text-gray-300 light:text-gray-700">{cert}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'syllabus' && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold mb-6 dark:text-white light:text-gray-900">
                        Detailed Course Modules ({course.modules.length} Modules)
                      </h2>
                      {course.modules.map((module, i) => (
                        <div key={module.id} className="dark:bg-dark-800 light:bg-gray-50 p-6 rounded-2xl border dark:border-dark-700 light:border-gray-200">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-bold dark:text-white light:text-gray-900 mb-2">
                                Module {module.id}: {module.title}
                              </h3>
                              <span className="text-sm dark:text-gray-400 light:text-gray-600">Duration: {module.duration}</span>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <h4 className="font-semibold dark:text-gray-300 light:text-gray-700 mb-2">Topics Covered:</h4>
                            <ul className="grid md:grid-cols-2 gap-2">
                              {module.topics.map((topic, j) => (
                                <li key={j} className="flex items-start gap-2 dark:text-gray-400 light:text-gray-600">
                                  <span className="text-primary-400">✓</span>{topic}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold dark:text-gray-300 light:text-gray-700 mb-2">Hands-on Projects:</h4>
                            <ul className="space-y-1">
                              {module.handson.map((project, j) => (
                                <li key={j} className="flex items-start gap-2 dark:text-gray-400 light:text-gray-600">
                                  <span className="text-green-400">•</span>{project}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'outcomes' && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold mb-6 dark:text-white light:text-gray-900">What You&apos;ll Learn</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                          {course.outcomes.map((outcome, i) => (
                            <div key={i} className="flex items-start gap-3 dark:bg-dark-800 light:bg-gray-50 p-4 rounded-lg border dark:border-dark-700 light:border-gray-200">
                              <span className="text-xl text-green-400">✓</span>
                              <p className="dark:text-gray-300 light:text-gray-700">{outcome}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4 dark:text-white light:text-gray-900">Capstone Projects</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {course.projects.map((project, i) => (
                            <div key={i} className="dark:bg-dark-800 light:bg-gray-50 p-4 rounded-lg border dark:border-dark-700 light:border-gray-200">
                              <p className="font-semibold dark:text-white light:text-gray-900">{project}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'career' && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-6 dark:text-white light:text-gray-900">Career Support & Placement</h2>
                        <p className="text-lg dark:text-gray-300 light:text-gray-600 mb-6">
                          We provide comprehensive career support to ensure your success after course completion.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          {course.careerSupport.map((support, i) => (
                            <div key={i} className="flex items-start gap-3 dark:bg-dark-800 light:bg-gray-50 p-4 rounded-lg border dark:border-dark-700 light:border-gray-200">
                              <span className="text-xl text-blue-400">•</span>
                              <p className="dark:text-gray-300 light:text-gray-700">{support}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="dark:bg-primary-900/20 light:bg-primary-50 p-8 rounded-2xl border dark:border-primary-700/50 light:border-primary-200">
                        <h3 className="text-xl font-bold mb-4 dark:text-white light:text-gray-900">Ready to Start Your Journey?</h3>
                        <p className="dark:text-gray-300 light:text-gray-700 mb-6">
                          Join hundreds of successful graduates who transformed their careers with DevSecIT.
                        </p>
                        <button
                          onClick={() => setShowAdmissionForm(true)}
                          className="px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg transition"
                        >
                          Apply for {course.title}
                        </button>
                      </div>
                    </div>
                  )}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = COURSES.map(course => ({
    params: { slug: course.slug }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const course = getCourseBySlug(params?.slug as string);

  if (!course) {
    return { notFound: true };
  }

  return {
    props: { course }
  };
};

export default CourseDetail;
