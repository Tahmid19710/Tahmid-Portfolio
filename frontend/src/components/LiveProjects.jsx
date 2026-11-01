
const LIVE_PROJECTS = [
  {
    id: "ask-tahmid",
    number: "01",
    name: "Ask Tahmid",
    subtitle: "AI-Powered Web Assistant",
    description:
      "An AI-powered assistant making artificial intelligence accessible through Bangla, Banglish, and English.",
    features: [
      "Multilingual AI",
      "AI API Integration",
      "Chat Interface",
      "Web Application"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemini / Groq API"
    ],
    github: "https://github.com/Tahmid19710/ask-tahmid",
    demo: "https://ask-tahmid.vercel.app/",
    accent: "purple"
  },
  {
    id: "aircraft-radar",
    number: "02",
    name: "Aircraft Live Radar",
    subtitle: "Aircraft Tracking Platform",
    description:
      "A web-based aircraft tracking platform visualizing aircraft positions using data from the OpenSky Network.",
    features: [
      "Aircraft Tracking",
      "Flight Visualization",
      "OpenSky API",
      "Interactive Radar"
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "OpenSky API",
      "Vercel"
    ],
    github: "https://github.com/Tahmid19710/aircraft-live-radar",
    demo: "https://tahmid-aircraft-radar.vercel.app/",
    accent: "cyan"
  }
];

