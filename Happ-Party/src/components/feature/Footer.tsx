
export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-purple-600" style={{ fontFamily: 'Pacifico, serif' }}>
                Happy Party
              </h3>
              <p className="text-gray-600 mt-2">
                Professional children's party entertainers bringing joy to kids aged 3-10 across London and surrounding areas. DBS checked, fully insured kids party hosts.
              </p>
            </div>
            
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center">
                <i className="ri-map-pin-line w-5 h-5 mr-2"></i>
                <span>Serving London and surrounding areas</span>
              </div>
              <div className="flex items-center">
                <i className="ri-phone-line w-5 h-5 mr-2"></i>
                <a href="tel:+447123456789" className="hover:text-purple-600">+44 7123 456 789</a>
              </div>
              <div className="flex items-center">
                <i className="ri-mail-line w-5 h-5 mr-2"></i>
                <a href="mailto:hello@happyparty.co.uk" className="hover:text-purple-600">hello@happyparty.co.uk</a>
              </div>
              <div className="flex items-center">
                <i className="ri-time-line w-5 h-5 mr-2"></i>
                <span>Mon-Sun: 9AM-8PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/packages" className="text-gray-600 hover:text-purple-600">Party Packages</a></li>
              <li><a href="/themes" className="text-gray-600 hover:text-purple-600">Party Themes</a></li>
              <li><a href="/gallery" className="text-gray-600 hover:text-purple-600">Photo Gallery</a></li>
              <li><a href="/reviews" className="text-gray-600 hover:text-purple-600">Customer Reviews</a></li>
              <li><a href="/faqs" className="text-gray-600 hover:text-purple-600">FAQs</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-purple-600">About Us</a></li>
              <li><a href="/book" className="text-gray-600 hover:text-purple-600">Book Now</a></li>
              <li><a href="/posts" className="text-gray-600 hover:text-purple-600">News & Offers</a></li>

            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/OfficialHappyParty" className="text-gray-600 hover:text-purple-600" rel="nofollow">
                <i className="ri-facebook-fill text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600" rel="nofollow">
                <i className="ri-instagram-fill text-2xl"></i>
              </a>
            </div>
            
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="text-gray-600 hover:text-purple-600">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-purple-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 Happy Party. All rights reserved. Professional children's party entertainers in London.
          </p>
        </div>
      </div>
    </footer>
  );
}
