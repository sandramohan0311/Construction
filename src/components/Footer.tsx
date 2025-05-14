import Logo from "@/assets/icon/con_logo.png";
// import Threads from "@/assets/icons/threads.svg";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const resetLaunchExperience = (): void => {
    localStorage.removeItem("launchExperienceCompleted");
    window.location.href = "/?launch=true"; // use href instead of assignment
  };

  return (
    <div className="lg:h-[440px] h-auto w-full flex flex-col justify-center items-center lg:px-20 px-6 bg-[#F4F5F9]">
      <div className="lg:h-[300px] h-auto w-full flex lg:flex-row lg:justify-between flex-col lg:gap-0 gap-4 lg:py-0 py-3">
        <div className="h-full md:w-[320px] flex flex-col gap-3">
          <img className="h-[70px] w-auto" src={Logo} alt="Kalari Logo" />
          <p className="w-full text-4 text-[#000000] font-normal ">
          Preserving and promoting the ancient Indian martial art form of Kalaripayattu through authentic training, cultural events, and educational programs.
          </p>
          <div className="h-auto w-auto flex gap-3">
            {/* Facebook */}
            <div className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition duration-300">
              <a
                href="https://facebook.com/kadathanattankam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook color="white" />
              </a>
            </div>

            {/* Instagram */}
            <div className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 transition duration-300">
              <a
                href="https://instagram.com/kadathanattankam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram color="white" />
              </a>
            </div>

            {/* YouTube */}
            <div className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition duration-300">
              <a
                href="https://youtube.com/@kadathanattankam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube color="white" />
              </a>
            </div>

            {/* Threads */}
            {/* <div className="p-2 rounded-full bg-gray-800 hover:bg-white group transition duration-300 cursor-pointer">
              <a
                href="https://threads.net/@kadathanattankam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Threads} className="w-6 group-hover:invert" alt="Threads" />
              </a>
            </div> */}
          </div>
        </div>

        <div className="h-full w-auto flex flex-col gap-2">
          <p className="text-5 font-bold text-[#000000]">Quick Links</p>
          <div className="h-auto w-auto flex flex-col gap-3 text-4 font-regular text-[#000000]">
            <Link to="/" className="transition transform hover:scale-110 duration-300">Home</Link>
            <Link to="#" className="transition transform hover:scale-110 duration-300">About</Link>
            <Link to="/gallery" className="transition transform hover:scale-110 duration-300">Gallery</Link>
            <Link to="#" className="transition transform hover:scale-110 duration-300">Service</Link>
            <Link to="/project" className="transition transform hover:scale-110 duration-300">Project</Link>
            <Link to="contact" className="transition transform hover:scale-110 duration-300">Contact</Link>

          </div>
        </div>

        <div className="h-full w-auto flex flex-col gap-4">
          <p className="text-5 font-bold text-[#000000]">Contact Us</p>
          <div className="h-auto w-[219px] flex flex-col gap-4 text-4 font-regular text-[#000000]">
            <p>Office No. 33-308,
              owned by Bakhit Mohammed Yaqoub 
              - Deira - Al Qusais 2
              Office 308 - Al Qusais 2</p>
            <p>info@domain.org</p>
          </div>
        </div>
      </div>

      <div className="lg:h-[42px] h-auto w-full border-t-2 flex lg:flex-row lg:justify-between flex-col items-center gap-6 py-4 text-[#000000] text-3 font-normal mt-10">
        <div className="h-auto">
          <p onClick={resetLaunchExperience} className="cursor-pointer">
          © 2025 ZAYED ZIDIQI CONSTRUCTION CO.LLC,
          </p>
        </div>
        <div className="h-auto w-auto flex lg:gap-2 gap-3">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
