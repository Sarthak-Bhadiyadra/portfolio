import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import data from "@/data/data.json";

export default function Contact() {
  const { email, location, socialLinks } = data.personalInfo;

  return (
    <section id="contact" className="py-16 px-6 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center !bg-transparent">
            <img
              src="contact-us.png" // Replace with your own image URL
              alt="Contact Image"
              className=" transform hover:scale-105 transition-all duration-300 "
            />
          </div>
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/10 p-3 rounded-full">
                  <FaEnvelope className="text-2xl text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-white mb-1">
                    Email
                  </h3>
                  <a
                    href={`mailto:${email}`}
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/10 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-2xl text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-white mb-1">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{location}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-lg font-semibold dark:text-white mb-4">
                Connect with me
              </h3>
              <div className="flex gap-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-600 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-600 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                {/* <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-600 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  <FaTwitter className="text-2xl" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
