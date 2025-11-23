import { useState } from 'react';

export const PricingCalculator = () => {
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
  const [teamSize, setTeamSize] = useState(1);

  const courses = [
    { id: 1, name: 'Full-Stack Web Development', price: 24999 },
    { id: 2, name: 'DevSecOps', price: 29999 },
    { id: 3, name: 'Cyber Security & Ethical Hacking', price: 34999 },
    { id: 4, name: 'Mobile App Development', price: 27999 },
    { id: 5, name: 'Cloud Computing (AWS/Azure/GCP)', price: 22999 },
    { id: 6, name: 'AI & Machine Learning', price: 34999 },
    { id: 7, name: 'Secure Software Engineering', price: 19999 },
    { id: 8, name: 'Advanced Backend Engineering', price: 28999 },
    { id: 9, name: 'Data Engineering & Big Data', price: 32999 },
    { id: 10, name: 'Software Testing & QA', price: 17999 }
  ];

  const toggleCourse = (courseId: number) => {
    setSelectedCourses(prev =>
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const coursesSubtotal = courses
    .filter(c => selectedCourses.includes(c.id))
    .reduce((sum, c) => sum + c.price, 0);

  const teamDiscount = teamSize > 1 ? 0.1 * teamSize : 0; // 10% per person in team
  const discountAmount = coursesSubtotal * Math.min(teamDiscount, 0.3); // Max 30% discount
  const totalPerPerson = teamSize > 0 ? Math.ceil((coursesSubtotal - discountAmount) / teamSize) : 0;
  const totalAmount = coursesSubtotal - discountAmount;

  return (
    <section className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
            Training <span className="text-gradient">Pricing Calculator</span>
          </h2>
          <p className="text-lg dark:text-gray-400 light:text-gray-600">
            Select courses and team size to calculate your training investment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Course Selection */}
          <div className="lg:col-span-2">
            <div className="dark:bg-dark-800/50 light:bg-gray-50 p-8 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200">
              <h3 className="text-2xl font-bold mb-6 dark:text-white light:text-gray-900">
                Select Courses (₹ INR)
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {courses.map(course => (
                  <label
                    key={course.id}
                    className="flex items-center p-4 dark:bg-dark-900 light:bg-white rounded-lg dark:border dark:border-dark-700 light:border light:border-gray-200 hover:dark:border-primary-500/50 hover:light:border-primary-400 transition cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCourses.includes(course.id)}
                      onChange={() => toggleCourse(course.id)}
                      className="w-5 h-5 accent-primary-500 cursor-pointer"
                    />
                    <div className="ml-3 flex-1">
                      <div className="font-semibold dark:text-white light:text-gray-900">{course.name}</div>
                      <div className="text-sm text-primary-400 font-bold">₹{course.price.toLocaleString('en-IN')}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Summary & Team Size */}
          <div className="space-y-6">
            {/* Team Size */}
            <div className="dark:bg-dark-800/50 light:bg-gray-50 p-6 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200">
              <h3 className="font-bold mb-4 dark:text-white light:text-gray-900">Team Size</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 dark:text-gray-400 light:text-gray-600">
                    Number of people: <span className="text-primary-400 font-bold">{teamSize}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value))}
                    className="w-full h-2 dark:bg-dark-700 light:bg-gray-300 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs dark:text-gray-500 light:text-gray-500 mt-2">
                    <span>1 person</span>
                    <span>20+ people</span>
                  </div>
                </div>
              </div>
              {teamSize > 1 && (
                <div className="mt-4 p-3 dark:bg-green-500/10 light:bg-green-50 rounded-lg border dark:border-green-500/30 light:border-green-300">
                  <div className="text-sm dark:text-green-300 light:text-green-700 font-semibold">
                    Group Discount: {Math.min(teamSize * 10, 30)}% Applied! 🎉
                  </div>
                </div>
              )}
            </div>

            {/* Price Summary */}
            <div className="dark:bg-gradient-to-br dark:from-primary-900/30 dark:to-blue-900/30 light:bg-gradient-to-br light:from-primary-50 light:to-blue-50 p-6 rounded-xl dark:border-2 dark:border-primary-500/50 light:border-2 light:border-primary-300">
              <h3 className="font-bold mb-4 dark:text-white light:text-gray-900">Price Summary</h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between dark:text-gray-300 light:text-gray-700">
                  <span>Courses Subtotal:</span>
                  <span className="font-semibold">₹{coursesSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-400">
                    <span>Group Discount:</span>
                    <span className="font-semibold">-₹{Math.ceil(discountAmount).toLocaleString('en-IN')}</span>
                  </div>
                )}
                {teamSize > 1 && (
                  <div className="flex justify-between dark:text-gray-300 light:text-gray-700">
                    <span>Per Person:</span>
                    <span className="font-semibold">₹{totalPerPerson.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="border-t dark:border-primary-500/30 light:border-primary-300 pt-3 flex justify-between">
                  <span className="font-bold dark:text-white light:text-gray-900">Total Amount:</span>
                  <span className="text-2xl font-bold text-primary-400">₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {selectedCourses.length > 0 ? (
                <a
                  href={`https://wa.me/918101979855?text=Hi DevSecIT! 👋 I'm interested in ${selectedCourses.length} course(s) for ${teamSize} person(s). Total: ₹${totalAmount}. Please send enrollment details and payment options.`}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg transition text-center"
                >
                  💬 Enroll via WhatsApp
                </a>
              ) : (
                <button
                  disabled
                  className="block w-full px-6 py-3 dark:bg-dark-700 light:bg-gray-300 rounded-lg font-bold dark:text-gray-500 light:text-gray-600 cursor-not-allowed opacity-50 text-center"
                >
                  Select courses to continue
                </button>
              )}
            </div>

            <div className="text-xs dark:text-gray-500 light:text-gray-500 text-center">
              💡 Discounts apply automatically for groups of 2+ people
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
