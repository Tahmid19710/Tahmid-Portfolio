
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-8 pt-20 bg-[#09090f]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-purple-400 text-xl mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Tahmid Anjum Mozumder
          </h1>

          <h2 className="text-2xl md:text-3xl text-purple-400 mt-4">
            Full Stack Developer | AI & Machine Learning Enthusiast
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-xl">
            Computer Science and Engineering graduate passionate
            about building intelligent systems, machine learning
            applications, and modern web software.
          </p>

          <div className="flex flex-wrap gap-5 mt-8">
            <a
              href="#projects"
              className="bg-purple-600 px-8 py-3 rounded-full text-white hover:bg-purple-700"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="border border-gray-500 px-8 py-3 rounded-full text-white hover:bg-white hover:text-black"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border border-purple-500 bg-purple-600/20 flex items-center justify-center">
            <img
              src="/images/profile.jpeg"
              alt="Tahmid Anjum Mozumder"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
