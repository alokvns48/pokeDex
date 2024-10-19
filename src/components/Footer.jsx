import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <p className="mb-4 text-lg font-semibold">Connect with me</p>
        
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/alokvns48"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </a>

          <a
            href="https://www.linkedin.com/in/alokpandey02/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="mt-4 text-gray-400 text-sm">
          © 2024 Alok Pandey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
