
import { useEffect, useState } from "react";

const GITHUB_REPOSITORIES =
  "https://github.com/Tahmid19710?tab=repositories";

const PROJECTS = [
  {
    id: "share-bond",
    title: "Share and Bond Management System",
    description:
      "A Java Spring Boot application for managing share and bond records, with structured data management and secure access controls.",
    images: [
      "SB1.jpeg", "SB2.jpeg", "SB3.jpeg", "SB4.jpeg",
      "SB5.jpeg", "SB6.jpeg", "SB7.jpeg", "SB8.jpeg"
    ],
    technologies: [
      "Java", "Spring Boot", "Spring Security", "Thymeleaf", "MySQL"
    ],
    githubLink:
      "https://github.com/Tahmid19710/Share-and-bond-Management-System",
    githubLabel: "GitHub",
    demoLink: ""
  },

  {
    id: "supportflow",
    title: "SupportFlow - Support Ticket Management System",
    description:
      "A role-based support ticket management system featuring secure authentication, ticket creation, priority management, and an admin workflow.",
    images: [
      "SupportFlow1.jpeg",
      "SupportFlow2.jpeg",
      "SupportFlow3.jpeg",
      "SupportFlow4.jpeg",
      "SupportFlow5.jpeg",
      "SupportFlow6.jpeg"
    ],
    technologies: [
      "Java 21", "Spring Boot 3", "Spring Security",
      "Thymeleaf", "PostgreSQL"
    ],
    githubLink: "https://github.com/Tahmid19710/SupportFlow",
    githubLabel: "GitHub",
    demoLink: ""
  },

  {
    id: "ai-climate",
    title: "AI Climate Disaster Early Warning System",
    description:
      "An AI-based early warning system that combines satellite image analysis and climate risk factors to estimate flood risk.",
    images: [
      "flood1.png", "flood2.png", "flood3.png",
      "flood4.png", "flood5.png", "flood6.png"
    ],
    technologies: [
      "Python", "Machine Learning",
      "Satellite Image Analysis", "Climate Risk Analysis"
    ],
    githubLink: GITHUB_REPOSITORIES,
    githubLabel: "GitHub Repositories",
    demoLink: ""
  },

  {
    id: "car-rental",
    title: "Car Rental Management System",
    description:
      "A car rental website featuring premium cars, easy booking, and secure payment options.",
    images: [
      "car1.jpeg", "car2.jpeg", "car3.jpeg", "car4.jpeg"
    ],
    technologies: [
      "Java", "Spring Boot", "MySQL", "HTML", "CSS"
    ],
    githubLink: GITHUB_REPOSITORIES,
    githubLabel: "GitHub Repositories",
    demoLink: ""
  },

  {
    id: "loan-approval",
    title: "Loan Approval System",
    description:
      "A loan approval application that collects applicant information, including age, income, credit score, work experience, and dependents.",
    images: [
      "loan1.jpeg", "loan2.jpeg", "loan3.jpeg"
    ],
    technologies: [
      "Python", "Machine Learning", "Pandas", "Scikit-learn"
    ],
    githubLink: GITHUB_REPOSITORIES,
    githubLabel: "GitHub Repositories",
    demoLink: ""
  }
];

