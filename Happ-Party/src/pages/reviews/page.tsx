
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function Reviews() {
  useEffect(() => {
    document.title = "Parent Reviews | Happy Party";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read genuine reviews from happy parents across London. See why families choose Happy Party for professional children\'s party entertainment.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'children party reviews London, party entertainer testimonials, kids party host reviews, birthday party feedback');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://happyparty.co.uk/reviews');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Parent Reviews | Happy Party');
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://happyparty.co.uk/reviews');
    }
  }, []);

  const reviews = [
    {
      quote: "Amazing party! The kids were entertained the whole time and I could actually relax and enjoy watching them have fun. The entertainer was professional, punctual and brilliant with the children.",
      name: "Sarah",
      details: "Mum of Emma, age 6 • Croydon",
      rating: 5,
      theme: "Princess Party"
    },
    {
      quote: "Professional, punctual and brilliant with the children. Worth every penny for the stress-free experience. The disco party was incredible and all the kids were dancing and singing along.",
      name: "Michael",
      details: "Dad of twins, age 4 • Bromley",
      rating: 5,
      theme: "Disco Party"
    },
    {
      quote: "The disco party was incredible! All the kids were dancing and singing along. Highly recommend! The entertainer kept everyone engaged for the full 2 hours.",
      name: "Lisa",
      details: "Mum of Jake, age 8 • Kingston",
      rating: 5,
      theme: "Disco Party"
    },
    {
      quote: "Fantastic superhero party! The kids loved the games and activities. The entertainer was energetic and really got into character. Will definitely book again.",
      name: "David",
      details: "Dad of Oliver, age 7 • Sutton",
      rating: 5,
      theme: "Superhero Party"
    },
    {
      quote: "Perfect for our little one's 4th birthday. The soft play activities were ideal for the younger children and the face painting was beautiful. Very patient with the kids.",
      name: "Emma",
      details: "Mum of Sophie, age 4 • Wimbledon",
      rating: 5,
      theme: "Face-paint & Soft Play"
    },
    {
      quote: "Brilliant party entertainer! Kept 15 children aged 5-9 completely engaged. The games were fun and age-appropriate. Great value for money and stress-free for parents.",
      name: "James",
      details: "Dad of Charlie, age 6 • Richmond",
      rating: 5,
      theme: "90-minute Party"
    },
    {
      quote: "The princess party was magical! My daughter felt like a real princess and all her friends loved it. The entertainer was wonderful with the children and very professional.",
      name: "Rachel",
      details: "Mum of Lily, age 5 • Putney",
      rating: 5,
      theme: "Princess Party"
    },
    {
      quote: "Excellent service from start to finish. Easy booking process and the party exceeded our expectations. The children had an absolute blast and we received so many compliments.",
      name: "Mark",
      details: "Dad of Ethan, age 9 • Clapham",
      rating: 5,
      theme: "2-hour Party"
    },
    {
      quote: "Amazing face painting skills! The children looked incredible and the designs lasted all day. The entertainer was patient and creative with each child's request.",
      name: "Sophie",
      details: "Mum of Grace, age 6 • Battersea",
      rating: 5,
      theme: "Face-paint Party"
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
              Customer Reviews
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              See what families across London are saying about their Happy Party experience. Real reviews from real parents.
            </p>
            
            {/* Overall Rating */}
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-500 text-3xl"></i>
                ))}
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">5.0 out of 5</p>
              <p className="text-gray-600">Based on 50+ happy families</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-500"></i>
                  ))}
                </div>
                
                {/* Theme Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                    {review.theme}
                  </span>
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  "{review.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Review CTA */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Had a great party with us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We'd love to hear about your experience! Share your review and help other families discover the joy of Happy Party.
          </p>
          
          <Button 
            href="mailto:hello@happyparty.co.uk?subject=Party Review&body=Hi! I'd like to share a review of our recent party..." 
            variant="primary" 
            size="lg"
            className="whitespace-nowrap"
          >
            <i className="ri-mail-line mr-2"></i>
            Share your review
          </Button>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to create your own 5-star experience?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join our happy families and book your children's party today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/#book" variant="primary" size="lg" className="whitespace-nowrap">
              <i className="ri-calendar-check-line mr-2"></i>
              Check availability
            </Button>
            <Button href="tel:+447123456789" variant="secondary" size="lg" className="whitespace-nowrap">
              <i className="ri-phone-line mr-2"></i>
              Call now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
