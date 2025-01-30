import data from "@/data/data.json";

export default function Hero() {
  const { name, title, description } = data.personalInfo;

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
              Hi, I&apos;m <span className="text-blue-500">{name}</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-blue-400 mb-6">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              {description}
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-lg"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-colors text-lg"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="w-64 h-64 md:w-96 md:h-96 relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src="/Sarthak-Bhadiyadra.png"
              alt={name}
              className="w-full h-full object-cover rounded-full border-4 border-blue-500 relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
