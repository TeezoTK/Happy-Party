// CHANGED: added state + Link + Sanity helpers for the news teaser
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { sfetch, cmsEnabled } from '../../lib/sanity';
import { urlFor } from '../../lib/imageUrl';

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  coverImage?: any;
  publishedAt?: string;
};

export default function Home() {
  // CHANGED: hold latest posts (optional)
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    document.title = "Children's Party Entertainers in London | Happy Party";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Friendly children\'s party hosts for ages 3–10 across London. Packages, themes and easy booking.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'children\'s party entertainers London, kids party host London, birthday party entertainer near me');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://happyparty.co.uk/');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Children\'s Party Entertainers in London | Happy Party');
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://happyparty.co.uk/');
    }

    // CHANGED: set a default OG image (helps social shares)
    let ogImage = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute(
      'content',
      'https://happyparty.co.uk/og-default.jpg'
    );

    // CHANGED: inject LocalBusiness JSON-LD (SEO)
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Happy Party",
      "description": "Children's party entertainers across London. Games, mini-disco, themes and easy booking.",
      "areaServed": "London, UK",
      "telephone": "+447123456789",
      "url": "https://happyparty.co.uk/",
      "sameAs": ["https://www.facebook.com/OfficialHappyParty"]
    });
    document.head.appendChild(ld);

    // cleanup JSON-LD on unmount
    return () => {
      if (ld && ld.parentNode) ld.parentNode.removeChild(ld);
    };
  }, []);

  // CHANGED: fetch top 3 posts if CMS is enabled
  useEffect(() => {
    const run = async () => {
      if (!cmsEnabled) return;
      try {
        const data = await sfetch(
          '*[_type=="post"]|order(publishedAt desc)[0..2]{_id,title,slug,excerpt,coverImage,publishedAt}'
        );
        setPosts(data || []);
      } catch {
        setPosts([]);
      }
    };
    run();
  }, []);

  const packages = [
    {
      title: '90-minute Party',
      description: 'High-energy games, mini-disco, prizes, setup & tidy',
      details: 'Ideal ages 4–8 • Max 15 kids • From £120 • Deposit £30'
    },
    {
      title: '2-hour Party',
      description: 'Everything in 90-min + longer disco/extra games',
      details: 'Ages 5–10 • Max 20 kids • From £160 • Deposit £40'
    },
    {
      title: 'Disco/Dance',
      description: 'Lights, DJ-style mic, dance-offs, playlists',
      details: 'Ages 6–10 • Max 25 kids • From £180 • Deposit £45'
    },
    {
      title: 'Face-paint & Soft Play',
      description: 'Themed looks + gentle activities',
      details: 'Ages 3–6 • Max 12 kids • From £140 • Deposit £35'
    }
  ];

  const themes = [
    {
      name: 'Princess',
      description: 'Royal adventures with crowns and fairy tales',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20princess%20themed%20children%20party%20decoration%20with%20pink%20and%20purple%20balloons%2C%20sparkly%20crowns%2C%20fairy%20tale%20castle%20backdrop%2C%20magical%20atmosphere%2C%20bright%20colorful%20setting%2C%20professional%20party%20photography%20in%20London&width=300&height=200&seq=princess1&orientation=landscape'
    },
    {
      name: 'Superhero',
      description: 'Action-packed adventures saving the day',
      image: 'https://readdy.ai/api/search-image?query=Exciting%20superhero%20themed%20children%20party%20with%20colorful%20cape%20decorations%2C%20comic%20book%20style%20backdrop%2C%20action%20hero%20masks%2C%20vibrant%20red%20blue%20yellow%20decorations%2C%20energetic%20party%20atmosphere%20in%20London&width=300&height=200&seq=superhero1&orientation=landscape'
    },
    {
      name: 'Disco',
      description: 'Dance floor fun with lights and music',
      image: 'https://readdy.ai/api/search-image?query=Vibrant%20disco%20themed%20children%20party%20with%20colorful%20disco%20balls%2C%20neon%20lights%2C%20dance%20floor%2C%20retro%20decorations%2C%20fun%20party%20atmosphere%2C%20bright%20energetic%20setting%20for%20kids%20in%20London&width=300&height=200&seq=disco1&orientation=landscape'
    },
    {
      name: 'Face-paint',
      description: 'Transform into animals and characters',
      image: 'https://readdy.ai/api/search-image?query=Creative%20face%20painting%20station%20at%20children%20party%20with%20colorful%20paints%2C%20brushes%2C%20happy%20kids%20with%20painted%20faces%20as%20butterflies%20tigers%20superheroes%2C%20artistic%20party%20setting%20in%20London&width=300&height=200&seq=facepaint1&orientation=landscape'
    },
    {
      name: 'Soft Play',
      description: 'Safe bouncing and exploring for little ones',
      image: 'https://readdy.ai/api/search-image?query=Colorful%20soft%20play%20area%20for%20children%20with%20safe%20foam%20blocks%2C%20tunnels%2C%20slides%2C%20bright%20primary%20colors%2C%20toddler%20friendly%20equipment%2C%20clean%20indoor%20party%20environment%20in%20London&width=300&height=200&seq=softplay1&orientation=landscape'
    }
  ];

  const testimonials = [
    {
      quote: "Amazing party! The kids were entertained the whole time.",
      name: "Sarah",
      details: "Mum of Emma, age 6 • Croydon"
    },
    {
      quote: "Professional and brilliant with the children. Worth every penny.",
      name: "Michael",
      details: "Dad of twins, age 4 • Bromley"
    },
    {
      quote: "The disco party was incredible! All the kids were dancing.",
      name: "Lisa",
      details: "Mum of Jake, age 8 • Kingston"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* CHANGED: Hero uses <picture> for WebP + fallback, keeps overlay */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-yellow-50">
        <picture aria-hidden="true">
          <source
            srcSet="https://readdy.ai/api/search-image?query=Joyful%20children%20party%20scene%20with%20colorful%20balloons%2C%20confetti%2C%20happy%20kids%20playing%20games%2C%20bright%20festive%20atmosphere%2C%20parents%20smiling%20in%20background%2C%20professional%20party%20entertainment%20setting%2C%20vibrant%20celebration%20in%20London&width=1600&height=800&seq=hero1&format=webp&orientation=landscape"
            type="image/webp"
          />
          <img
            src="https://readdy.ai/api/search-image?query=Joyful%20children%20party%20scene%20with%20colorful%20balloons%2C%20confetti%2C%20happy%20kids%20playing%20games%2C%20bright%20festive%20atmosphere%2C%20parents%20smiling%20in%20background%2C%20professional%20party%20entertainment%20setting%2C%20vibrant%20celebration%20in%20London&width=1600&height=800&seq=hero1&orientation=landscape"
            alt="Children enjoying party games with balloons and confetti"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-white/70" aria-hidden="true"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-left max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Children's parties that parents actually enjoy
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              We bring the energy, music and games — you enjoy the smiles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button href="/book" variant="primary" size="lg">
                <i className="ri-calendar-check-line mr-2"></i>
                Check availability
              </Button>
              <Button href="tel:+447123456789" variant="secondary" size="lg">
                <i className="ri-phone-line mr-2"></i>
                Call now
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <span className="bg-white/80 px-4 py-2 rounded-full font-medium">Family-run</span>
              <span className="bg-white/80 px-4 py-2 rounded-full font-medium">DBS checked</span>
              <span className="bg-white/80 px-4 py-2 rounded-full font-medium">Fully insured</span>
              <span className="bg-white/80 px-4 py-2 rounded-full font-medium">★★★★★ reviews</span>
              <span className="bg-white/80 px-4 py-2 rounded-full font-medium">Ages 3–10</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Preview (unchanged visuals) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Party Packages
            </h2>
            <p className="text-lg text-gray-600">
              Pick your perfect party. We bring everything for games, music and smiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {pkg.description}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {pkg.details}
                </p>
                <div className="space-y-2">
                  <Button href="/packages" variant="outline" className="w-full mb-2">
                    See details
                  </Button>
                  <Button href="/book" variant="primary" className="w-full">
                    Check availability
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes Preview (unchanged visuals) */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Themes
            </h2>
            <p className="text-lg text-gray-600">
              Magical themes that bring your child's imagination to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {themes.map((theme, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <img 
                  src={theme.image} 
                  alt={`${theme.name} party theme in London`}
                  className="w-full h-40 object-cover object-top"
                  loading={index > 2 ? 'lazy' : 'eager'}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {theme.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {theme.description}
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

      {/* CHANGED: Latest News teaser (shows only if posts exist) */}
      {cmsEnabled && posts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest News & Offers</h2>
                <p className="text-lg text-gray-600">Tips, updates and deals from Happy Party</p>
              </div>
              <Link
                to="/posts"
                className="hidden md:inline-flex items-center text-purple-600 hover:text-purple-700 underline"
              >
                View all
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((p) => (
                <article key={p._id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow max-w-sm mx-auto">
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    {p.coverImage ? (
                      <img
                        src={urlFor(p.coverImage).width(560).height(315).fit('crop').url()}
                        alt={p.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : null}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{p.title}</h3>
                    {p.excerpt && <p className="text-sm text-gray-600 line-clamp-2 mb-4">{p.excerpt}</p>}
                    <div className="flex items-center gap-3">
                      <Link
                        to={`/posts/${p.slug.current}`}
                        className="inline-flex items-center px-3 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition-colors"
                      >
                        Read more
                      </Link>
                      <Button href="/book" variant="secondary" size="sm">Check availability</Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link to="/posts" className="text-purple-600 underline">View all news</Link>
            </div>
          </div>
        </section>
      )}

      {/* Service Area (unchanged) */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Service Area
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We come to you across <strong>London and surrounding areas</strong> — including Croydon, Bromley, Kingston, Sutton, Wimbledon, Richmond, Putney, Clapham, Battersea, Chelsea, Kensington, and many more. Send us your postcode and we'll confirm if we can reach you!
          </p>
        </div>
      </section>

      {/* Testimonials (unchanged) */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Happy Parents, Happy Kids
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex mb-4" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-500"></i>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA (unchanged) */}
      <section id="book" className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to party? Check availability
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Book your children's party entertainer in London today
          </p>
          
          <Button href="/book" variant="primary" size="lg" className="whitespace-nowrap">
            <i className="ri-calendar-check-line mr-2"></i>
            Ready to party? Check availability
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
