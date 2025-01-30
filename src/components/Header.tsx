import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import data from '@/data/data.json';

export default function Header() {
  const { socialLinks } = data.personalInfo;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg">
      <nav className="container mx-auto px-6 py-4 animate-fadeIn">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold dark:text-white">
            Portfolio
          </Link>
          <div className="flex items-center space-x-6">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              <FaGithub className="text-xl" />
              <span className="hidden md:inline">GitHub</span>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              <FaLinkedin className="text-xl" />
              <span className="hidden md:inline">LinkedIn</span>
            </a>
            <a
              href={`mailto:${data.personalInfo.email}`}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}