function Projects() {
  const [currentImage, setCurrentImage] = useState({});

  // Automatic image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) => {
        const updated = { ...previous };

        PROJECTS.forEach((project) => {
          if (project.images.length > 1) {
            updated[project.id] =
              ((previous[project.id] || 0) + 1) %
              project.images.length;
          }
        });

        return updated;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = (id, total) => {
    setCurrentImage((previous) => ({
      ...previous,
      [id]: ((previous[id] || 0) + 1) % total
    }));
  };

  const previousImage = (id, total) => {
    setCurrentImage((previous) => ({
      ...previous,
      [id]: ((previous[id] || 0) - 1 + total) % total
    }));
  };

  const selectImage = (id, index) => {
    setCurrentImage((previous) => ({
      ...previous,
      [id]: index
    }));
  };

  return (
    <>
      <style>{`
        @keyframes projectEnter {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes projectImageIn {
          from {
            opacity: .5;
            transform: scale(1.035);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes projectBorder {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes projectGlow {
          0%, 100% { opacity: .2; }
          50% { opacity: .65; }
        }

        @keyframes projectShine {
          from { transform: translateX(-150%) skewX(-20deg); }
          to { transform: translateX(250%) skewX(-20deg); }
        }

        .project-enter {
          animation: projectEnter .7s cubic-bezier(.2,.8,.2,1) both;
        }

        .project-image-in {
          animation: projectImageIn .55s ease-out both;
        }

        .project-border {
          background-size: 200% 200%;
          animation: projectBorder 7s linear infinite;
        }

        .project-glow {
          animation: projectGlow 5s ease-in-out infinite;
        }

        .project-card {
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(139,92,246,.14);
        }

        .project-card:hover .project-preview {
          transform: scale(1.055);
        }

        .project-preview {
          transition: transform .7s cubic-bezier(.2,.8,.2,1);
        }

        .project-button {
          position: relative;
          overflow: hidden;
        }

        .project-button::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 45%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.25),
            transparent
          );
        }

        .project-button:hover::after {
          animation: projectShine .8s ease;
        }

        .project-tech {
          transition: all .25s ease;
        }

        .project-tech:hover {
          transform: translateY(-2px);
          border-color: rgba(34,211,238,.5);
        }

        @media (prefers-reduced-motion: reduce) {
          .project-enter,
          .project-image-in,
          .project-border,
          .project-glow {
            animation: none !important;
          }

          .project-card,
          .project-preview,
          .project-tech {
            transition: none !important;
          }
        }
      `}</style>

      <section
        id="projects"
        className="relative min-h-[calc(100svh-76px)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-3 pb-3 bg-[#080812] text-white overflow-hidden scroll-mt-[76px]"
      >

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="project-glow absolute top-0 left-0 w-72 h-72 rounded-full bg-purple-600/10 blur-[100px]" />

          <div className="project-glow absolute bottom-0 right-0 w-72 h-72 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 rounded-full bg-purple-400/60" />

          <div className="absolute bottom-[20%] left-[10%] w-1.5 h-1.5 rounded-full bg-cyan-400/60" />

        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto">

          {/* Heading */}
          <div className="project-enter text-center mb-4">

            <span className="text-[9px] md:text-[10px] tracking-[0.3em] font-bold text-purple-400 uppercase">
              What I Have Built
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-1">
              My{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <div className="w-14 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-2" />

            <p className="text-gray-400 text-[10px] md:text-xs mt-2">
              Exploring ideas and building practical solutions.
            </p>

          </div>

          {/* Three Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">

            {PROJECTS.map((project, projectIndex) => {

              const imageIndex = currentImage[project.id] || 0;
              const image = project.images[imageIndex];

              const tagColors = [
                "bg-purple-500/10 border-purple-400/25 text-purple-300",
                "bg-blue-500/10 border-blue-400/25 text-blue-300",
                "bg-cyan-500/10 border-cyan-400/25 text-cyan-300",
                "bg-pink-500/10 border-pink-400/25 text-pink-300"
              ];

              return (

                <article
                  key={project.id}
                  style={{
                    animationDelay: `${projectIndex * 110}ms`
                  }}
                  className="project-enter project-card project-border relative rounded-xl p-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 flex flex-col"
                >

                  <div className="relative flex flex-col flex-1 rounded-xl overflow-hidden bg-[#10101d] group">

                    {/* Image Preview */}
                    <div className="relative h-28 sm:h-28 lg:h-[112px] bg-[#080812] overflow-hidden flex items-center justify-center shrink-0">

                      <img
                        key={`${project.id}-${imageIndex}`}
                        src={`/images/${image}`}
                        alt={`${project.title} screenshot ${imageIndex + 1}`}
                        loading={projectIndex < 3 ? "eager" : "lazy"}
                        decoding="async"
                        className="project-image-in project-preview w-full h-full object-contain"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#10101d]/50 to-transparent pointer-events-none" />

                      {/* Preview Badge */}
                      <span className="absolute top-2 left-2 px-2 py-1 rounded-full bg-black/75 border border-white/10 text-[8px] tracking-wider text-gray-200">
                        PREVIEW
                      </span>

                      {/* Image Controls */}
                      {project.images.length > 1 && (
                        <>

                          <button
                            type="button"
                            onClick={() =>
                              previousImage(project.id, project.images.length)
                            }
                            aria-label={`Previous image for ${project.title}`}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/80 text-white text-xs hover:bg-purple-600 hover:scale-110 transition-all"
                          >
                            ❮
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              nextImage(project.id, project.images.length)
                            }
                            aria-label={`Next image for ${project.title}`}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/80 text-white text-xs hover:bg-cyan-600 hover:scale-110 transition-all"
                          >
                            ❯
                          </button>

                          <span className="absolute bottom-2 right-2 bg-black/75 text-white text-[8px] px-2 py-1 rounded-full">
                            {imageIndex + 1}/{project.images.length}
                          </span>

                          {/* Slider Dots */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">

                            {project.images.map((_, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={() => selectImage(project.id, index)}
                                aria-label={`Show image ${index + 1}`}
                                aria-pressed={imageIndex === index}
                                className={`h-1 rounded-full transition-all ${
                                  imageIndex === index
                                    ? "w-4 bg-cyan-400"
                                    : "w-1 bg-white/60"
                                }`}
                              />
                            ))}

                          </div>

                        </>
                      )}

                    </div>

                    {/* Project Information */}
                    <div className="relative p-3 sm:p-3.5 flex flex-col flex-1">

                      {/* Number */}
                      <div className="flex items-center gap-2 mb-1.5">

                        <span className="text-[8px] tracking-[0.2em] font-bold text-purple-400">
                          PROJECT {String(projectIndex + 1).padStart(2, "0")}
                        </span>

                        <div className="h-px flex-1 bg-gradient-to-r from-purple-500/40 to-transparent" />

                      </div>

                      {/* Title */}
                      <h3 className="text-sm md:text-[15px] font-bold leading-snug text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="project-description text-gray-400 text-[10px] md:text-[11px] leading-[1.6] mt-1.5">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mt-2.5">

                        {project.technologies.map((technology, index) => (
                          <span
                            key={technology}
                            className={`project-tech px-2 py-1 rounded-full border text-[8px] font-medium ${
                              tagColors[index % tagColors.length]
                            }`}
                          >
                            {technology}
                          </span>
                        ))}

                      </div>

                      {/* GitHub and Demo Links */}
                      <div className="flex flex-wrap gap-2 mt-auto pt-3">

                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-button inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-cyan-500 text-white text-[10px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                        >
                          {project.githubLabel}
                          <span aria-hidden="true">↗</span>
                        </a>

                        {project.demoLink && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-white/15 text-white text-[10px] font-semibold hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
                          >
                            Live Demo ↗
                          </a>
                        )}

                      </div>

                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 opacity-50" />

                  </div>

                </article>

              );
            })}

          </div>

          {/* Footer */}
          <div className="text-center mt-3">

            <div className="inline-flex items-center gap-2 text-gray-500 text-[8px] tracking-[0.25em] uppercase">

              <span className="w-6 h-px bg-purple-500/50" />

              Built With Passion

              <span className="w-6 h-px bg-cyan-500/50" />

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Projects;
