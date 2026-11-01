
import { useEffect, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Live Projects", href: "#live-projects" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" }
  ];

  // Apply and save theme
  useEffect(() => {
    document.documentElement.classList.toggle(
      "light",
      theme === "light"
    );

    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );

    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Auto hide navbar when mouse moves away from top
  useEffect(() => {
    const handleMouseMove = (event) => {
      const isDesktop = window.matchMedia(
        "(min-width: 1024px)"
      ).matches;

      if (!isDesktop) {
        setNavVisible(true);
        return;
      }

      if (open) {
        setNavVisible(true);
        return;
      }

      if (event.clientY <= 90) {
        setNavVisible(true);
      } else if (event.clientY > 135) {
        setNavVisible(false);
      }
    };

    window.addEventListener("pointermove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "pointermove",
        handleMouseMove
      );
    };
  }, [open]);

  const toggleTheme = () => {
    setTheme((previous) =>
      previous === "dark" ? "light" : "dark"
    );
  };

  return (
    <nav
      className={`
        portfolio-navbar
        fixed top-0 left-0 w-full z-50
        border-b border-white/10
        shadow-[0_5px_30px_rgba(0,0,0,0.20)]
        transition-transform duration-500
        ease-in-out will-change-transform
        ${
          navVisible || open
            ? "translate-y-0"
            : "-translate-y-full"
        }
      `}
      onMouseEnter={() => setNavVisible(true)}
      onFocusCapture={() => setNavVisible(true)}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[76px] flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 shrink-0"
        >
          Tahmid.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`
                relative text-xs xl:text-sm font-medium
                transition-all duration-300 group py-2
                whitespace-nowrap
                ${
                  link.name === "Live Projects"
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-purple-400"
                }
              `}
            >
              {link.name}

              <span
                className={`
                  absolute left-0 bottom-0 h-[2px]
                  rounded-full
                  bg-gradient-to-r from-purple-500 to-cyan-400
                  transition-all duration-300
                  ${
                    link.name === "Live Projects"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </a>
          ))}

        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="
              w-11 h-11 rounded-xl
              flex items-center justify-center
              border border-purple-400/30
              bg-purple-500/10
              hover:bg-purple-500/20
              hover:border-purple-400
              hover:rotate-12 hover:scale-110
              transition-all duration-300
              text-xl
            "
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={
              open ? "Close menu" : "Open menu"
            }
            aria-expanded={open}
            className="
              lg:hidden w-11 h-11
              flex items-center justify-center
              rounded-xl border border-white/10
              bg-white/5 text-white
              hover:border-purple-400
              transition-all duration-300
            "
          >
            {open ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden overflow-hidden
          transition-all duration-300
          ${
            open
              ? "max-h-[600px] opacity-100 border-t border-white/10"
              : "max-h-0 opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="px-6 py-4 flex flex-col gap-1 bg-[#0b0b18]/95 backdrop-blur-xl">

          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open
                  ? `${index * 35}ms`
                  : "0ms"
              }}
              className={`
                px-4 py-3 rounded-xl
                text-sm font-medium
                transition-all duration-200
                ${
                  link.name === "Live Projects"
                    ? "text-cyan-300 bg-cyan-500/10"
                    : "text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 hover:translate-x-1"
                }
              `}
            >
              {link.name}
            </a>
          ))}

        </div>
      </div>

    </nav>
  );
}

export default Navbar;
