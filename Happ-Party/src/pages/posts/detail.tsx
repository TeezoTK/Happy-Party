import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { sfetch, cmsEnabled } from '../../lib/sanity';
import { urlFor } from '../../lib/imageUrl';

type Slug = { slug?: string };
type BodyChild = { text?: string };
type BodyBlock = { _type?: string; children?: BodyChild[] };

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  coverImage?: any;
  publishedAt?: string;
  body?: BodyBlock[];
}

export default function PostDetailPage() {
  const { slug } = useParams<Slug>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!cmsEnabled || !slug) {
      setLoading(false);
      return;
    }
    const run = async () => {
      try {
        setError(false);
        const data: Post[] = await sfetch(
          `*[_type=="post" && slug.current==$slug][0]{ 
            _id, title, slug, excerpt, coverImage, publishedAt, body 
          }`,
          { slug }
        );
        setPost((data as unknown as Post) ?? null);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [slug]);

  // Basic body renderer (plain text from Portable Text blocks)
  const renderBody = (blocks?: BodyBlock[]) => {
    if (!blocks?.length) return null;
    return (
      <div className="prose max-w-none">
        {blocks.map((b, i) => (
          <p key={i}>{b.children?.map(c => c.text).join(' ')}</p>
        ))}
      </div>
    );
  };

  const title = post?.title ?? 'News & Offers';
  useEffect(() => {
    document.title = `${title} | Happy Party`;
  }, [title]);

  if (!cmsEnabled) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-3xl font-bold mb-4">News is coming soon</h1>
            <Button href="/book" variant="primary">Check Availability</Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/posts" className="text-purple-600 hover:underline cursor-pointer">
            ← Back to News
          </Link>

          {loading && (
            <div className="mt-8 animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-2/3 mb-4" />
              <div className="h-64 bg-gray-200 rounded mb-6" />
              <div className="h-4 bg-gray-200 rounded mb-2" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          )}

          {error && (
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Couldn’t load this post.</p>
              <Button href="/posts" variant="secondary">See all posts</Button>
            </div>
          )}

          {!loading && !error && post && (
            <article className="mt-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{post.title}</h1>
              {post.publishedAt && (
                <time className="text-sm text-gray-500 block mb-6">
                  {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                    year: 'numeric', month: 'long', day: 'numeric'
                  })}
                </time>
              )}

              {post.coverImage && (
                <img
                  src={urlFor(post.coverImage).width(1200).height(630).fit('crop').url()}
                  alt={post.title}
                  className="w-full rounded-2xl shadow mb-8"
                  loading="eager"
                />
              )}

              {post.excerpt && (
                <p className="text-lg text-gray-700 mb-6">{post.excerpt}</p>
              )}

              {renderBody(post.body)}

              <div className="mt-10">
                <Button href="/book" variant="primary">Check Availability</Button>
              </div>
            </article>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
