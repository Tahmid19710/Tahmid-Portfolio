
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
      "SB1.jpeg",
      "SB2.jpeg",
      "SB3.jpeg",
      "SB4.jpeg",
      "SB5.jpeg",
      "SB6.jpeg",
      "SB7.jpeg",
      "SB8.jpeg",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Thymeleaf",
      "MySQL",
    ],
    githubLink:
      "https://github.com/Tahmid19710/Share-and-bond-Management-System",
    githubLabel: "GitHub",
    demoLink: "",
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
      "SupportFlow6.jpeg",
    ],
    technologies: [
      "Java 21",
      "Spring Boot 3",
      "Spring Security",
      "Thymeleaf",
      "PostgreSQL",
    ],
    githubLink: "https://github.com/Tahmid19710/SupportFlow",
    githubLabel: "GitHub",
    demoLink: "",
  },

  {
    id: "ai-climate",
    title: "AI Climate Disaster Early Warning System",
    description:
      "An AI-based early warning system that combines satellite image analysis and climate risk factors to estimate flood risk.",
    images: [
      "flood1.png",
      "flood2.png",
      "flood3.png",
      "flood4.png",
      "flood5.png",
      "flood6.png",
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Satellite Image Analysis",
      "Climate Risk Analysis",
    ],
    githubLink: GITHUB_REPOSITORIES,
    githubLabel: "GitHub Repositories",
    demoLink: "",
  },

  {
    id: "car-rental",
    title: "Car Rental Management System",
    description:
      "A car rental website featuring premium cars, easy booking, and secure payment options.",
    images: [
      "car1.jpeg",
      "car2.jpeg",
      "car3.jpeg",
      "car4.jpeg",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "HTML",
      "CSS",
    ],
    githubLink: GITHUB_REPOSITORIES,
    githubLabel: "GitHub Repositories",
    demoLink: "",
  },

  {
    id: "loan-approval",
    title: "Loan Approval System",
    description:
      "A loan approval application that collects applicant information, including age, income, credit score, work experience, and dependents.",
    images: [
      "loan1.jpeg",
      "loan2.jpeg",
      "loan3.jpeg",
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Pandas",
      "Scikit-learn",
    ],
    githubLink: GITHUB_REPOSITORIES,
    githubLabel: "GitHub Repositories",
    demoLink: "",
  },
];

function Projects() {
  const [currentImage, setCurrentImage] = useState({});

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
      [id]: ((previous[id] || 0) + 1) % total,
    }));
  };

  const previousImage = (id, total) => {
    setCurrentImage((previous) => ({
      ...previous,
      [id]: ((previous[id] || 0) - 1 + total) % total,
    }));
  };

  return (
    <section
      id="projects"
      className="min-h-screen px-4 sm:px-8 py-20 bg-[#09090f]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, projectIndex) => {
            const imageIndex = currentImage[project.id] || 0;
            const image = project.images[imageIndex];

            return (
              <article
                key={project.id}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/60 transition-colors duration-300"
              >
                {/* Project screenshots */}
                <div className="h-64 sm:h-72 bg-black relative flex items-center justify-center">
                  <img
                    src={`/images/${image}`}
                    alt={`${project.title} screenshot ${imageIndex + 1}`}
                    loading={projectIndex < 2 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-full object-contain"
                  />

                  {project.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          previousImage(
                            project.id,
                            project.images.length
                          )
                        }
                        aria-label={`Previous image for ${project.title}`}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-purple-600 text-white w-9 h-9 rounded-full transition-colors"
                      >
                        ❮
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          nextImage(
                            project.id,
                            project.images.length
                          )
                        }
                        aria-label={`Next image for ${project.title}`}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-purple-600 text-white w-9 h-9 rounded-full transition-colors"
                      >
                        ❯
                      </button>

                      <span className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-3 py-1 rounded-full">
                        {imageIndex + 1} / {project.images.length}
                      </span>
                    </>
                  )}
                </div>

                {/* Project information */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-6 mt-3">
                    {project.description}
                  </p>

                  {/* Technology badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="px-3 py-1 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs sm:text-sm"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Project links */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-colors"
                    >
                      {project.githubLabel}
                      <span aria-hidden="true">↗</span>
                    </a>

                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-purple-400 text-white text-sm font-medium transition-colors"
                      >
                        Live Demo
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
