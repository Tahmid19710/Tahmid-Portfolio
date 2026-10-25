
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-10 py-24 bg-[#09090f]"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
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

          <p className="text-gray-400 text-lg mt-6 leading-relaxed max-w-2xl">
            I build modern web applications, REST APIs, and
            database-driven solutions. My interests include
            machine learning, deep learning, and intelligent
            software systems.
          </p>

          {/* Buttons and Social Links in One Row */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-3 mt-8">

            <a
              href="#projects"
              className="shrink-0 bg-purple-600 px-5 py-3 rounded-full text-white hover:bg-purple-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="shrink-0 border border-gray-500 px-5 py-3 rounded-full text-white hover:bg-white hover:text-black transition"
            >
              Get In Touch
            </a>

            <a
              href="https://github.com/Tahmid19710"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="shrink-0 text-white hover:text-purple-400 transition whitespace-nowrap"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/tahmid-anjum-mozumder/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="shrink-0 text-white hover:text-purple-400 transition whitespace-nowrap"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:tahmid19710@gmail.com"
              aria-label="Send Email"
              className="shrink-0 text-white hover:text-purple-400 transition whitespace-nowrap"
            >
              Gmail ✉
            </a>

          </div>
        </div>

        {/* Right Profile Image */}
        <div className="flex justify-center items-center">
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
