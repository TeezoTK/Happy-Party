

import { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

// NEW: pull images from Sanity when CMS is enabled
import { sfetch, cmsEnabled } from '../../lib/sanity'; // NEW
import { urlFor } from '../../lib/imageUrl';            // NEW

// NEW: Sanity gallery image shape
type GImage = {
  _id: string;
  photo: any;
  title?: string;
  caption?: string;
  town?: string;
  takenAt?: string;
};

export default function Gallery() {
  // CHANGED: add images + loading state
  const [images, setImages] = useState<GImage[]>([]); // NEW
  const [loading, setLoading] = useState(true);       // NEW
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Party Gallery | Happy Party';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "View our gallery of happy children's parties in London. See real photos from Princess, Superhero, Disco, and Face-paint themed birthday celebrations."
      );
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        'children party photos London, party gallery London, kids birthday party pictures, party entertainment photos'
      );
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://happyparty.co.uk/gallery');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Party Gallery | Happy Party');
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://happyparty.co.uk/gallery');
    }

    // NEW: load images from Sanity
    (async () => {
      try {
        if (!cmsEnabled) return; // fall back to placeholders
        const data = await sfetch<GImage[]>(
          `*[_type=="galleryImage"]|order(takenAt desc){
            _id, photo, title, caption, town, takenAt
          }`
        );
        setImages(data ?? []);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // CHANGED: keep your placeholders as a fallback when CMS is off or empty
  const placeholderImages: { src: string; caption: string; alt: string }[] = [
    {
      src: 'https://readdy.ai/api/search-image?query=Happy%20children%20at%20princess%20themed%20birthday%20party%20in%20London%20with%20pink%20decorations%2C%20crowns%2C%20magical%20atmosphere%2C%20smiling%20kids%20aged%204-8%2C%20professional%20party%20entertainment&width=400&height=300&seq=gallery1&orientation=landscape',
      caption: 'Princess Party — Croydon',
      alt: 'Princess themed party in Croydon'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Exciting%20superhero%20themed%20children%20party%20in%20London%20with%20kids%20wearing%20capes%20and%20masks%2C%20action%20poses%2C%20colorful%20decorations%2C%20ages%205-9%2C%20energetic%20celebration&width=400&height=300&seq=gallery2&orientation=landscape',
      caption: 'Superhero Party — Bromley',
      alt: 'Superhero themed party in Bromley'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Vibrant%20disco%20party%20for%20children%20in%20London%20with%20disco%20lights%2C%20kids%20dancing%2C%20colorful%20atmosphere%2C%20ages%206-10%2C%20fun%20celebration%20with%20DJ%20equipment&width=400&height=300&seq=gallery3&orientation=landscape',
      caption: 'Disco Party — Kingston',
      alt: 'Disco themed party in Kingston'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Creative%20face%20painting%20at%20children%20birthday%20party%20in%20London%20with%20kids%20showing%20painted%20faces%20as%20animals%20and%20characters%2C%20artistic%20celebration%2C%20ages%203-8&width=400&height=300&seq=gallery4&orientation=landscape',
      caption: 'Face-paint Party — Sutton',
      alt: 'Face-paint themed party in Sutton'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Colorful%20soft%20play%20children%20party%20in%20London%20with%20toddlers%20playing%20safely%2C%20foam%20blocks%2C%20tunnels%2C%20bright%20equipment%2C%20ages%202-5%2C%20gentle%20fun%20activities&width=400&height=300&seq=gallery5&orientation=landscape',
      caption: 'Soft Play Party — Wimbledon',
      alt: 'Soft play themed party in Wimbledon'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Exciting%20pirate%20themed%20children%20party%20in%20London%20with%20treasure%20hunt%2C%20kids%20wearing%20eye%20patches%2C%20pirate%20decorations%2C%20adventure%20atmosphere%2C%20ages%204-9&width=400&height=300&seq=gallery6&orientation=landscape',
      caption: 'Pirate Party — Richmond',
      alt: 'Pirate themed party in Richmond'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Fun%20jungle%20safari%20children%20party%20in%20London%20with%20animal%20decorations%2C%20kids%20exploring%2C%20safari%20hats%2C%20green%20decorations%2C%20adventure%20theme%2C%20ages%204-8&width=400&height=300&seq=gallery7&orientation=landscape',
      caption: 'Jungle Safari — Putney',
      alt: 'Jungle safari themed party in Putney'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Amazing%20space%20themed%20children%20party%20in%20London%20with%20rocket%20decorations%2C%20kids%20as%20astronauts%2C%20galaxy%20theme%2C%20cosmic%20atmosphere%2C%20ages%205-10&width=400&height=300&seq=gallery8&orientation=landscape',
      caption: 'Space Adventure — Clapham',
      alt: 'Space adventure themed party in Clapham'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Beautiful%20fairy%20tale%20children%20party%20in%20London%20with%20magical%20decorations%2C%20kids%20in%20costume%2C%20enchanted%20atmosphere%2C%20whimsical%20setting%2C%20ages%203-7&width=400&height=300&seq=gallery9&orientation=landscape',
      caption: 'Fairy Tale Party — Battersea',
      alt: 'Fairy tale themed party in Battersea'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Energetic%20sports%20themed%20children%20party%20in%20London%20with%20kids%20playing%20games%2C%20sports%20equipment%2C%20active%20celebration%2C%20team%20activities%2C%20ages%206-10&width=400&height=300&seq=gallery10&orientation=landscape',
      caption: 'Sports Party — Chelsea',
      alt: 'Sports themed party in Chelsea'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Magical%20unicorn%20themed%20children%20party%20in%20London%20with%20rainbow%20decorations%2C%20kids%20with%20unicorn%20horns%2C%20pastel%20colors%2C%20dreamy%20atmosphere%2C%20ages%203-8&width=400&height=300&seq=gallery11&orientation=landscape',
      caption: 'Unicorn Party — Kensington',
      alt: 'Unicorn themed party in Kensington'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Fun%20carnival%20themed%20children%20party%20in%20London%20with%20circus%20decorations%2C%20kids%20playing%20games%2C%20colorful%20atmosphere%2C%20festive%20celebration%2C%20ages%204-9&width=400&height=300&seq=gallery12&orientation=landscape',
      caption: 'Carnival Party — Greenwich',
      alt: 'Carnival themed party in Greenwich'
    }
  ];

  // NEW: build a normalized array the UI can render (Sanity first, fallback to placeholders)
  const displayImages = (cmsEnabled && images.length
    ? images.map((img) => ({
        src: urlFor(img.photo).width(1000).height(750).fit('crop').url(),
        alt: img.caption || img.title || 'Party photo',
        caption: `${img.caption || img.title || 'Happy Party'}${img.town ? ` — ${img.town}` : ''}`,
      }))
    : placeholderImages
  );

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % displayImages.length); // CHANGED
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? displayImages.length - 1 : selectedImage - 1); // CHANGED
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Party Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the joy and excitement from our recent children's parties across London. Every celebration is unique and filled with magical moments.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* NEW: simple skeleton while loading from Sanity */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-64 bg-gray-100 animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayImages.map((image, index) => (
                <div
                  key={index}
                  className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      loading={index > 3 ? 'lazy' : 'eager'}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-white font-medium">{image.caption}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="ri-zoom-in-line text-white text-3xl"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={displayImages[selectedImage].src}     // CHANGED
              alt={displayImages[selectedImage].alt}     // CHANGED
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-lg">
              {displayImages[selectedImage].caption}     // CHANGED
            </div>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 cursor-pointer"
            >
              <i className="ri-close-line text-3xl"></i>
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer"
            >
              <i className="ri-arrow-left-line text-3xl"></i>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer"
            >
              <i className="ri-arrow-right-line text-3xl"></i>
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Create your own magical memories</h2>
          <p className="text-xl text-purple-100 mb-8">
            Book your children's party today and join our gallery of happy celebrations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-white text-purple-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-calendar-check-line mr-2"></i>
              Check availability
            </a>
            <a
              href="/packages"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              View packages
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
