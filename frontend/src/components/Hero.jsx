
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 py-24 bg-[#09090f]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-purple-400 text-xl mb-4">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Tahmid Anjum Mozumder
          </h1>

          <h2 className="text-2xl md:text-3xl text-purple-400 mt-5">
            Full Stack Developer
          </h2>

          <p className="text-lg text-gray-300 mt-3">
            AI & Machine Learning Enthusiast
          </p>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            I build modern web applications, REST APIs, and
            database-driven systems. My interests include
            machine learning, deep learning, and intelligent
            software solutions.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="bg-purple-600 px-7 py-3 rounded-full text-white hover:bg-purple-700"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-gray-500 px-7 py-3 rounded-full text-white hover:bg-white hover:text-black"
            >
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap gap-5 mt-7">
            <a
              href="https://github.com/Tahmid19710"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-purple-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/tahmid-anjum-mozumder/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-purple-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-lg shadow-purple-500/20">
            <img
              src="/images/profile.jpeg"
              alt="Tahmid Anjum Mozumder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
