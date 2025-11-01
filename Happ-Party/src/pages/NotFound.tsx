
import { useEffect } from 'react';
import Header from '../components/feature/Header';
import Footer from '../components/feature/Footer';
import Button from '../components/base/Button';

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | Children's Party Entertainers London | Happy Party";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Page not found. Return to Happy Party - professional children\'s party entertainers in London for ages 3-10. Book your kids party host today!');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <i className="ri-error-warning-line text-6xl text-purple-600 mb-4"></i>
            <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Sorry, we couldn't find the page you're looking for. Let's get you back to planning an amazing children's party!
            </p>
          </div>
          
          <div className="space-y-4">
            <Button href="/" variant="primary" size="lg" className="w-full">
              <i className="ri-home-line mr-2"></i>
              Back to Home
            </Button>
            <Button href="/book" variant="secondary" size="lg" className="w-full">
              <i className="ri-calendar-check-line mr-2"></i>
              Book Your Party
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              Need help? Contact our children's party entertainers directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a href="tel:+447123456789" className="text-purple-600 hover:underline text-sm">
                <i className="ri-phone-line mr-1"></i>
                07123 456 789
              </a>
              <a href="mailto:hello@happyparty.co.uk" className="text-purple-600 hover:underline text-sm">
                <i className="ri-mail-line mr-1"></i>
                hello@happyparty.co.uk
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
