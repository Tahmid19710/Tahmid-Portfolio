
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

  return (
    <section
      id="education"
      className="min-h-screen px-8 py-20 bg-[#09090f]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-400 text-center mb-12">
          Education
        </h2>

        <div className="border-l border-purple-500 space-y-10 ml-5">
          {education.map((item) => (
            <div
              key={item.id ?? item.degree}
              className="ml-8 bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="w-4 h-4 bg-purple-500 rounded-full -ml-11 mb-4" />

              <h3 className="text-2xl font-bold text-white">
                {item.degree}
              </h3>

              <h4 className="text-purple-400 mt-2">
                {item.institution}
              </h4>

              {item.duration && (
                <p className="text-gray-400 mt-2">{item.duration}</p>
              )}

              {item.description && (
                <p className="text-gray-300 mt-4">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
