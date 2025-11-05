import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { sfetch, cmsEnabled } from '../../lib/sanity';
import { urlFor } from '../../lib/imageUrl';

interface Post {
  _id: string;
  title: string;
  slug?: { current: string };
  excerpt?: string;
  coverImage?: any;
  publishedAt?: string;
  body?: Array<any>;
}

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
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
        const data = await sfetch(
          `*[_type=="post" && slug.current==$slug][0]{
            _id,title,slug,excerpt,coverImage,publishedAt,body
          }`,
          { slug }
        );
        setPost(data || null);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [slug]);

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | Happy Party`;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `${post.title} | Happy Party`);
  }, [post]);

  const formatDate = (d?: string) =>
    d ? new Date(d).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/posts" className="text-purple-600 hover:underline">&larr; Back to posts</Link>

          {loading && (
            <div className="mt-8 space-y-4 animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="aspect-video bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          )}

          {!loading && error && (
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Couldn’t load this post right now.</p>
              <Button href="/posts" variant="secondary">See all posts</Button>
            </div>
          )}

          {!loading && !error && !post && (
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Post not found.</p>
              <Button href="/posts" variant="secondary">See all posts</Button>
            </div>
          )}

          {post && (
            <article className="mt-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{post.title}</h1>
              {post.publishedAt && (
                <time className="text-sm text-gray-500">{formatDate(post.publishedAt)}</time>
              )}

              {post.coverImage && (
                <div className="mt-6 aspect-video overflow-hidden rounded-xl shadow">
                  <img
                    src={urlFor(post.coverImage).width(1280).height(720).fit('crop').url()}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {post.excerpt && (
                <p className="mt-6 text-lg text-gray-700">{post.excerpt}</p>
              )}

              {/* Very light body rendering (no PortableText lib) */}
              {Array.isArray(post.body) && (
                <div className="prose max-w-none mt-8">
                  {post.body.map((block: any, i: number) => {
                    if (block._type === 'block') {
                      return <p key={i}>{block.children?.map((c: any) => c.text).join('')}</p>;
                    }
                    return null;
                  })}
                </div>
              )}

              <div className="mt-10">
                <Button href="/#book" variant="primary">Check Availability</Button>
              </div>
            </article>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
