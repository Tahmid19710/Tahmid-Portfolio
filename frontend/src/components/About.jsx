
import { useEffect, useState } from "react";
import API from "../services/api";

function About() {
  const [personal, setPersonal] = useState(null);

  // Fallback links
  const cvLink =
    personal?.cvLink ||
    "https://drive.google.com/uc?export=download&id=1PYMC9ircpw3MRzUKHw45bStPk9bWNpks";

  const githubLink =
    personal?.github ||
    "https://github.com/Tahmid19710";

  const linkedinLink =
    personal?.linkedin ||
    "https://www.linkedin.com/in/tahmid-anjum-mozumder/";

  // Existing API functionality
  useEffect(() => {
    const fetchPersonal = async () => {
      try {
        const response = await API.get("/personal");
        setPersonal(response.data);
      } catch (error) {
        console.log("About loading error:", error);
      }
    };

    fetchPersonal();
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-[calc(100svh-76px)] flex items-center overflow-hidden bg-[#080812] px-5 md:px-8 py-3 text-white scroll-mt-[76px]"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">

        {/* Section Heading */}
        <div className="text-center mb-4">

          <span className="text-[10px] md:text-xs tracking-[0.3em] font-semibold text-purple-400 uppercase">
            Get To Know Me
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-1">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-2" />

        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-3 md:gap-4 items-stretch">

          {/* Left: About Content */}
          <div className="relative group">

            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-purple-500/40 via-blue-500/10 to-cyan-400/30 opacity-70 group-hover:opacity-100 transition duration-500" />

            <div className="relative h-full rounded-3xl border border-white/10 bg-[#10101d]/95 backdrop-blur-xl p-4 md:p-5 flex flex-col justify-center">

              {/* Card Heading */}
              <div className="flex items-center gap-3 mb-3">

                <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-400/20 flex items-center justify-center text-purple-300 text-lg shrink-0">
                  ✦
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white">
                  Who I Am
                </h3>

              </div>

              {/* Description */}
              <p className="text-gray-300 text-[13px] md:text-sm leading-[1.6]">
                I am{" "}
                <span className="text-purple-300 font-semibold">
                  {personal?.name || "Tahmid Anjum Mozumder"}
                </span>
                , a{" "}
                <span className="text-cyan-300 font-semibold">
                  {personal?.title || "Computer Engineer"}
                </span>{" "}
                passionate about building intelligent systems using Artificial Intelligence,
                Machine Learning, and modern software technologies.
              </p>

              <p className="text-gray-400 text-[13px] md:text-sm leading-[1.6] mt-3">
                My interests include Machine Learning, Deep Learning,
                Computer Vision, and developing AI-based solutions
                for real-world engineering problems.
              </p>

              <p className="text-gray-400 text-[13px] md:text-sm leading-[1.6] mt-3">
                I enjoy designing data-driven systems, exploring
                research ideas, and building scalable software
                applications.
              </p>

              {/* Social and CV Links */}
              <div className="flex flex-wrap gap-2 mt-4">

                <a
                  href={cvLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs md:text-sm font-semibold hover:from-purple-500 hover:to-cyan-500 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-purple-500/20"
                >
                  ↓ Download CV
                </a>

                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl border border-white/15 bg-white/[0.04] text-gray-300 text-xs md:text-sm font-semibold hover:border-purple-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  GitHub ↗
                </a>

                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl border border-white/15 bg-white/[0.04] text-gray-300 text-xs md:text-sm font-semibold hover:border-cyan-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  LinkedIn ↗
                </a>

              </div>

            </div>
          </div>

          {/* Right: Information Cards */}
          <div className="grid grid-rows-3 gap-2.5">

            {/* Research Interest */}
            <div className="group relative overflow-hidden rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/[0.12] to-[#10101d] p-3.5 hover:border-purple-400/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">

              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-purple-500/10 blur-2xl group-hover:bg-purple-500/20 transition-all" />

              <div className="relative">

                <div className="flex items-center gap-2.5 mb-2">

                  <div className="w-8 h-8 rounded-xl bg-purple-500/15 flex items-center justify-center text-base shrink-0">
                    ◈
                  </div>

                  <h3 className="text-base font-bold text-purple-300">
                    Research Interest
                  </h3>

                </div>

                <p className="text-gray-300 text-xs md:text-[13px] leading-relaxed">
                  Security and Privacy, Machine Learning,
                  Deep Learning, Computer Vision
                </p>

              </div>
            </div>

            {/* Current Focus */}
            <div className="group relative overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.12] to-[#10101d] p-3.5 hover:border-blue-400/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">

              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20 transition-all" />

              <div className="relative">

                <div className="flex items-center gap-2.5 mb-2">

                  <div className="w-8 h-8 rounded-xl bg-blue-500/15 flex items-center justify-center text-base shrink-0">
                    ◎
                  </div>

                  <h3 className="text-base font-bold text-blue-300">
                    Current Focus
                  </h3>

                </div>

                <p className="text-gray-300 text-xs md:text-[13px] leading-relaxed">
                  Developing intelligent systems and
                  AI-driven applications.
                </p>

              </div>
            </div>

            {/* Technologies */}
            <div className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/[0.12] to-[#10101d] p-3.5 hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">

              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-all" />

              <div className="relative">

                <div className="flex items-center gap-2.5 mb-2">

                  <div className="w-8 h-8 rounded-xl bg-cyan-500/15 flex items-center justify-center text-base shrink-0">
                    ⌘
                  </div>

                  <h3 className="text-base font-bold text-cyan-300">
                    Technologies
                  </h3>

                </div>

                <p className="text-gray-300 text-xs md:text-[13px] leading-relaxed">
                  Python, Java, React, Spring Boot,
                  SQL, TensorFlow, PyTorch
                </p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
