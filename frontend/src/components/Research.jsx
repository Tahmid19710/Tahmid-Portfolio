
import { useEffect, useState } from "react";
import API from "../services/api";

const FALLBACK_RESEARCH = [
  {
    id: "research-interest-1",
    title: "Research Interests",
    area: "Artificial Intelligence & Machine Learning",
    description:
      "Interested in intelligent software systems and practical applications of artificial intelligence, machine learning, and deep learning.",
    technology:
      "Artificial Intelligence, Machine Learning, Deep Learning",
    link: ""
  }
];

function Research() {
  const [research, setResearch] = useState(FALLBACK_RESEARCH);

  useEffect(() => {
    let active = true;

    API.get("/research")
      .then((response) => {
        const data = response.data;

        if (active && Array.isArray(data) && data.length > 0) {
          setResearch(data);
        }
      })
      .catch((error) => {
        console.warn("Research API unavailable; using local data.", error);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      id="research"
      className="min-h-screen px-8 py-20 bg-[#09090f]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">
          Research
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {research.map((item) => (
            <div
              key={item.id ?? item.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition duration-300"
            >
              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="text-purple-400 mt-3">{item.area}</p>

              <p className="text-gray-400 mt-4">{item.description}</p>

              {item.technology && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {item.technology.split(",").map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 text-sm"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              )}

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-2 rounded-full bg-purple-600 text-white"
                >
                  🔗 View Research
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
