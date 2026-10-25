
import { useEffect, useState } from "react";

const projectData = [
  {
    id: 1,
    title: "Car Rental Management System",
    description:
      "A car rental website featuring premium cars, easy booking, and secure payment options.",
    technology: "",
    githubLink: "",
    demoLink: "",
    images: [
      "car1.jpeg",
      "car2.jpeg",
      "car3.jpeg",
      "car4.jpeg",
    ],
  },
  {
    id: 2,
    title: "AI Climate Disaster Early Warning System",
    description:
      "An AI-based early warning system that combines satellite image analysis and climate risk factors to estimate flood risk.",
    technology: "",
    githubLink: "",
    demoLink: "",
    images: [
      "flood1.png",
      "flood2.png",
      "flood3.png",
      "flood4.png",
      "flood5.png",
      "flood6.png",
    ],
  },
  {
    id: 3,
    title: "Loan Approval System",
    description:
      "A loan approval application that collects applicant information, including age, income, credit score, work experience, and dependents.",
    technology: "",
    githubLink: "",
    demoLink: "",
    images: [
      "loan1.jpeg",
      "loan2.jpeg",
      "loan3.jpeg",
    ],
  },
  {
    id: 4,
    title: "SupportFlow - Support Ticket Management System",
    description:
      "A Spring Boot web application where customers can create support tickets, track status and priority, and communicate with administrators. Admins can review tickets, update statuses, and reply to customer messages.",
    technology:
      "Java, Spring Boot, Spring Security, Spring Data JPA, Hibernate, PostgreSQL, Thymeleaf, HTML5, CSS3, Maven",
    githubLink:
      "https://github.com/Tahmid19710/SupportFlow",
    demoLink: "",
    images: [
      "SupportFlow1.jpeg",
      "SupportFlow2.jpeg",
      "SupportFlow3.jpeg",
      "SupportFlow4.jpeg",
      "SupportFlow5.jpeg",
      "SupportFlow6.jpeg",
    ],
  },
  {
    id: 5,
    title: "Share and Bond Management System",
    description:
      "A Spring Boot-based shareholder management application featuring role-based access control and a Maker-Checker-Approver workflow for reviewing, approving, returning, and activating shareholder records.",
    technology:
      "Java, Spring Boot, Spring MVC, Spring Security, Spring Data JPA, Hibernate, Thymeleaf",
    githubLink:
      "https://github.com/Tahmid19710/Share-and-bond-Management-System",
    demoLink: "",
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
  },
];

function Projects() {
  const [currentImage, setCurrentImage] = useState({});

  // Automatically change project images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const updated = { ...prev };

        projectData.forEach((project) => {
          if (project.images.length > 1) {
            updated[project.id] =
              ((updated[project.id] || 0) + 1) %
              project.images.length;
          }
        });

        return updated;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = (id, total) => {
    setCurrentImage((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % total,
    }));
  };

  const previousImage = (id, total) => {
    setCurrentImage((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) - 1 + total) % total,
    }));
  };

  return (
    <section
      id="projects"
      className="min-h-screen px-8 py-20 bg-[#09090f]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((project) => {
            const imageIndex = currentImage[project.id] || 0;
            const image = project.images[imageIndex];

            return (
              <div
                key={project.id}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
              >
                <div className="h-72 bg-black relative flex items-center justify-center">
                  <img
                    src={`/images/${image}`}
                    alt={`${project.title} screenshot`}
                    loading={project.id <= 2 ? "lazy" : "eager"}
                    decoding="async"
                    className="w-full h-full object-contain"
                  />

                  {project.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        aria-label="Previous project image"
                        onClick={() =>
                          previousImage(project.id, project.images.length)
                        }
                        className="absolute left-3 bg-black/60 text-white px-3 py-2 rounded-full"
                      >
                        ❮
                      </button>

                      <button
                        type="button"
                        aria-label="Next project image"
                        onClick={() =>
                          nextImage(project.id, project.images.length)
                        }
                        className="absolute right-3 bg-black/60 text-white px-3 py-2 rounded-full"
                      >
                        ❯
                      </button>
                    </>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mt-3">
                    {project.description}
                  </p>

                  {project.technology && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technology
                        .split(",")
                        .map((tech) => tech.trim())
                        .map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4 mt-6">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-full bg-purple-600 text-white"
                      >
                        GitHub
                      </a>
                    )}

                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-full border border-white/30 text-white"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
