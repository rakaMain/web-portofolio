import React from "react";
import MiniCard from "../data/minicard";
import MyUl from "../components/headul";

// NOTE: adjust the logo import/path depending on your bundler (Vite/CRA/Next).
// For CRA/Vite you can keep the path like '/src/assets/gambar/logo.png' or import it:
// import logo from 'src/assets/gambar/logo.png'

export default function MyHead() {
  const [open, setOpen] = React.useState(false);
  const items = ["Home", "About", "Service", "Work"];

  return (
    <>
      {/* Fixed header - stays on top while scrolling */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#fcfff2]/95 backdrop-blur-sm border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          {/* LEFT: Logo */}
          <div className="flex items-center flex-shrink-0">
            {/* Use an <img> path that matches your project setup */}
            <img src="/src/assets/gambar/logo.png" alt="logo" className="h-10 w-auto" />
          </div>

          {/* CENTER: navigation (centered on md and up) */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex gap-8">
              {items.map((i) => (
                <li key={i} className="text-sm font-medium text-black hover:text-neutral-600 cursor-pointer">
                  {i}
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT: CTA + mobile menu button */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#E6FF28] rounded-md h-10 px-3">
              <span className="text-sm font-medium">Let's Talk</span>
              <span className="bg-neutral-50 h-7 w-7 rounded-md inline-flex items-center justify-center" />
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
            >
              <i className={open ? "ri-close-line text-2xl" : "ri-menu-line text-2xl"} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer / full-screen nav */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-md w-full h-full p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <p className="text-xl font-semibold">Learn with me</p>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <i className="ri-close-line text-2xl" />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {items.map((item) => (
              <MyUl key={item} item={item} />
            ))}
          </nav>

          <div className="mt-auto flex gap-2 flex-wrap">
            <MiniCard name="Instagram" icon="ri-instagram-fill scale-200 m-auto" />
            <MiniCard name="Linkedin" icon="ri-linkedin-fill scale-200 m-auto" />
            <MiniCard name="Youtube" icon="ri-youtube-fill scale-200 m-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
