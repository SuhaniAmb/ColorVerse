import { IoColorPalette } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <IoColorPalette
                className="text-purple-600"
                size={36}
              />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                ColorVerse
              </h2>
            </div>

            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">
              Discover beautiful color palettes for your next design.
              Explore, copy, and save your favourite colors with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li
                onClick={() => navigate("/")}
                className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-purple-600 transition"
              >
                Home
              </li>

              <li
                onClick={() => navigate("/categories")}
                className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-purple-600 transition"
              >
                Palettes
              </li>

              <li
                onClick={() => navigate("/favorites")}
                className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-purple-600 transition"
              >
                Favorites
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Connect
            </h3>

            <div className="flex gap-5">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
              >
                <FaGithub size={28} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition"
              >
                <FaLinkedin size={28} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2026 ColorVerse. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            Made with
            <FaHeart className="text-red-500" />
            using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;