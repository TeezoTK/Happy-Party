
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function Packages() {
  useEffect(() => {
    document.title = "Kids' Party Packages in London | Happy Party";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Friendly children\'s party hosts for ages 3–10 across London. Packages, themes and easy booking.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'children\'s party packages London, kids party entertainer London, birthday party host London');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://happyparty.co.uk/packages');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Kids\' Party Packages in London | Happy Party');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Professional children\'s party packages in London for ages 3-10. DBS checked entertainers with disco, face-paint, and soft play themes.');
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://happyparty.co.uk/packages');
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', 'https://readdy.ai/api/search-image?query=Happy%20children%20at%20birthday%20party%20in%20London%20with%20colorful%20balloons%2C%20party%20games%2C%20smiling%20kids%20aged%203-10%2C%20professional%20party%20entertainment%20setup%2C%20bright%20festive%20atmosphere&width=1200&height=630&seq=packages-og&orientation=landscape');
    }
  }, []);

  const packages = [
    {
      title: '90-Minute Party Package',
      price: 'from £120',
      deposit: '£30 deposit',
      duration: '90 minutes',
      ages: '3-10 years',
      maxKids: '15 children',
      description: 'Perfect for younger children or smaller groups. High-energy games, music, prizes and endless smiles.',
      includes: [
        'Professional children\'s party entertainer London',
        'Age-appropriate games and activities',
        'Music and dancing sessions',
        'Party prizes for all children',
        'Setup and cleanup included',
        'DBS checked and fully insured entertainer'
      ],
      popular: false
    },
    {
      title: '2-Hour Party Package',
      price: 'from £160',
      deposit: '£40 deposit',
      duration: '2 hours',
      ages: '3-10 years',
      maxKids: '20 children',
      description: 'Our most popular package! More fun, more dancing, perfect for bigger groups and birthday party celebrations.',
      includes: [
        'Professional kids party host London',
        'Extended games and entertainment',
        'Interactive music and dance sessions',
        'Face painting or balloon modelling',
        'Party prizes and certificates',
        'Photo opportunities with entertainer',
        'Setup and cleanup included',
        'DBS checked and fully insured'
      ],
      popular: true
    },
    {
      title: 'Disco Dance Party',
      price: 'from £180',
      deposit: '£45 deposit',
      duration: '90-120 minutes',
      ages: '4-10 years',
      maxKids: '25 children',
      description: 'Lights, DJ-style microphone, favourite hits and epic dance-offs. Perfect for birthday party entertainer near me searches!',
      includes: [
        'Professional disco equipment and lighting',
        'DJ-style entertainment with microphone',
        'Popular children\'s music playlist',
        'Dance competitions and games',
        'Glow sticks and party accessories',
        'Group photos and memories',
        'Setup and cleanup included',
        'Experienced children\'s party entertainer London'
      ],
      popular: false
    },
    {
      title: 'Face-Paint & Soft Play',
      price: 'from £140',
      deposit: '£35 deposit',
      duration: '2 hours',
      ages: '3-8 years',
      maxKids: '12 children',
      description: 'Magical face painting transformations and safe soft play zones. Ideal for younger children and smaller venues.',
      includes: [
        'Professional face painting artist',
        'Safe, hypoallergenic face paints',
        'Soft play equipment and activities',
        'Gentle games for younger children',
        'Take-home face paint designs',
        'Quiet activities for shy children',
        'Setup and cleanup included',
        'Specialist kids party entertainer London'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Balloon Modelling',
      price: '£25',
      description: 'Amazing balloon animals and shapes for every child'
    },
    {
      name: 'Magic Show',
      price: '£35',
      description: 'Interactive magic performance with audience participation'
    },
    {
      name: 'Themed Decorations',
      price: '£40',
      description: 'Complete themed decoration setup and styling'
    },
    {
      name: 'Party Bags',
      price: '£3 per child',
      description: 'Pre-filled party bags with treats and small toys'
    }
  ];

  const serviceAreas = [
    'Central London', 'South London', 'West London', 'East London',
    'Croydon', 'Bromley', 'Kingston upon Thames', 'Sutton',
    'Wimbledon', 'Richmond', 'Putney', 'Clapham',
    'Battersea', 'Chelsea', 'Kensington', 'Hammersmith'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Kids' Party Packages in London
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Pick your perfect party. We bring everything for games, music and smiles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book" variant="primary" size="lg">
                <i className="ri-calendar-check-line mr-2"></i>
                Check Availability
              </Button>
              <Button href="tel:+447123456789" variant="secondary" size="lg">
                <i className="ri-phone-line mr-2"></i>
                Call Now: 07123 456 789
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl border-2 p-8 ${pkg.popular ? 'border-purple-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {pkg.title}
                  </h2>
                  <div className="text-3xl font-bold text-purple-600 mb-1">{pkg.price}</div>
                  <div className="text-sm text-gray-600">{pkg.deposit}</div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <i className="ri-time-line text-purple-600 text-xl mb-1"></i>
                    <div className="text-sm font-medium">{pkg.duration}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <i className="ri-user-line text-purple-600 text-xl mb-1"></i>
                    <div className="text-sm font-medium">{pkg.ages}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <i className="ri-group-line text-purple-600 text-xl mb-1"></i>
                    <div className="text-sm font-medium">Up to {pkg.maxKids}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {pkg.description}
                </p>

                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <i className="ri-check-line text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button href="/book" variant={pkg.popular ? "primary" : "outline"} className="w-full">
                  Check Availability
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Optional Add-ons
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Make your children's party even more special with these popular extras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {addon.name}
                </h3>
                <div className="text-2xl font-bold text-purple-600 mb-3">{addon.price}</div>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Children's Party Entertainer Coverage Areas
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Professional kids party hosts serving London and nearby areas
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-yellow-100 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                    <i className="ri-map-pin-line text-purple-600 text-xl mb-2"></i>
                    <p className="text-sm font-medium text-gray-900">{area}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-600" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Looking for a birthday party entertainer near me in a different area? <a href="/book" className="text-purple-600 hover:underline">Contact us</a> - we may still be able to help!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Book Your Children's Party?
          </h2>
          <p className="text-xl text-purple-100 mb-8" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Professional children's party entertainers in London. DBS checked, fully insured, and loved by kids aged 3-10.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/book" variant="primary" size="lg">
              <i className="ri-calendar-check-line mr-2"></i>
              Check Availability
            </Button>
            <a 
              href="https://wa.me/447123456789" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
