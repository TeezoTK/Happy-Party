import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function Themes() {
  useEffect(() => {
    document.title = "Party Themes — Princess, Superhero, Disco | Happy Party";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Popular children\'s party themes in London: Princess, Superhero, Disco, Face-paint, Soft Play. Professional themed entertainment for ages 3-10.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'princess party theme London, superhero party London, disco party theme, face painting party');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://happyparty.co.uk/themes');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Party Themes — Princess, Superhero, Disco | Happy Party');
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://happyparty.co.uk/themes');
    }
  }, []);

  const themes = [
    {
      name: 'Princess',
      description: 'Royal adventures with crowns, magic and fairy tales',
      details: 'Transform into royalty with beautiful crowns, magical wands, and enchanting fairy tale adventures',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20princess%20themed%20children%20party%20decoration%20with%20pink%20and%20purple%20balloons%2C%20sparkly%20crowns%2C%20fairy%20tale%20castle%20backdrop%2C%20magical%20atmosphere%2C%20bright%20colorful%20setting%2C%20professional%20party%20photography%20in%20London&width=400&height=300&seq=princess2&orientation=landscape'
    },
    {
      name: 'Superhero',
      description: 'Action-packed adventures saving the day together',
      details: 'Become superheroes with capes, masks, and exciting missions to save the world from villains',
      image: 'https://readdy.ai/api/search-image?query=Exciting%20superhero%20themed%20children%20party%20with%20colorful%20cape%20decorations%2C%20comic%20book%20style%20backdrop%2C%20action%20hero%20masks%2C%20vibrant%20red%20blue%20yellow%20decorations%2C%20energetic%20party%20atmosphere%20in%20London&width=400&height=300&seq=superhero2&orientation=landscape'
    },
    {
      name: 'Disco',
      description: 'Dance floor fun with lights, music and groovy moves',
      details: 'Get groovy with disco lights, dance competitions, and all your favourite party songs',
      image: 'https://readdy.ai/api/search-image?query=Vibrant%20disco%20themed%20children%20party%20with%20colorful%20disco%20balls%2C%20neon%20lights%2C%20dance%20floor%2C%20retro%20decorations%2C%20fun%20party%20atmosphere%2C%20bright%20energetic%20setting%20for%20kids%20in%20London&width=400&height=300&seq=disco2&orientation=landscape'
    },
    {
      name: 'Face-paint',
      description: 'Transform into animals, characters and magical creatures',
      details: 'Professional face painting turning children into tigers, butterflies, superheroes and more',
      image: 'https://readdy.ai/api/search-image?query=Creative%20face%20painting%20station%20at%20children%20party%20with%20colorful%20paints%2C%20brushes%2C%20happy%20kids%20with%20painted%20faces%20as%20butterflies%20tigers%20superheroes%2C%20artistic%20party%20setting%20in%20London&width=400&height=300&seq=facepaint2&orientation=landscape'
    },
    {
      name: 'Soft Play',
      description: 'Safe bouncing, climbing and exploring for little ones',
      details: 'Gentle activities with soft play equipment perfect for toddlers and younger children',
      image: 'https://readdy.ai/api/search-image?query=Colorful%20soft%20play%20area%20for%20children%20with%20safe%20foam%20blocks%2C%20tunnels%2C%20slides%2C%20bright%20primary%20colors%2C%20toddler%20friendly%20equipment%2C%20clean%20indoor%20party%20environment%20in%20London&width=400&height=300&seq=softplay2&orientation=landscape'
    },
    {
      name: 'Pirate Adventure',
      description: 'Treasure hunts and swashbuckling fun on the high seas',
      details: 'Ahoy mateys! Search for treasure, walk the plank, and sail the seven seas',
      image: 'https://readdy.ai/api/search-image?query=Exciting%20pirate%20themed%20children%20party%20with%20treasure%20chests%2C%20pirate%20flags%2C%20eye%20patches%2C%20treasure%20maps%2C%20nautical%20decorations%2C%20adventure%20party%20atmosphere%20in%20London&width=400&height=300&seq=pirate1&orientation=landscape'
    },
    {
      name: 'Jungle Safari',
      description: 'Wild animal adventures and jungle exploration',
      details: 'Explore the jungle, meet wild animals, and go on exciting safari adventures',
      image: 'https://readdy.ai/api/search-image?query=Fun%20jungle%20safari%20themed%20children%20party%20with%20animal%20decorations%2C%20green%20foliage%2C%20safari%20hats%2C%20binoculars%2C%20wild%20animal%20props%2C%20adventure%20exploration%20setting%20in%20London&width=400&height=300&seq=jungle1&orientation=landscape'
    },
    {
      name: 'Space Adventure',
      description: 'Blast off to the stars and explore distant planets',
      details: 'Become astronauts, explore planets, and discover aliens in outer space',
      image: 'https://readdy.ai/api/search-image?query=Amazing%20space%20themed%20children%20party%20with%20rocket%20ships%2C%20planets%2C%20stars%2C%20astronaut%20helmets%2C%20galaxy%20decorations%2C%20cosmic%20party%20atmosphere%20in%20London&width=400&height=300&seq=space1&orientation=landscape'
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
              Party Themes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our magical collection of party themes. Each theme includes decorations, activities, and entertainment perfectly tailored for your child's special day.
            </p>
          </div>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={theme.image} 
                  alt={`${theme.name} party theme in London`}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {theme.name}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {theme.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {theme.details}
                  </p>
                  <Button 
                    href="/packages" 
                    variant="primary" 
                    className="w-full whitespace-nowrap"
                  >
                    Add to package
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to choose your theme?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Book your themed party today and create magical memories
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/book" variant="primary" size="lg" className="whitespace-nowrap">
              <i className="ri-calendar-check-line mr-2"></i>
              Check availability
            </Button>
            <Button href="/packages" variant="secondary" size="lg" className="whitespace-nowrap">
              View packages
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
