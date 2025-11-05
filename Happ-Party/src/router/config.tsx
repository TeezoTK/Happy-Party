import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Packages from "../pages/packages/page";
import Themes from "../pages/themes/page";
import Gallery from "../pages/gallery/page";
import Reviews from "../pages/reviews/page";
import FAQs from "../pages/faqs/page";
import About from "../pages/about/page";
import Book from "../pages/book/page";

// NEW: import posts list + post detail
import Posts from "../pages/posts/posts";
import PostDetail from "../pages/posts/[slug]";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/packages", element: <Packages /> },
  { path: "/themes", element: <Themes /> },
  { path: "/gallery", element: <Gallery /> },

  // NEW
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:slug", element: <PostDetail /> },

  { path: "/reviews", element: <Reviews /> },
  { path: "/faqs", element: <FAQs /> },
  { path: "/about", element: <About /> },
  { path: "/book", element: <Book /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
