import { useState } from 'react';
import { COURSES, Course } from '../lib/content/courses';

interface FormData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    city: string;
  };
  education: {
    qualification: string;
    fieldOfStudy: string;
    institution: string;
    yearOfPassing: string;
  };
  courseSelection: {
    courseId: string;
    batchType: string;
    modeOfLearning: string;
    startPreference: string;
  };
  additional: {
    workExperience: string;
    currentlyWorking: string;
    careerGoals: string;
    heardAboutUs: string;
  };
  financing: {
    paymentPlan: string;
    requireEMI: string;
  };
}

export function AdmissionForm({ onClose }: { onClose?: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    personalInfo: { fullName: '', email: '', phone: '', city: '' },
    education: { qualification: '', fieldOfStudy: '', institution: '', yearOfPassing: '' },
    courseSelection: { courseId: '', batchType: '', modeOfLearning: '', startPreference: '' },
    additional: { workExperience: '', currentlyWorking: '', careerGoals: '', heardAboutUs: '' },
    financing: { paymentPlan: '', requireEMI: '' }
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 5;

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.personalInfo.fullName) newErrors.fullName = 'Full name is required';
      if (!formData.personalInfo.email) newErrors.email = 'Email is required';
      if (!formData.personalInfo.phone) newErrors.phone = 'Phone number is required';
      if (!formData.personalInfo.city) newErrors.city = 'City is required';
    }

    if (currentStep === 2) {
      if (!formData.education.qualification) newErrors.qualification = 'Qualification is required';
      if (!formData.education.fieldOfStudy) newErrors.fieldOfStudy = 'Field of study is required';
    }

    if (currentStep === 3) {
      if (!formData.courseSelection.courseId) newErrors.courseId = 'Please select a course';
      if (!formData.courseSelection.batchType) newErrors.batchType = 'Please select batch type';
      if (!formData.courseSelection.modeOfLearning) newErrors.modeOfLearning = 'Please select mode of learning';
    }

    if (currentStep === 4) {
      if (!formData.additional.careerGoals) newErrors.careerGoals = 'Please describe your career goals';
    }

    if (currentStep === 5) {
      if (!formData.financing.paymentPlan) newErrors.paymentPlan = 'Please select a payment plan';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = () => {
    if (!validateStep(step)) return;

    const selectedCourse = COURSES.find(c => c.id === parseInt(formData.courseSelection.courseId));
    
    const whatsappMessage = `*ADMISSION FORM SUBMISSION*\n\n` +
      `*Personal Information:*\n` +
      `Name: ${formData.personalInfo.fullName}\n` +
      `Email: ${formData.personalInfo.email}\n` +
      `Phone: ${formData.personalInfo.phone}\n` +
      `City: ${formData.personalInfo.city}\n\n` +
      `*Education:*\n` +
      `Qualification: ${formData.education.qualification}\n` +
      `Field: ${formData.education.fieldOfStudy}\n` +
      `Institution: ${formData.education.institution || 'N/A'}\n` +
      `Year: ${formData.education.yearOfPassing || 'N/A'}\n\n` +
      `*Course Selection:*\n` +
      `Course: ${selectedCourse?.title}\n` +
      `Batch Type: ${formData.courseSelection.batchType}\n` +
      `Mode: ${formData.courseSelection.modeOfLearning}\n` +
      `Start: ${formData.courseSelection.startPreference}\n\n` +
      `*Additional Info:*\n` +
      `Experience: ${formData.additional.workExperience || 'N/A'}\n` +
      `Currently Working: ${formData.additional.currentlyWorking || 'N/A'}\n` +
      `Career Goals: ${formData.additional.careerGoals}\n` +
      `Heard About Us: ${formData.additional.heardAboutUs || 'N/A'}\n\n` +
      `*Financing:*\n` +
      `Payment Plan: ${formData.financing.paymentPlan}\n` +
      `Require EMI: ${formData.financing.requireEMI}`;

    const whatsappLink = `https://wa.me/918101979855?text=${encodeURIComponent(whatsappMessage)}`;
    window.location.href = whatsappLink;
  };

  const updateFormData = (section: keyof FormData, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        {[1, 2, 3, 4, 5].map(s => (
          <div key={s} className="flex flex-col items-center flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
              s < step ? 'bg-green-500 text-white' : s === step ? 'bg-primary-500 text-white' : 'dark:bg-dark-700 light:bg-gray-200 dark:text-gray-400 light:text-gray-500'
            }`}>
              {s < step ? '✓' : s}
            </div>
            <div className={`text-xs mt-2 text-center ${s === step ? 'text-primary-400 font-semibold' : 'dark:text-gray-500 light:text-gray-400'}`}>
              {s === 1 && 'Personal'}
              {s === 2 && 'Education'}
              {s === 3 && 'Course'}
              {s === 4 && 'Additional'}
              {s === 5 && 'Financing'}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full dark:bg-dark-700 light:bg-gray-200 h-2 rounded-full overflow-hidden">
        <div className="bg-primary-500 h-full transition-all duration-300" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
      </div>
    </div>
  );

  return (
    <div className="dark:bg-dark-900 light:bg-white rounded-2xl p-6 md:p-10 max-w-3xl mx-auto dark:border dark:border-dark-700 light:border light:border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold dark:text-white light:text-gray-900">Course Admission Form</h2>
        {onClose && (
          <button onClick={onClose} className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 text-2xl">&times;</button>
        )}
      </div>

      {renderStepIndicator()}

      {step === 1 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 dark:text-white light:text-gray-900">Personal Information</h3>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Full Name *</label>
            <input
              type="text"
              value={formData.personalInfo.fullName}
              onChange={(e) => updateFormData('personalInfo', 'fullName', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Email Address *</label>
            <input
              type="email"
              value={formData.personalInfo.email}
              onChange={(e) => updateFormData('personalInfo', 'email', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Phone Number *</label>
            <input
              type="tel"
              value={formData.personalInfo.phone}
              onChange={(e) => updateFormData('personalInfo', 'phone', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="+91 XXXXX XXXXX"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">City *</label>
            <input
              type="text"
              value={formData.personalInfo.city}
              onChange={(e) => updateFormData('personalInfo', 'city', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="Enter your city"
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 dark:text-white light:text-gray-900">Education Background</h3>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Highest Qualification *</label>
            <select
              value={formData.education.qualification}
              onChange={(e) => updateFormData('education', 'qualification', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="">Select qualification</option>
              <option value="High School">High School (10th/12th)</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor">Bachelor&apos;s Degree</option>
              <option value="Master">Master&apos;s Degree</option>
              <option value="PhD">PhD</option>
              <option value="Other">Other</option>
            </select>
            {errors.qualification && <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Field of Study *</label>
            <input
              type="text"
              value={formData.education.fieldOfStudy}
              onChange={(e) => updateFormData('education', 'fieldOfStudy', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="e.g., Computer Science, Engineering, Commerce"
            />
            {errors.fieldOfStudy && <p className="text-red-500 text-sm mt-1">{errors.fieldOfStudy}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Institution Name</label>
            <input
              type="text"
              value={formData.education.institution}
              onChange={(e) => updateFormData('education', 'institution', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="Your college/university name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Year of Passing</label>
            <input
              type="text"
              value={formData.education.yearOfPassing}
              onChange={(e) => updateFormData('education', 'yearOfPassing', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="e.g., 2023 or Expected 2025"
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 dark:text-white light:text-gray-900">Course Selection</h3>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Select Course *</label>
            <select
              value={formData.courseSelection.courseId}
              onChange={(e) => updateFormData('courseSelection', 'courseId', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="">Choose your course</option>
              {COURSES.map(course => (
                <option key={course.id} value={course.id}>
                  {course.emoji} {course.title} - {course.price} ({course.duration})
                </option>
              ))}
            </select>
            {errors.courseId && <p className="text-red-500 text-sm mt-1">{errors.courseId}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Batch Type *</label>
            <select
              value={formData.courseSelection.batchType}
              onChange={(e) => updateFormData('courseSelection', 'batchType', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="">Select batch type</option>
              <option value="Weekend (Sat-Sun)">Weekend (Sat-Sun)</option>
              <option value="Weekday (Mon-Fri)">Weekday (Mon-Fri Evening)</option>
              <option value="Fast-Track">Fast-Track (Mon-Sat)</option>
            </select>
            {errors.batchType && <p className="text-red-500 text-sm mt-1">{errors.batchType}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Mode of Learning *</label>
            <select
              value={formData.courseSelection.modeOfLearning}
              onChange={(e) => updateFormData('courseSelection', 'modeOfLearning', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="">Select mode</option>
              <option value="Online Live">Online Live (Interactive Sessions)</option>
              <option value="Hybrid">Hybrid (Online + Offline)</option>
              <option value="Self-Paced">Self-Paced with Mentor</option>
            </select>
            {errors.modeOfLearning && <p className="text-red-500 text-sm mt-1">{errors.modeOfLearning}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">When do you want to start?</label>
            <select
              value={formData.courseSelection.startPreference}
              onChange={(e) => updateFormData('courseSelection', 'startPreference', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="">Select start date</option>
              <option value="Immediately">Immediately (Next batch)</option>
              <option value="Within 1 month">Within 1 month</option>
              <option value="1-2 months">1-2 months</option>
              <option value="Just exploring">Just exploring for now</option>
            </select>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 dark:text-white light:text-gray-900">Additional Information</h3>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Work Experience (Years)</label>
            <select
              value={formData.additional.workExperience}
              onChange={(e) => updateFormData('additional', 'workExperience', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="">Select experience</option>
              <option value="Fresher">Fresher (0 years)</option>
              <option value="0-1 years">0-1 years</option>
              <option value="1-3 years">1-3 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="5+ years">5+ years</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Currently Working?</label>
            <select
              value={formData.additional.currentlyWorking}
              onChange={(e) => updateFormData('additional', 'currentlyWorking', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="">Select status</option>
              <option value="Yes - Full-time">Yes - Full-time</option>
              <option value="Yes - Part-time">Yes - Part-time</option>
              <option value="Freelancing">Freelancing</option>
              <option value="Student">Student</option>
              <option value="Not working">Not currently working</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Career Goals *</label>
            <textarea
              value={formData.additional.careerGoals}
              onChange={(e) => updateFormData('additional', 'careerGoals', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="Tell us about your career aspirations and what you hope to achieve after completing this course..."
            />
            {errors.careerGoals && <p className="text-red-500 text-sm mt-1">{errors.careerGoals}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">How did you hear about us?</label>
            <select
              value={formData.additional.heardAboutUs}
              onChange={(e) => updateFormData('additional', 'heardAboutUs', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="">Select source</option>
              <option value="Google Search">Google Search</option>
              <option value="Social Media">Social Media (Facebook, Instagram, LinkedIn)</option>
              <option value="Friend/Colleague">Friend or Colleague</option>
              <option value="Advertisement">Online Advertisement</option>
              <option value="College/University">College/University</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 dark:text-white light:text-gray-900">Payment & Financing</h3>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Preferred Payment Plan *</label>
            <select
              value={formData.financing.paymentPlan}
              onChange={(e) => updateFormData('financing', 'paymentPlan', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="">Select payment plan</option>
              <option value="Full Payment">Full Payment (One-time)</option>
              <option value="2 Installments">2 Installments</option>
              <option value="3 Installments">3 Installments</option>
              <option value="EMI">EMI (Need Details)</option>
            </select>
            {errors.paymentPlan && <p className="text-red-500 text-sm mt-1">{errors.paymentPlan}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-300 light:text-gray-700">Do you require EMI/Financing assistance?</label>
            <select
              value={formData.financing.requireEMI}
              onChange={(e) => updateFormData('financing', 'requireEMI', e.target.value)}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="">Select option</option>
              <option value="Yes - Need info">Yes - I need more information</option>
              <option value="Maybe - Interested">Maybe - I&apos;m interested to know options</option>
              <option value="No - Will pay directly">No - I will pay directly</option>
            </select>
          </div>
          <div className="dark:bg-dark-800 light:bg-blue-50 p-4 rounded-lg border dark:border-dark-700 light:border-blue-200">
            <p className="text-sm dark:text-gray-300 light:text-gray-700 mb-2">
              <strong>Special Offers:</strong>
            </p>
            <ul className="text-sm dark:text-gray-400 light:text-gray-600 space-y-1">
              <li>✓ Early bird discount: 10% off for upfront payment</li>
              <li>✓ Group enrollment: 15% off for 3+ students</li>
              <li>✓ Flexible EMI options available</li>
              <li>✓ Money-back guarantee (within 7 days)</li>
            </ul>
          </div>
          <div className="dark:bg-green-900/20 light:bg-green-50 p-4 rounded-lg border dark:border-green-700/50 light:border-green-200">
            <p className="text-sm font-semibold dark:text-green-300 light:text-green-700 mb-2">
              Review & Submit
            </p>
            <p className="text-xs dark:text-green-400 light:text-green-600">
              After clicking submit, you&apos;ll be redirected to WhatsApp where our admission team will:
            </p>
            <ul className="text-xs dark:text-green-400 light:text-green-600 mt-2 space-y-1 ml-4">
              <li>• Confirm your course enrollment</li>
              <li>• Share payment details and offers</li>
              <li>• Provide batch schedule</li>
              <li>• Answer any questions</li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-8 flex gap-4">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="px-6 py-3 dark:bg-dark-700 light:bg-gray-200 rounded-lg font-semibold dark:text-white light:text-gray-900 hover:shadow-lg transition"
          >
            ← Back
          </button>
        )}
        {step < totalSteps && (
          <button
            onClick={handleNext}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg transition"
          >
            Next Step →
          </button>
        )}
        {step === totalSteps && (
          <button
            onClick={handleSubmit}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg font-bold text-white hover:shadow-lg transition"
          >
            Submit Application via WhatsApp
          </button>
        )}
      </div>
    </div>
  );
}
