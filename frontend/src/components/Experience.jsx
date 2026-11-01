
import { useEffect, useState } from "react";
import API from "../services/api";

const FALLBACK_EXPERIENCE = [
  {
    id: 1,
    company: "Islami Bank Bangladesh PLC",
    position: "Intern – ICT Wing, Software Division",
    duration: "3 Months",
    description:
      "Completed a three-month internship in the ICT Wing, Software Division. Received initial training and subsequently worked on assigned tasks related to banking IT operations.",
    technology:
      "Java 21, Spring Boot, Thymeleaf, Bootstrap, Git, REST API, SQL, JPA, Database Integration, Concurrency, Multithreading, Islamic Banking, Deposits, Investment, Core Banking"
  }
];

function Experience() {
  const [experiences, setExperiences] = useState(FALLBACK_EXPERIENCE);

  useEffect(() => {
    let active = true;

    API.get("/experience")
      .then((response) => {
        const data = response.data;

        if (active && Array.isArray(data) && data.length > 0) {
          setExperiences(data);
        }
      })
      .catch((error) => {
        console.warn("Experience API unavailable; using local data.", error);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes expEnter {
          from {
            opacity: 0;
            transform: translateY(25px) scale(.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes expGlow {
          0%, 100% {
            opacity: .25;
            transform: scale(.9);
          }
          50% {
            opacity: .75;
            transform: scale(1.15);
          }
        }

        @keyframes expBorder {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes expFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes expShine {
          from { transform: translateX(-150%) skewX(-20deg); }
          to { transform: translateX(250%) skewX(-20deg); }
        }

        .exp-enter {
          animation: expEnter .75s cubic-bezier(.2,.8,.2,1) both;
        }

        .exp-glow {
          animation: expGlow 5s ease-in-out infinite;
        }

        .exp-border {
          background-size: 200% 200%;
          animation: expBorder 6s linear infinite;
        }

        .exp-float {
          animation: expFloat 4s ease-in-out infinite;
        }

        .exp-card {
          transition: transform .35s ease, box-shadow .35s ease;
        }

        .exp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 45px rgba(139,92,246,.13);
        }

        .exp-tech {
          transition: all .25s ease;
        }

        .exp-tech:hover {
          transform: translateY(-3px) scale(1.04);
          border-color: rgba(34,211,238,.65);
          color: #67e8f9;
          background: rgba(34,211,238,.10);
        }

        .exp-icon {
          transition: transform .4s ease;
        }

        .exp-card:hover .exp-icon {
          transform: rotate(12deg) scale(1.08);
        }

        .exp-shine {
          position: relative;
          overflow: hidden;
        }

        .exp-shine::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 40%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.12),
            transparent
          );
        }

        .exp-card:hover .exp-shine::after {
          animation: expShine 1s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .exp-enter,
          .exp-glow,
          .exp-border,
          .exp-float {
            animation: none !important;
          }

          .exp-card,
          .exp-tech,
          .exp-icon {
            transition: none !important;
          }
        }
      `}</style>

      <section
        id="experience"
        className="relative min-h-[calc(100svh-76px)] flex items-center justify-center overflow-hidden bg-[#080812] text-white px-4 sm:px-6 py-3 scroll-mt-[76px]"
      >

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="exp-glow absolute -top-24 left-[10%] w-72 h-72 rounded-full bg-purple-600/15 blur-[100px]" />

          <div className="exp-glow absolute -bottom-24 right-[5%] w-72 h-72 rounded-full bg-cyan-500/15 blur-[100px]" />

          <div className="exp-float absolute top-[25%] right-[12%] w-2 h-2 rounded-full bg-cyan-400" />

          <div className="exp-float absolute bottom-[25%] left-[12%] w-2 h-2 rounded-full bg-purple-400"
            style={{ animationDelay: "1s" }}
          />

        </div>

        {/* Main Container */}
        <div className="relative z-10 max-w-6xl w-full mx-auto">

          {/* Heading */}
          <div className="exp-enter text-center mb-4">

            <p className="text-[9px] md:text-[10px] tracking-[0.3em] font-bold text-cyan-400 uppercase">
              My Professional Journey
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-1">
              Work{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <div className="w-14 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-2" />

            <p className="text-gray-400 text-[10px] md:text-xs mt-2">
              My practical experience and professional development.
            </p>

          </div>

          {/* Experience Cards */}
          <div className="space-y-3">

            {experiences.map((exp, index) => {

              const technologies = Array.isArray(exp.technology)
                ? exp.technology
                : typeof exp.technology === "string"
                  ? exp.technology.split(",")
                  : [];

              return (
                <article
                  key={exp.id ?? index}
                  className="exp-enter exp-card exp-border relative rounded-2xl p-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
                  style={{ animationDelay: `${index * 150}ms` }}
                >

                  <div className="relative rounded-2xl bg-[#10101d] overflow-hidden">

                    {/* Glow */}
                    <div className="exp-glow absolute -top-20 right-0 w-64 h-64 rounded-full bg-purple-500/10 blur-[85px] pointer-events-none" />

                    {/* Top Accent */}
                    <div className="h-[3px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400" />

                    <div className="relative grid md:grid-cols-[.85fr_1.15fr]">

                      {/* LEFT SIDE */}
                      <div className="exp-shine p-5 md:p-6 md:border-r border-white/10">

                        <div className="flex items-center gap-3 mb-4">

                          <div className="exp-icon exp-float w-10 h-10 rounded-xl border border-purple-400/20 bg-purple-500/15 flex items-center justify-center text-xl text-purple-300">
                            ✦
                          </div>

                          <div>
                            <p className="text-[9px] tracking-[0.2em] text-purple-400 font-bold uppercase">
                              Experience {String(index + 1).padStart(2, "0")}
                            </p>

                            <p className="text-[10px] text-gray-500 mt-1">
                              Professional Internship
                            </p>
                          </div>

                        </div>

                        <h3 className="text-xl md:text-2xl font-extrabold leading-snug text-white">
                          {exp.position}
                        </h3>

                        <div className="flex items-center gap-2 mt-4">

                          <span className="text-purple-400 text-sm">
                            ◆
                          </span>

                          <h4 className="text-sm md:text-base font-semibold text-purple-300">
                            {exp.company}
                          </h4>

                        </div>

                        <div className="flex flex-wrap gap-2 mt-5">

                          {exp.duration && (
                            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-[10px] text-cyan-300 font-semibold">
                              ◷ {exp.duration}
                            </span>
                          )}

                          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1.5 text-[10px] text-green-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Completed
                          </span>

                        </div>

                      </div>

                      {/* RIGHT SIDE */}
                      <div className="p-5 md:p-6">

                        {/* Responsibilities */}
                        <div className="flex items-center gap-2 mb-3">

                          <div className="w-1 h-5 rounded-full bg-gradient-to-b from-purple-400 to-cyan-400" />

                          <h4 className="text-sm font-bold text-white">
                            Role & Responsibilities
                          </h4>

                        </div>

                        <p className="text-gray-300 text-xs md:text-sm leading-6">
                          {exp.description}
                        </p>

                        {/* Technologies */}
                        {technologies.length > 0 && (

                          <div className="mt-5">

                            <div className="flex items-center gap-2 mb-3">

                              <div className="w-1 h-5 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400" />

                              <h4 className="text-sm font-bold text-white">
                                Technologies & Knowledge
                              </h4>

                            </div>

                            <div className="flex flex-wrap gap-1.5">

                              {technologies.map((tech, techIndex) => (
                                <span
                                  key={`${tech.trim()}-${techIndex}`}
                                  className="exp-tech px-2.5 py-1.5 rounded-lg border border-purple-400/15 bg-purple-500/[0.08] text-purple-200 text-[9px] md:text-[10px] font-medium"
                                >
                                  {tech.trim()}
                                </span>
                              ))}

                            </div>

                          </div>

                        )}

                      </div>

                    </div>

                    {/* Bottom Accent */}
                    <div className="h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 opacity-50" />

                  </div>

                </article>
              );
            })}

          </div>

          {/* Footer */}
          <div className="exp-enter text-center mt-3">

            <p className="text-[8px] tracking-[0.25em] text-gray-500 uppercase">
              Learning • Experience • Growth
            </p>

          </div>

        </div>

      </section>
    </>
  );
}

export default Experience;
