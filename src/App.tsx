import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer, Header, MobileCallBar } from "./components/Sections";
import { EdgeRings, StickyBadge } from "./components/DecorBits";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import ServiceAreas from "./pages/ServiceAreas";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ContactPage from "./pages/ContactPage";

/* Home renders its own Brooklyn Modern Craft header/footer; the shared
   chrome only wraps the inner pages. */
function Chrome() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <div
      id="top"
      className="min-h-screen bg-cream pb-[calc(3.75rem+env(safe-area-inset-bottom))] md:pb-0"
    >
      {!isHome && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!isHome && <Footer />}
      {!isHome && <MobileCallBar />}
      {!isHome && <StickyBadge />}
      {!isHome && <EdgeRings />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Chrome />
    </BrowserRouter>
  );
}
