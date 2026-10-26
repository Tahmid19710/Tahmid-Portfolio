
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

function Skills() {
  const [skills, setSkills] = useState(FALLBACK_SKILLS);

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
        console.warn("Skills API unavailable; using local data.", error);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen px-8 py-20 bg-[#09090f] text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-400 text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id ?? skill.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold">
                {skill.name}
              </h3>

              {skill.percentage != null && (
                <>
                  <div className="flex justify-between mt-4 mb-3">
                    <span className="text-gray-400 text-sm">
                      Proficiency
                    </span>
                    <span className="text-purple-400">
                      {skill.percentage}%
                    </span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-purple-500 h-3 rounded-full"
                      style={{
                        width: `${Math.min(
                          100,
                          Math.max(0, Number(skill.percentage) || 0)
                        )}%`
                      }}
                    />
                  </div>
                </>
              )}

              <p className="text-gray-400 mt-3">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
