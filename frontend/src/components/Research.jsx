
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
    icon: "📄"
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
    icon: "🧠"
  }
];

function Research() {
  return (
    <section
      id="research"
      className="min-h-screen px-5 sm:px-8 py-20 bg-[#09090f] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Research & Innovation
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Research
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-7">
            Exploring intelligent systems through machine learning,
            deep learning, blockchain technology, and applied AI research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {researchItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col h-full bg-white/[0.035] border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-purple-500/60 hover:bg-white/[0.055] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <span className="text-3xl" aria-hidden="true">
                  {item.icon}
                </span>

                <span className="text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1.5">
                  {item.type}
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-3">
                {item.date}
              </p>

              <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                >
                  {item.title}
                </a>
              </h3>

              <p className="text-gray-400 leading-7 text-sm sm:text-base">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-xs px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-5 text-sm text-gray-300 border-l-2 border-purple-500 pl-3">
                {item.result}
              </div>

              <div className="mt-auto pt-7">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#09090f]"
                >
                  {item.buttonText}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
