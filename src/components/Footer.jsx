import myimg from "../../public/assets/home-img/my.png";

export default function Footer() {
  return (
    <footer className="bg-[#04041e] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Address */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="animate-spin">💫</span> APNA MANUU
          </h2>
          <p className="text-gray-400">
            Maulana Azad National Urdu University <br /> Hyderabad
          </p>
          <div className="flex items-center gap-4 mt-4">
            <img
              src={myimg}
              alt="sam"
              className="w-12 h-12 rounded-full border-2 border-gray-400 shadow-lg"
            />
            <p className="text-gray-400">© 2025 Samir Khan. All rights reserved</p>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3 border-b pb-2 border-gray-700">
            Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">
                Members
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">
                Events
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-xl font-semibold mb-3 border-b pb-2 border-gray-700">
            Connect
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/in/samirkhan0091/"
                className="hover:text-blue-400 transition duration-300 flex items-center gap-2"
              >
                <span className="animate-pulse">🔗</span> LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300 flex items-center gap-2">
                <span className="animate-pulse">🐦</span> Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300 flex items-center gap-2">
                <span className="animate-pulse">👨‍💻</span> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 mt-6 text-sm">
        Made with ❤️ by Samir Khan
      </div>
    </footer>
  );
}
