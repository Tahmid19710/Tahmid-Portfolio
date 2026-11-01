
import { useEffect, useState } from "react";
import API from "../services/api";

const FALLBACK_EDUCATION = [
  {
    id: "education-1",
    degree: "Bachelor of Science in Computer Science and Engineering",
    description: "Major: Artificial Intelligence",
    duration: "2022–2026",
    institution: "North South University"
  },
  {
    id: "education-2",
    degree: "Higher Secondary Certificate (HSC)",
    description: "GPA: 5.00",
    duration: "",
    institution: "Hamdard Public College"
  },
  {
    id: "education-3",
    degree: "Secondary School Certificate (SSC)",
    description: "GPA: 4.94",
    duration: "",
    institution: "Noakhali Zilla School"
  }
];

function Education() {
  const [education, setEducation] = useState(FALLBACK_EDUCATION);

  useEffect(() => {
    let active = true;

    API.get("/education")
      .then((response) => {
        const data = response.data;

        if (active && Array.isArray(data) && data.length > 0) {
          setEducation(data);
        }
      })
      .catch((error) => {
        console.warn("Education API unavailable; using local data.", error);
      });

    return () => {
      active = false;
    };
  }, []);

  const colors = [
    {
      text: "text-purple-300",
      border: "border-purple-400/30",
      glow: "bg-purple-500",
      badge: "bg-purple-500/10 border-purple-400/20",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      text: "text-blue-300",
      border: "border-blue-400/30",
      glow: "bg-blue-500",
      badge: "bg-blue-500/10 border-blue-400/20",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      text: "text-cyan-300",
      border: "border-cyan-400/30",
      glow: "bg-cyan-500",
      badge: "bg-cyan-500/10 border-cyan-400/20",
      gradient: "from-cyan-500 to-teal-500"
    }
  ];

  return (
    <>
      <style>{`
        @keyframes educationEnter {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes educationPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(168,85,247,.2);
          }
          50% {
            box-shadow: 0 0 0 7px rgba(168,85,247,0);
          }
        }

        .education-enter {
          animation: educationEnter .7s ease-out both;
        }

        .education-dot {
          animation: educationPulse 3s ease-in-out infinite;
        }

        .education-card {
          transition:
            transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .education-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(139,92,246,.12);
        }

        @media (prefers-reduced-motion: reduce) {
          .education-enter,
          .education-dot {
            animation: none !important;
          }
        }
      `}</style>

      <section
        id="education"
        className="relative min-h-[calc(100svh-76px)] flex items-center justify-center overflow-hidden bg-[#080812] text-white px-4 sm:px-6 py-5 scroll-mt-[76px]"
      >

        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl w-full mx-auto">

          {/* Heading */}
          <div className="text-center mb-8">

            <span className="text-[10px] tracking-[0.3em] font-bold text-purple-400 uppercase">
              My Academic Journey
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              My{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>

            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-3" />

            <p className="text-gray-400 text-xs md:text-sm mt-3">
              The academic milestones that shaped my journey.
            </p>

          </div>

          {/* Timeline */}
          <div className="relative">

            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-5 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-purple-500/60 via-blue-500/60 to-cyan-500/60" />

            {/* Education Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

              {education.map((item, index) => {
                const color = colors[index % colors.length];

                return (
                  <article
                    key={item.id ?? item.degree}
                    style={{
                      animationDelay: `${index * 150}ms`
                    }}
                    className={`education-enter education-card group relative rounded-2xl border ${color.border} bg-[#10101d]/95 backdrop-blur-xl p-5 md:p-6 overflow-hidden`}
                  >

                    {/* Decorative Glow */}
                    <div className={`absolute -top-16 -right-16 w-36 h-36 rounded-full ${color.glow} opacity-[0.08] blur-[55px] group-hover:opacity-20 transition-opacity duration-500`} />

                    <div className="relative z-10">

                      {/* Timeline Marker */}
                      <div className="flex items-center justify-between mb-5">

                        <div className={`education-dot w-10 h-10 rounded-xl border ${color.border} ${color.badge} flex items-center justify-center`}>
                          <span className={`text-lg font-bold ${color.text}`}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        {item.duration && (
                          <span className={`text-[10px] font-semibold px-3 py-1.5 rounded-full border ${color.badge} ${color.text}`}>
                            {item.duration}
                          </span>
                        )}

                      </div>

                      {/* Degree */}
                      <p className="text-[9px] tracking-[0.2em] uppercase text-gray-500 font-bold mb-2">
                        Academic Qualification
                      </p>

                      <h3 className="text-lg md:text-xl font-bold text-white leading-snug group-hover:text-purple-200 transition-colors duration-300">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <div className="mt-4">

                        <div className="flex items-start gap-2">

                          <span className={`text-sm ${color.text}`}>
                            ◆
                          </span>

                          <h4 className={`text-sm font-semibold ${color.text} leading-relaxed`}>
                            {item.institution}
                          </h4>

                        </div>

                      </div>

                      {/* Description */}
                      {item.description && (
                        <div className="mt-4 pt-4 border-t border-white/10">

                          <p className="text-xs text-gray-400 leading-relaxed">
                            {item.description}
                          </p>

                        </div>
                      )}

                    </div>

                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r ${color.gradient} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`} />

                  </article>
                );
              })}

            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-7">

            <span className="text-[9px] tracking-[0.25em] text-gray-500 uppercase">
              Learning • Growing • Building
            </span>

          </div>

        </div>
      </section>
    </>
  );
}

export default Education;
