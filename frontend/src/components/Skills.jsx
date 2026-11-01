
import { useEffect, useState } from "react";
import API from "../services/api";

const FALLBACK_SKILLS = [
  {
    id: "skill-1",
    category: "Backend Development",
    name: "Java, Spring Boot, Spring Security, Spring Data JPA"
  },
  {
    id: "skill-2",
    category: "Frontend Development",
    name: "React, JavaScript, HTML, CSS, Tailwind CSS"
  },
  {
    id: "skill-3",
    category: "Database & APIs",
    name: "SQL, PostgreSQL, REST APIs, Database Integration"
  },
  {
    id: "skill-4",
    category: "Tools & Software Engineering",
    name: "Git, GitHub, OOP, MVC Architecture"
  },
  {
    id: "skill-5",
    category: "AI & Machine Learning",
    name: "Artificial Intelligence, Machine Learning, Deep Learning"
  }
];

const categoryStyles = [
  {
    border: "border-purple-400/20 hover:border-purple-400/60",
    glow: "bg-purple-500/15",
    text: "text-purple-300",
    gradient: "from-purple-500 to-violet-400",
    icon: "✦"
  },
  {
    border: "border-blue-400/20 hover:border-blue-400/60",
    glow: "bg-blue-500/15",
    text: "text-blue-300",
    gradient: "from-blue-500 to-indigo-400",
    icon: "◈"
  },
  {
    border: "border-cyan-400/20 hover:border-cyan-400/60",
    glow: "bg-cyan-500/15",
    text: "text-cyan-300",
    gradient: "from-cyan-500 to-teal-400",
    icon: "⌘"
  },
  {
    border: "border-pink-400/20 hover:border-pink-400/60",
    glow: "bg-pink-500/15",
    text: "text-pink-300",
    gradient: "from-pink-500 to-rose-400",
    icon: "◇"
  },
  {
    border: "border-violet-400/20 hover:border-violet-400/60",
    glow: "bg-violet-500/15",
    text: "text-violet-300",
    gradient: "from-violet-500 to-purple-400",
    icon: "◎"
  }
];

function Skills() {
  const [skills, setSkills] = useState(FALLBACK_SKILLS);

  // Existing Skills API
  useEffect(() => {
    let active = true;

    API.get("/skills")
      .then((response) => {
        const data = response.data;

        if (active && Array.isArray(data) && data.length > 0) {
          setSkills(data);
        }
      })
      .catch((error) => {
        console.warn(
          "Skills API unavailable; using local data.",
          error
        );
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      {/* Custom Animations */}
      <style>{`
        @keyframes skillFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes skillFill {
          from { width: 0; }
          to { width: var(--skill-width); }
        }

        @keyframes skillFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        .skill-card-enter {
          animation: skillFadeUp 650ms cubic-bezier(.2,.8,.2,1) both;
        }

        .skill-progress-fill {
          animation: skillFill 1.3s ease-out both;
        }

        .skill-float {
          animation: skillFloat 5s ease-in-out infinite;
        }

        .skill-card-shine {
          position: relative;
          isolation: isolate;
        }

        .skill-card-shine::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255,255,255,0.055) 45%,
            transparent 65%
          );
          transform: translateX(-120%);
          transition: transform 800ms ease;
          pointer-events: none;
          border-radius: inherit;
          z-index: 0;
        }

        .skill-card-shine:hover::after {
          transform: translateX(120%);
        }

        @media (prefers-reduced-motion: reduce) {
          .skill-card-enter,
          .skill-progress-fill,
          .skill-float {
            animation: none !important;
          }

          .skill-card-shine::after {
            transition: none;
          }
        }
      `}</style>

      <section
        id="skills"
        className="relative min-h-[calc(100svh-76px)] flex items-center px-5 md:px-8 py-5 bg-[#080812] text-white overflow-hidden scroll-mt-[76px]"
      >

        {/* Background Effects */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/15 rounded-full blur-[110px] animate-pulse pointer-events-none" />

        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-500/15 rounded-full blur-[110px] animate-pulse pointer-events-none" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-purple-400/[0.04] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto w-full">

          {/* Heading */}
          <div className="text-center mb-6">

            <span className="text-[10px] md:text-xs tracking-[0.3em] font-semibold text-purple-400 uppercase">
              What I Work With
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-1">
              My{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-2" />

            <p className="text-gray-400 text-xs md:text-sm mt-3">
              Technologies, tools, and concepts I work with.
            </p>

          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">

            {skills.map((skill, index) => {

              const style =
                categoryStyles[index % categoryStyles.length];

              const percentage = Math.min(
                100,
                Math.max(0, Number(skill.percentage) || 0)
              );

              return (

                <div
                  key={skill.id ?? skill.name}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                  className={`skill-card-enter skill-card-shine group relative overflow-hidden rounded-2xl border ${style.border} bg-[#10101d]/85 backdrop-blur-xl px-4 py-3.5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10`}
                >

                  {/* Card Glow */}
                  <div
                    className={`absolute -top-12 -right-12 w-32 h-32 rounded-full ${style.glow} blur-[60px] opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Floating Decoration */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full border border-white/[0.07] group-hover:rotate-90 group-hover:scale-125 transition-all duration-700" />

                  <div className="relative z-10">

                    {/* Card Header */}
                    <div className="flex items-center gap-3">

                      <div
                        className={`w-10 h-10 shrink-0 rounded-xl ${style.glow} border border-white/10 flex items-center justify-center text-xl ${style.text} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        {style.icon}
                      </div>

                      <div className="min-w-0">

                        <h3
                          className={`text-sm md:text-base font-bold ${style.text} leading-snug`}
                        >
                          {skill.category}
                        </h3>

                        <p className="text-gray-300 text-xs md:text-[13px] mt-1 leading-relaxed">
                          {skill.name}
                        </p>

                      </div>

                    </div>

                    {/* Percentage - Only if supplied by API */}
                    {skill.percentage != null && (

                      <div className="mt-3">

                        <div className="flex justify-between items-center mb-2">

                          <span className="text-gray-500 text-[10px] uppercase tracking-wider">
                            Proficiency
                          </span>

                          <span className={`text-xs font-bold ${style.text}`}>
                            {skill.percentage}%
                          </span>

                        </div>

                        <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">

                          <div
                            className={`skill-progress-fill h-full rounded-full bg-gradient-to-r ${style.gradient}`}
                            style={{
                              "--skill-width": `${percentage}%`,
                              animationDelay: `${index * 100}ms`
                            }}
                          />

                        </div>

                      </div>

                    )}

                    {/* Bottom Accent */}
                    <div
                      className={`mt-3 h-[2px] w-9 rounded-full bg-gradient-to-r ${style.gradient} group-hover:w-full transition-all duration-700`}
                    />

                  </div>

                </div>

              );

            })}

          </div>

          {/* Bottom Decorative Label */}
          <div className="flex justify-center mt-5">

            <div className="flex items-center gap-2 text-gray-500 text-[10px] tracking-[0.2em] uppercase">

              <span className="w-5 h-[1px] bg-purple-500/50" />

              Technical Toolkit

              <span className="w-5 h-[1px] bg-cyan-500/50" />

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Skills;
