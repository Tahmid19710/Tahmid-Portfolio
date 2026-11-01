
const researchItems = [
  {
    id: 1,
    type: "Research Paper / Preprint",
    date: "April 2026",
    title:
      "Bridging the Credit Gap: A Hybrid Decentralized Framework for Thin-File Borrowers using Stacking Ensembles and Blockchain Oracles",
    description:
      "A hybrid decentralized credit-scoring framework designed to help thin-file borrowers in Bangladesh. The research combines stacking ensemble machine learning, decentralized IPFS storage, Ethereum smart contracts, and a custom Node.js blockchain oracle.",
    technologies: [
      "Machine Learning",
      "Stacking Ensemble",
      "XGBoost",
      "Random Forest",
      "IPFS",
      "Ethereum",
      "Blockchain Oracles",
      "Explainable AI"
    ],
    result: "Reported AUC-ROC: 0.984",
    link:
      "https://www.researchgate.net/publication/404042294_Bridging_the_Credit_Gap_A_Hybrid_Decentralized_Framework_for_Thin-File_Borrowers_using_Stacking_Ensembles_and_Blockchain_Oracles",
    buttonText: "Read Research Paper",
    icon: "📄",
    accent: "purple"
  },
  {
    id: 2,
    type: "AI & Deep Learning Project",
    date: "Final Year Project",
    title:
      "Multimodal Emotion Recognition System: Facial and Speech-Based Emotion Recognition using Deep Learning",
    description:
      "A multimodal deep learning system that combines facial expressions and speech signals for emotion recognition. It integrates visual and audio feature representations through a two-branch architecture and multimodal fusion for final emotion classification.",
    technologies: [
      "Python",
      "PyTorch",
      "ResNet18",
      "LSTM",
      "OpenCV",
      "Librosa",
      "MediaPipe",
      "MTCNN",
      "Wav2Vec2",
      "Multimodal Learning"
    ],
    result:
      "Emotion categories: Happy, Sad, Angry, Neutral, Fear, Surprise",
    link:
      "https://www.linkedin.com/posts/tahmid-anjum-mozumder_multimodal-emotion-recognition-system-ugcPost-7507465589477576704-DgYZ/",
    buttonText: "View Project Showcase",
    icon: "🧠",
    accent: "cyan"
  }
];

