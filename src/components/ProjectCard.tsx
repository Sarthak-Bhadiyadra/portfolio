interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  index: number;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  index,
}: ProjectCardProps) {
  return (
    <div
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      {/* Project Image */}
      {/* {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )} */}
      <div className="relative p-6 h-full">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-500">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:text-white/90 transition-colors duration-500">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm group-hover:bg-white/20 group-hover:text-white transition-colors duration-500"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 group-hover:text-white transition-colors duration-500"
        >
          View Project
          <svg
            className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
