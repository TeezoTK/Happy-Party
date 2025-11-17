
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function About() {
  useEffect(() => {
    document.title = "About Happy Party | Family-Run Children's Party Entertainers London";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Happy Party - family-run children\'s party entertainers in London. DBS checked, fully insured, specializing in ages 3-10.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'about Happy Party London, family-run party entertainers, children party company London, DBS checked entertainers');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://happyparty.co.uk/about');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'About Happy Party | Family-Run Children\'s Party Entertainers London');
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://happyparty.co.uk/about');
    }
  }, []);

  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Safety First',
      description: 'All our entertainers are DBS checked and we carry full public liability insurance. Your children\'s safety is our top priority.'
    },
    {
      icon: 'ri-heart-line',
      title: 'Kindness & Care',
      description: 'We treat every child with patience, kindness, and respect. Creating a positive, inclusive environment where everyone feels special.'
    },
    {
      icon: 'ri-flashlight-line',
      title: 'High Energy Fun',
      description: 'We bring boundless energy and enthusiasm to every party, ensuring non-stop entertainment that keeps children engaged and excited.'
    },
    {
      icon: 'ri-star-line',
      title: 'Professional Excellence',
      description: 'From punctual arrival to seamless entertainment, we deliver professional service that exceeds expectations every time.'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Lead Entertainer',
      image: 'https://readdy.ai/api/search-image?query=Professional%20friendly%20female%20children%20party%20entertainer%20in%20London%2C%20smiling%20woman%20with%20colorful%20party%20outfit%2C%20warm%20approachable%20appearance%2C%20working%20with%20kids%2C%20bright%20cheerful%20setting&width=300&height=300&seq=team1&orientation=squarish',
      description: 'With over 8 years of experience in children\'s entertainment, Sarah founded Happy Party to bring joy to families across London.'
    },
    {
      name: 'Mike Thompson',
      role: 'Senior Party Host',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20children%20party%20entertainer%20in%20London%2C%20friendly%20man%20with%20colorful%20party%20attire%2C%20energetic%20appearance%2C%20working%20with%20children%2C%20fun%20party%20atmosphere&width=300&height=300&seq=team2&orientation=squarish',
      description: 'Mike specializes in superhero and action-themed parties, bringing high-energy entertainment that gets everyone moving.'
    },
    {
      name: 'Emma Davis',
      role: 'Face Paint Artist',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20face%20paint%20artist%20for%20children%20parties%20in%20London%2C%20artistic%20woman%20with%20face%20painting%20supplies%2C%20creative%20appearance%2C%20working%20with%20kids%2C%20colorful%20artistic%20setting&width=300&height=300&seq=team3&orientation=squarish',
      description: 'Emma is our talented face painting specialist, creating magical transformations that delight children and parents alike.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Happy Party
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a family-run children's party entertainment company dedicated to creating magical celebrations for ages 3-10 across London and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Happy Party was born from a simple belief: children's birthday parties should be magical for kids and stress-free for parents. As a family-run business, we understand the importance of creating special memories that last a lifetime.
                </p>
                <p>
                  Founded in 2016, we've had the joy of entertaining thousands of children across London. Our team of professional entertainers specializes in ages 3-10, ensuring every party is perfectly tailored to your child's developmental stage and interests.
                </p>
                <p>
                  What sets us apart is our genuine love for what we do. We're not just entertainers – we're memory makers, smile creators, and stress relievers for busy parents who want their child's special day to be absolutely perfect.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Happy%20family-run%20children%20party%20entertainment%20business%20in%20London%2C%20professional%20team%20with%20kids%2C%20colorful%20party%20setting%2C%20warm%20family%20atmosphere%2C%20celebration%20background&width=600&height=400&seq=about1&orientation=landscape"
                alt="Happy Party team with children in London"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${value.icon} text-purple-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The friendly faces behind the magic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Insurance */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Safety & Peace of Mind
            </h2>
            <p className="text-xl text-gray-600">
              Your children's safety is our absolute priority
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-shield-check-line text-green-600 text-xl"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  DBS Checked
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                All our entertainers undergo comprehensive DBS (Disclosure and Barring Service) checks. We maintain the highest standards of child protection and safeguarding.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-shield-line text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Fully Insured
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We carry comprehensive public liability insurance covering all our activities. You can relax knowing you're fully protected during our entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to create magical memories?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let our family help make your child's party absolutely unforgettable
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/book" variant="primary" size="lg" className="whitespace-nowrap">
              <i className="ri-calendar-check-line mr-2"></i>
              Check availability
            </Button>
            <Button href="tel:+447123456789" variant="secondary" size="lg" className="whitespace-nowrap">
              <i className="ri-phone-line mr-2"></i>
              Call us today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