function Research() {
  return (
    <>
      <style>{`
        @keyframes researchEnter {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes researchGlow {
          0%, 100% { opacity: .25; }
          50% { opacity: .65; }
        }

        .research-enter {
          animation: researchEnter .7s ease-out both;
        }

        .research-glow {
          animation: researchGlow 4s ease-in-out infinite;
        }

        .research-card {
          transition:
            transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .research-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(139,92,246,.12);
        }

        .research-tech {
          transition: all .25s ease;
        }

        .research-tech:hover {
          transform: translateY(-2px);
          border-color: rgba(34,211,238,.5);
        }

        .research-button {
          transition: all .3s ease;
        }

        .research-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(139,92,246,.2);
        }

        @media (prefers-reduced-motion: reduce) {
          .research-enter,
          .research-glow {
            animation: none !important;
          }
          .research-card,
          .research-tech,
          .research-button {
            transition: none !important;
          }
        }
      `}</style>

      <section
        id="research"
        className="relative min-h-[calc(100svh-76px)] flex items-center justify-center overflow-hidden bg-[#080812] text-white px-4 py-3 scroll-mt-[76px]"
      >

        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Wider Main Container */}
        <div className="relative z-10 max-w-7xl w-full mx-auto">

          {/* Heading */}
          <div className="text-center mb-4">

            <span className="text-[9px] tracking-[0.3em] font-bold text-purple-400 uppercase">
              Research & Innovation
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-1">
              Research{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                & Publications
              </span>
            </h2>

            <div className="w-14 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-2" />

            <p className="text-gray-400 text-[10px] md:text-xs mt-2 max-w-lg mx-auto">
              Exploring intelligent systems through machine learning,
              deep learning, blockchain technology, and applied AI research.
            </p>

          </div>

          {/* Research Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">

            {researchItems.map((item, index) => {
              const isPurple = item.accent === "purple";

              return (
                <article
                  key={item.id}
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                  className={`research-enter research-card group relative flex flex-col overflow-hidden rounded-xl border ${
                    isPurple
                      ? "border-purple-400/20"
                      : "border-cyan-400/20"
                  } bg-[#10101d]/95 p-3.5 sm:p-4`}
                >

                  {/* Card Glow */}
                  <div
                    className={`research-glow absolute -top-16 -right-10 w-40 h-40 rounded-full blur-[75px] pointer-events-none ${
                      isPurple
                        ? "bg-purple-500/15"
                        : "bg-cyan-500/15"
                    }`}
                  />

                  {/* Card Header */}
                  <div className="relative z-10 flex items-center justify-between gap-2 mb-2">

                    <div
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center text-base ${
                        isPurple
                          ? "bg-purple-500/10 border-purple-400/20"
                          : "bg-cyan-500/10 border-cyan-400/20"
                      }`}
                    >
                      {item.icon}
                    </div>

                    <span
                      className={`text-[8px] px-2 py-1 rounded-full border font-medium text-right ${
                        isPurple
                          ? "bg-purple-500/10 border-purple-400/20 text-purple-300"
                          : "bg-cyan-500/10 border-cyan-400/20 text-cyan-300"
                      }`}
                    >
                      {item.type}
                    </span>

                  </div>

                  {/* Date */}
                  <p className="relative z-10 text-[9px] text-gray-500 mb-1.5">
                    {item.date}
                  </p>

                  {/* Title */}
                  <h3 className="relative z-10 text-sm sm:text-base font-bold leading-snug text-white group-hover:text-purple-300 transition-colors duration-300">

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                    >
                      {item.title}
                    </a>

                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-gray-400 text-[10px] leading-[1.55] mt-2">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="relative z-10 mt-3">

                    <div className="flex items-center gap-1.5 mb-1.5">

                      <div
                        className={`w-1 h-3.5 rounded-full ${
                          isPurple
                            ? "bg-purple-400"
                            : "bg-cyan-400"
                        }`}
                      />

                      <h4 className="text-[10px] font-bold text-gray-200">
                        Technologies & Methods
                      </h4>

                    </div>

                    <div className="flex flex-wrap gap-1">

                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className={`research-tech px-1.5 py-1 rounded-md border text-[8px] font-medium ${
                            isPurple
                              ? "bg-purple-500/[0.08] border-purple-400/20 text-purple-200"
                              : "bg-cyan-500/[0.08] border-cyan-400/20 text-cyan-200"
                          }`}
                        >
                          {technology}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* Research Outcome */}
                  <div
                    className={`relative z-10 mt-3 rounded-lg border px-2.5 py-2 ${
                      isPurple
                        ? "bg-purple-500/[0.08] border-purple-400/20"
                        : "bg-cyan-500/[0.08] border-cyan-400/20"
                    }`}
                  >

                    <p className="text-[8px] uppercase tracking-wider text-gray-500 font-bold mb-0.5">
                      Key Research Outcome
                    </p>

                    <p
                      className={`text-[10px] font-semibold ${
                        isPurple
                          ? "text-purple-300"
                          : "text-cyan-300"
                      }`}
                    >
                      {item.result}
                    </p>

                  </div>

                  {/* Button */}
                  <div className="relative z-10 mt-auto pt-3">

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`research-button inline-flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg text-[10px] font-semibold text-white ${
                        isPurple
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-cyan-500"
                          : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500"
                      }`}
                    >
                      {item.buttonText}
                      <span aria-hidden="true">↗</span>
                    </a>

                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r ${
                      isPurple
                        ? "from-purple-500 via-blue-500 to-cyan-400"
                        : "from-blue-500 via-cyan-400 to-teal-300"
                    } opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                </article>
              );
            })}

          </div>

          {/* Footer */}
          <div className="text-center mt-3">

            <span className="text-[8px] tracking-[0.25em] text-gray-500 uppercase">
              Research • Innovation • Discovery
            </span>

          </div>

        </div>
      </section>
    </>
  );
}

export default Research;
