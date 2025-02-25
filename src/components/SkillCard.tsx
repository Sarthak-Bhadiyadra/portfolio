import { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaHubspot,
  FaSalesforce,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiGraphql,
  SiPostman,
  SiVercel,
  SiNextdotjs,
  SiJavascript,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

const iconMap: { [key: string]: IconType } = {
  ReactJS: FaReact,
  NodeJS: FaNodeJs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  NextJS: SiNextdotjs,
  HTML: FaHtml5,
  CSS: FaCss3,
  ExpressJS: SiExpress,
  HubSpot: FaHubspot,
  Salesforce: FaSalesforce,
  Git: FaGitAlt,
  "AWS Lambda": FaAws,
  SQS: FaAws,
  "API Gateway": FaAws,
  EC2: FaAws,
  "Serverless Architecture": FaAws,
  Supabase: SiVercel,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
};

interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-semibold mb-6 capitalize dark:text-gray-200">
        {category}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill) => {
          const Icon = iconMap[skill] || null;
          return (
            <div
              key={skill}
              className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
            >
              {Icon && <Icon className="text-blue-500 text-xl" />}
              <span className="text-gray-800 dark:text-gray-200">{skill}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
