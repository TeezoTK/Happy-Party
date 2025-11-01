
import { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function FAQs() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    document.title = "FAQs | Happy Party";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Frequently asked questions about children\'s party entertainment in London. Ages, booking, DBS checks, insurance, cancellations, and more.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'children party entertainer FAQ London, kids party host questions, birthday party booking help');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://happyparty.co.uk/faqs');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'FAQs | Happy Party');
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://happyparty.co.uk/faqs');
    }

    // Add FAQ structured data
    const existingScript = document.querySelector('script[type="application/ld+json"][data-faq]');
    if (existingScript) {
      existingScript.remove();
    }

    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-faq', 'true');
    script.textContent = JSON.stringify(faqStructuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"][data-faq]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const faqs = [
    {
      question: "What ages do you cater for?",
      answer: "We specialize in children aged 3-10 years old. Our games and activities are carefully tailored to different age groups to ensure everyone has the best possible time."
    },
    {
      question: "How long are your parties?",
      answer: "We offer 90-minute and 2-hour party packages. The 90-minute option is perfect for younger children, while the 2-hour package allows for more activities and is ideal for older kids."
    },
    {
      question: "What areas do you cover?",
      answer: "We serve London and surrounding areas including Croydon, Bromley, Kingston, Sutton, Wimbledon, Richmond, Putney, Clapham, Battersea, Chelsea, and Kensington. Send us your postcode and we'll confirm if we can reach you."
    },
    {
      question: "Are you DBS checked and insured?",
      answer: "Yes, absolutely! All our entertainers are fully DBS checked and we carry comprehensive public liability insurance for your complete peace of mind."
    },
    {
      question: "How do I book a party?",
      answer: "Simply pick your preferred date and time in our online calendar, choose your package, and pay a small deposit. You'll receive instant confirmation and we'll handle the rest!"
    },
    {
      question: "Can you come to our home or do we need a hall?",
      answer: "We can come to your home, garden, or hired venue. We just need a safe space for the children to play and access to a power outlet for our equipment."
    },
    {
      question: "Do you provide music and disco equipment?",
      answer: "Yes! Our disco packages include professional sound system, microphone, disco lights, and age-appropriate playlists. We bring everything needed for an amazing party."
    },
    {
      question: "Can you include a food break in longer parties?",
      answer: "Absolutely! We can schedule a short break for food and cake during our 2-hour parties. Just let us know your preferred timing when booking."
    },
    {
      question: "What's your cancellation policy?",
      answer: "We understand plans can change. Deposits are refundable with 7 days notice. For cancellations with less notice, we'll work with you to reschedule when possible."
    },
    {
      question: "Can you accommodate special theme requests?",
      answer: "We love bringing your child's favorite themes to life! Tell us about your child's interests when booking and we'll do our best to incorporate their favorite characters and themes."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions about our children's party entertainment? Find answers to the most common questions from parents across London.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">FAQs</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <i className={`ri-${openFAQ === index ? 'subtract' : 'add'}-line text-purple-600 text-xl flex-shrink-0`}></i>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                        {(index === 4 || index === 7) && (
                          <span> <a href="/#book" className="text-purple-600 hover:underline">Book your party here</a>.</span>
                        )}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help! Get in touch and we'll answer any questions about your child's party.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="tel:+447123456789" variant="primary" size="lg" className="whitespace-nowrap">
              <i className="ri-phone-line mr-2"></i>
              Call us now
            </Button>
            <Button href="mailto:hello@happyparty.co.uk" variant="secondary" size="lg" className="whitespace-nowrap">
              <i className="ri-mail-line mr-2"></i>
              Email us
            </Button>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to book your party?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            All questions answered? Let's create magical memories for your child's special day!
          </p>
          
          <Button href="/#book" variant="primary" size="lg" className="whitespace-nowrap">
            <i className="ri-calendar-check-line mr-2"></i>
            Check availability
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