function LiveProjects() {
  return (
    <>
      <style>{`
        @keyframes liveEnter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes radarRotate {
          to { transform: rotate(360deg); }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: .3; }
          50% { opacity: .85; }
        }

        @keyframes buttonShine {
          from { transform: translateX(-150%) skewX(-20deg); }
          to { transform: translateX(300%) skewX(-20deg); }
        }

        .live-enter {
          animation: liveEnter .7s ease-out both;
        }

        .radar-rotate {
          animation: radarRotate 8s linear infinite;
        }

        .live-glow {
          animation: glowPulse 4s ease-in-out infinite;
        }

        .live-card {
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .live-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 35px rgba(139,92,246,.14);
          border-color: rgba(168,85,247,.45);
        }

        .live-button {
          position: relative;
          overflow: hidden;
        }

        .live-button::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 40%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.25),
            transparent
          );
        }

        .live-button:hover::after {
          animation: buttonShine .8s ease;
        }

        .live-tech {
          transition: transform .25s ease, border-color .25s ease;
        }

        .live-tech:hover {
          transform: translateY(-2px);
          border-color: rgba(34,211,238,.5);
        }

        /* Shorter laptop screens */
        @media (max-height: 700px) and (min-width: 768px) {
          .live-heading {
            margin-bottom: 8px !important;
          }

          .live-preview {
            height: 88px !important;
          }

          .live-details {
            padding: 10px 14px !important;
          }

          .live-card-title {
            font-size: 18px !important;
          }

          .live-description {
            margin-top: 5px !important;
          }

          .live-features {
            margin-top: 7px !important;
          }

          .live-technologies {
            margin-top: 7px !important;
          }

          .live-actions {
            padding-top: 8px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .live-enter,
          .radar-rotate,
          .live-glow {
            animation: none !important;
          }

          .live-card,
          .live-tech {
            transition: none !important;
          }
        }
      `}</style>

      <section
        id="live-projects"
        className="relative min-h-[calc(100svh-76px)] flex flex-col justify-center bg-[#080812] text-white px-4 sm:px-6 lg:px-8 py-2 overflow-hidden scroll-mt-[76px]"
      >

        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="live-glow absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />

          <div className="live-glow absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

          <div className="absolute top-[20%] right-[12%] w-1.5 h-1.5 rounded-full bg-cyan-400/50" />

        </div>

        {/* Main Container - Width unchanged */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">

          {/* Heading */}
          <div className="live-enter live-heading text-center mb-3">

            <span className="text-[9px] tracking-[0.3em] font-bold text-cyan-400 uppercase">
              Explore My Applications
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-0.5">
              Live{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <div className="w-14 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-1.5" />

            <p className="text-gray-400 text-[10px] mt-1.5">
              Explore my deployed applications and projects.
            </p>

          </div>

          {/* Two Wide Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">

            {LIVE_PROJECTS.map((project, index) => {

              const isPurple = project.accent === "purple";

              return (

                <article
                  key={project.id}
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                  className="live-enter live-card group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#10101d]/95"
                >

                  {/* Top Gradient */}
                  <div className={`h-[3px] w-full ${
                    isPurple
                      ? "bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
                      : "bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300"
                  }`} />

                  {/* Preview */}
                  <div
                    className={`live-preview relative h-[100px] sm:h-[105px] lg:h-[108px] overflow-hidden flex items-center justify-center ${
                      isPurple
                        ? "bg-gradient-to-br from-[#1c1236] via-[#11152c] to-[#080d1b]"
                        : "bg-gradient-to-br from-[#082333] via-[#10172d] to-[#100e25]"
                    }`}
                  >

                    {/* Grid */}
                    <div
                      className="absolute inset-0 opacity-[0.12]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                        backgroundSize: "22px 22px"
                      }}
                    />

                    {/* Ask Tahmid Preview */}
                    {isPurple ? (

                      <div className="relative w-[76%] max-w-md rounded-lg border border-purple-400/20 bg-[#111122]/95 p-2.5 shadow-xl transition-transform duration-500 group-hover:scale-[1.03]">

                        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">

                          <div className="flex items-center gap-2">

                            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-[10px] font-bold">
                              T
                            </div>

                            <div>
                              <p className="text-[9px] font-bold">
                                Ask Tahmid
                              </p>

                              <p className="text-[7px] text-gray-500">
                                AI Assistant
                              </p>
                            </div>

                          </div>

                          <span className="text-[7px] text-green-400">
                            ● Online
                          </span>

                        </div>

                        <div className="py-1.5 space-y-1.5">

                          <div className="flex justify-end">
                            <span className="rounded-lg bg-purple-600/30 border border-purple-400/20 px-2 py-1 text-[7px]">
                              Hello! How can I help?
                            </span>
                          </div>

                          <div>
                            <span className="rounded-lg bg-white/[0.06] border border-white/10 px-2 py-1 text-[7px] text-gray-300">
                              Ask in Bangla or English.
                            </span>
                          </div>

                        </div>

                        <div className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 flex justify-between text-[7px] text-gray-500">
                          Ask something...
                          <span className="text-purple-400">↗</span>
                        </div>

                      </div>

                    ) : (

                      /* Aircraft Radar Preview */
                      <div className="relative w-28 h-28 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">

                        <div className="absolute inset-0 rounded-full border border-cyan-400/25" />

                        <div className="absolute inset-5 rounded-full border border-cyan-400/25" />

                        <div className="absolute inset-10 rounded-full border border-cyan-400/25" />

                        <div className="absolute w-full h-px bg-cyan-400/20" />

                        <div className="absolute h-full w-px bg-cyan-400/20" />

                        <div className="absolute inset-0 rounded-full overflow-hidden">
                          <div className="radar-rotate absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(34,211,238,0.35),transparent_85deg)]" />
                        </div>

                        {[
                          "top-[20%] left-[25%]",
                          "top-[35%] right-[20%]",
                          "bottom-[25%] left-[22%]",
                          "bottom-[20%] right-[25%]"
                        ].map((position, i) => (
                          <span
                            key={i}
                            className={`absolute ${position} text-cyan-300 text-[10px] live-glow`}
                          >
                            ✈
                          </span>
                        ))}

                        <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_5px_rgba(34,211,238,0.5)]" />

                      </div>

                    )}

                    {/* Labels */}
                    <span className="absolute top-2 left-2 rounded-full border border-white/10 bg-black/60 px-2 py-1 text-[7px] text-gray-300">
                      PREVIEW
                    </span>

                    <span className="absolute top-2 right-2 flex items-center gap-1 rounded-full border border-green-400/20 bg-black/60 px-2 py-1">

                      <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />

                      <span className="text-[7px] text-green-300">
                        DEPLOYED
                      </span>

                    </span>

                  </div>

                  {/* Compact Details */}
                  <div className="live-details relative flex flex-col flex-1 p-3 sm:p-3.5">

                    {/* Number */}
                    <div className="flex items-center gap-2 mb-1">

                      <span className={`text-[8px] tracking-[0.2em] font-bold ${
                        isPurple ? "text-purple-400" : "text-cyan-400"
                      }`}>
                        LIVE PROJECT {project.number}
                      </span>

                      <div className="h-px flex-1 bg-white/10" />

                    </div>

                    {/* Title */}
                    <h3 className="live-card-title text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.name}
                    </h3>

                    {/* Subtitle */}
                    <p className={`text-[10px] font-semibold mt-0.5 ${
                      isPurple ? "text-purple-300" : "text-cyan-300"
                    }`}>
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="live-description live-description text-gray-400 text-[10px] sm:text-[11px] leading-relaxed mt-1.5">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="live-features grid grid-cols-2 gap-x-4 gap-y-1 mt-2">

                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-1.5 text-gray-300 text-[9px]"
                        >
                          <span className={isPurple ? "text-purple-400" : "text-cyan-400"}>
                            ✓
                          </span>

                          {feature}
                        </div>
                      ))}

                    </div>

                    {/* Technologies */}
                    <div className="live-technologies flex flex-wrap gap-1.5 mt-2">

                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`live-tech px-2 py-1 rounded-full border text-[8px] font-medium ${
                            isPurple
                              ? "bg-purple-500/10 border-purple-400/20 text-purple-300"
                              : "bg-cyan-500/10 border-cyan-400/20 text-cyan-300"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                    {/* Buttons */}
                    <div className="live-actions flex gap-2 mt-auto pt-2.5 border-t border-white/10">

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`live-button flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 ${
                          isPurple
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-cyan-500"
                            : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500"
                        }`}
                      >
                        Visit Live Website ↗
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-white/15 bg-white/[0.04] text-gray-300 text-[10px] font-semibold hover:text-white hover:border-purple-400/60 hover:bg-purple-500/10 transition-all duration-300"
                      >
                        GitHub ↗
                      </a>

                    </div>

                    {project.id === "aircraft-radar" && (
                      <p className="text-[8px] text-gray-500 mt-1">
                        Aircraft data availability depends on OpenSky API connectivity.
                      </p>
                    )}

                  </div>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 w-full h-[2px] ${
                    isPurple
                      ? "bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
                      : "bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300"
                  } opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />

                </article>
              );
            })}

          </div>

          {/* Footer */}
          <div className="text-center mt-2">

            <span className="text-[8px] tracking-[0.25em] text-gray-500 uppercase">
              Designed & Developed by Tahmid
            </span>

          </div>

        </div>
      </section>
    </>
  );
}

export default LiveProjects;
