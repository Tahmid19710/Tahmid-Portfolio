
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#080812] px-5 md:px-8 pt-[92px] pb-6"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] animate-pulse" />

        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "55px 55px"
          }}
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-purple-400/30 bg-purple-500/10 mb-5">

            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

            <span className="text-xs sm:text-sm font-medium tracking-wider text-purple-200">
              WELCOME TO MY PORTFOLIO
            </span>

          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.12] text-white">

            Tahmid Anjum

            <span className="block mt-1 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Mozumder
            </span>

          </h1>

          {/* Designation */}
          <h2 className="text-xl sm:text-2xl lg:text-[1.7rem] font-bold mt-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Full Stack Developer
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mt-2">
            AI &amp; Machine Learning Enthusiast
          </p>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed max-w-xl mx-auto md:mx-0">
            I build modern web applications, REST APIs, and
            database-driven solutions. My interests include
            machine learning, deep learning, and intelligent
            software systems.
          </p>

          {/* Main Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mt-6">

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold text-sm px-6 py-3 shadow-lg shadow-purple-600/25 hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              View Projects

              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] hover:border-purple-400 hover:bg-purple-500/10 text-white font-semibold text-sm px-6 py-3 hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </a>

          </div>

          {/* Social Links + CV */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-2.5 mt-5">

            {/* GitHub */}
            <a
              href="https://github.com/Tahmid19710"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 hover:text-white hover:border-purple-400/60 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.59 1.2 3.22.91.1-.72.39-1.2.7-1.48-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.6 5.24-5.09 5.51.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              <span className="text-xs sm:text-sm">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tahmid-anjum-mozumder/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 hover:text-white hover:border-blue-400/60 hover:bg-blue-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V9H7.1v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
              </svg>
              <span className="text-xs sm:text-sm">LinkedIn</span>
            </a>

            {/* Gmail */}
            <a
              href="mailto:tahmid19710@gmail.com"
              aria-label="Email"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 hover:text-white hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.8" />
                <path d="m3 7 9 6 9-6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs sm:text-sm">Gmail</span>
            </a>

            {/* Download CV */}
            <a
              href="https://drive.google.com/file/d/1viVR3kQbWcm-SCxTDbwf4mTf8m3o13v5/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-purple-400/30 bg-purple-500/10 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-purple-600/30 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" />
              </svg>
              <span className="text-xs sm:text-sm">Download CV</span>
            </a>

          </div>

        </div>

        {/* RIGHT PROFILE IMAGE */}
        <div className="relative flex justify-center items-center">

          {/* Outer Glow */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[390px] lg:h-[390px] rounded-full bg-purple-600/20 blur-[80px] animate-pulse" />

          {/* Rotating Border */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] flex items-center justify-center">

            <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400/40 animate-[spin_25s_linear_infinite]" />

            <div className="absolute inset-3 rounded-full border border-cyan-400/30" />

            {/* Profile Image */}
            <div className="relative w-[88%] h-[88%] rounded-full p-[5px] bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 shadow-[0_0_50px_rgba(139,92,246,0.3)]">

              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#080812]">

                <img
                  src="/images/profile.jpeg"
                  alt="Tahmid Anjum Mozumder"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />

              </div>

            </div>

          </div>

          {/* Floating Decorations */}
          <div className="absolute top-5 right-3 md:right-8 w-12 h-12 rounded-2xl border border-purple-400/30 bg-purple-500/10 backdrop-blur-md flex items-center justify-center text-xl shadow-lg shadow-purple-500/20 animate-bounce">
            ✦
          </div>

          <div className="absolute bottom-8 left-3 md:left-8 w-10 h-10 rounded-full border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-md flex items-center justify-center text-cyan-300 text-lg animate-pulse">
            ✧
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
