import React from "react";
import MiniCard from "./Card/minicard";

export default function MyHead() {
  const [shown, setShown] = React.useState(false);

  const toggleNav = () => setShown((s) => !s);

  return (
    <>
      {/* HEADER */}
      <header className="
        fixed top-0 z-50 w-full h-18 flex items-center justify-end
        px-6 gap-3 bg-[#FCFFF2] border-b border-neutral-100
      ">
        <i className="ri-home-6-fill scale-200 me-auto" />

        <div className="w-30 bg-[#E6FF28] rounded-md h-10 flex items-center justify-center gap-x-2 me-2">
          <p>Lets Talk</p>
          <div className="bg-neutral-50 h-7 w-7 rounded-md" />
        </div>

        <i
          className={shown ? "ri-close-line scale-200" : "ri-menu-line scale-200"}
          onClick={toggleNav}
        />
      </header>

      {/* NAV-BAR: selalu ter-mount, class berganti untuk animasi */}
      <div
        id="nav-bar"
        className={`
          fixed top-0 left-0 z-40 w-full h-full bg-white text-black
          flex flex-col pt-20 px-6 gap-3

          /* animasi transform + opacity */
          transition-all duration-300 ease-in-out

          /* ketika open */
          ${shown 
            ? " translate-x-0 opacity-100 pointer-events-auto" 
            /* ketika close */
            : " -translate-x-full opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Judul */}
        <div className="mb-4 border-b-2 border-gray-200 h-16 mt-8 flex items-center">
          <p className="text-xl">Learn with me</p>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-y-10 mt-4">
          {["Home", "About", "Service", "Work"].map((item) => (
            <div key={item} className="border-b-2 border-gray-200">
              <ul className="text-xl">{item}</ul>
            </div>
          ))}
        </nav>

        {/* MiniCards */}
        <div className="w-full h-40 flex flex-wrap gap-2 bg-amber-200 items-start justify-start p-2 mt-10 rounded-xl">
          <MiniCard name="Instagram" icon="ri-instagram-fill scale-200 m-auto" />
          <MiniCard name="Linkedin"  icon="ri-linkedin-fill scale-200 m-auto" />
          <MiniCard name="Youtube"   icon="ri-youtube-fill scale-200 m-auto" />
        </div>
      </div>
    </>
  );
}
