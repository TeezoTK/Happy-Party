
import { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function Book() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    mobile: '',
    childAge: '',
    date: '',
    preferredTime: '',
    venuePostcode: '',
    theme: '',
    message: '',
    honeypot: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    document.title = "Book a Children's Party | Happy Party";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Book your children\'s party entertainer in London. Easy online booking for ages 3-10. Choose from Princess, Superhero, Disco, Face-paint themes.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'book children party entertainer London, party booking London, kids party host booking, birthday party reservation');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://happyparty.co.uk/book');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Book a Children\'s Party | Happy Party');
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://happyparty.co.uk/book');
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Anti-spam check
    if (formData.honeypot) {
      return;
    }

    // Basic validation
    if (!formData.parentName || !formData.email || !formData.mobile || !formData.childAge || !formData.date) {
      setSubmitMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'honeypot') {
          formDataToSubmit.append(key, value);
        }
      });

      const response = await fetch('https://readdy.ai/api/form/d42u7gepguuav66rfpu0', {
        method: 'POST',
        body: formDataToSubmit
      });

      if (response.ok) {
        setSubmitMessage('Thanks — we\'ll confirm availability by email/WhatsApp within 2 hours!');
        setFormData({
          parentName: '',
          email: '',
          mobile: '',
          childAge: '',
          date: '',
          preferredTime: '',
          venuePostcode: '',
          theme: '',
          message: '',
          honeypot: ''
        });
      } else {
        setSubmitMessage('Sorry, there was an error. Please try again or call us directly.');
      }
    } catch (error) {
      setSubmitMessage('Sorry, there was an error. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  const themes = [
    'Princess', 'Superhero', 'Disco', 'Face-paint', 'Soft Play',
    'Pirate Adventure', 'Jungle Safari', 'Space Adventure'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Book Your Party
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to create magical memories? Book your children's party entertainer today with just a small deposit to secure your date.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section id="book" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Check Availability & Book Online
            </h2>
            <p className="text-lg text-gray-600">
              Choose your preferred date and time, then pay a small deposit to secure your booking
            </p>
          </div>

          {/* Booking Widget Placeholder */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 mb-12 text-center">
            <div className="max-w-2xl mx-auto">
              <i className="ri-calendar-check-line text-6xl text-purple-600 mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Online Booking Widget
              </h3>
              <p className="text-gray-700 mb-6">
                Our booking widget will be integrated here, allowing you to:
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  <span>View real-time availability</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  <span>Select your preferred package</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  <span>Choose add-ons and themes</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  <span>Pay secure deposit online</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  <span>Receive instant confirmation</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                Integration with Square Appointments or Acuity Scheduling coming soon
              </p>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-green-50 rounded-2xl p-6 text-center">
              <i className="ri-whatsapp-line text-4xl text-green-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                WhatsApp Booking
              </h3>
              <p className="text-gray-600 mb-4">
                Quick and easy booking via WhatsApp
              </p>
              <a 
                href="https://wa.me/447123456789?text=Hi! I'd like to book a children's party. Can you check availability?"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-whatsapp-line mr-2"></i>
                WhatsApp Us
              </a>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <i className="ri-phone-line text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Call to Book
              </h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our friendly team
              </p>
              <a 
                href="tel:+447123456789"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-line mr-2"></i>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Party Enquiry Form
            </h2>
            <p className="text-lg text-gray-600">
              Can't use the booking widget? Fill out this form and we'll get back to you quickly
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8"
            data-readdy-form
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                  Parent Name *
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="07123 456 789"
                />
              </div>

              <div>
                <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                  Child's Age *
                </label>
                <input
                  type="number"
                  id="childAge"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleInputChange}
                  required
                  min="3"
                  max="10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="Age (3-10)"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                >
                  <option value="">Select time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="venuePostcode" className="block text-sm font-medium text-gray-700 mb-2">
                  Venue Postcode
                </label>
                <input
                  type="text"
                  id="venuePostcode"
                  name="venuePostcode"
                  value={formData.venuePostcode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="SW1A 1AA"
                />
              </div>

              <div>
                <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Theme
                </label>
                <select
                  id="theme"
                  name="theme"
                  value={formData.theme}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                >
                  <option value="">Select theme</option>
                  {themes.map((theme) => (
                    <option key={theme} value={theme}>{theme}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm resize-none"
                placeholder="Any special requests or questions? (Max 500 characters)"
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">
                {formData.message.length}/500 characters
              </p>
            </div>

            {/* Honeypot field */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleInputChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="text-center">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="whitespace-nowrap"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line mr-2 animate-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line mr-2"></i>
                    Send Enquiry
                  </>
                )}
              </Button>
            </div>

            {submitMessage && (
              <div className={`mt-4 p-4 rounded-lg text-center ${
                submitMessage.includes('Thanks') 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
