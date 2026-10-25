
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-5 md:px-8 py-20 bg-[#09090f]"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Hero Content */}
        <div>
          <p className="text-purple-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Tahmid Anjum Mozumder
          </h1>

          <h2 className="text-2xl md:text-3xl text-purple-400 mt-4">
            Full Stack Developer
          </h2>

          <p className="text-lg text-gray-200 mt-3">
            AI &amp; Machine Learning Enthusiast
          </p>

          <p className="text-gray-400 text-base md:text-lg mt-6 leading-relaxed max-w-2xl">
            I build modern web applications, REST APIs, and
            database-driven solutions. My interests include
            machine learning, deep learning, and intelligent
            software systems.
          </p>

          {/* Action Buttons and Social Links */}
          <div className="flex flex-wrap items-center gap-2 mt-8">

            {/* View Projects */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-3 transition-colors"
            >
              View Projects
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-gray-500 hover:border-purple-400 hover:text-purple-400 text-white text-sm font-medium px-4 py-3 transition-colors"
            >
              Get In Touch
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Tahmid19710"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-gray-600 hover:border-purple-400 hover:text-purple-400 text-white text-sm px-3 py-3 transition-colors"
            >
              GitHub ↗
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tahmid-anjum-mozumder/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-gray-600 hover:border-purple-400 hover:text-purple-400 text-white text-sm px-3 py-3 transition-colors"
            >
              LinkedIn ↗
            </a>

            {/* Gmail */}
            <a
              href="mailto:tahmid19710@gmail.com"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-gray-600 hover:border-purple-400 hover:text-purple-400 text-white text-sm px-3 py-3 transition-colors"
            >
              Gmail ✉
            </a>

            {/* Download CV */}
            <a
              href="https://drive.google.com/uc?export=download&id=1PYMC9ircpw3MRzUKHw45bStPk9bWNpks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white text-sm font-medium px-3 py-3 transition-colors"
            >
              Download CV ↓
            </a>

          </div>
        </div>

        {/* Profile Image */}
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
