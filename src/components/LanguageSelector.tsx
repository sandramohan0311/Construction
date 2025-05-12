import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext"; // adjust path as needed

const LanguageSelector = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { language, setLanguage } = useLanguage();

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const selectLanguage = (lang: "en" | "ar") => {
    setLanguage(lang);
    setShowDropdown(false);
  };

  // Determine flag image source
  const flagSrc = language === "en" ? "/en.png" : "/ar.png"; // assuming images are in public/

  return (
    <div className="relative">
      <div
        className="h-8 w-28 rounded-4xl bg-white flex items-center justify-center gap-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="h-6 w-6 rounded-full overflow-hidden">
          <img src={flagSrc} alt="flag" className="h-full w-full object-cover" />
        </div>
        <div className="text-md font-bold uppercase">{language}</div>
        <div className="h-full w-auto flex items-center">
          <ChevronDown />
        </div>
      </div>

      {showDropdown && (
        <div className="absolute top-12 left-0 w-36 bg-white border rounded-lg shadow-md z-10">
          <div
            onClick={() => selectLanguage("en")}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
          >
            <img src="/en.png" alt="English" className="h-4 w-4" />
            English
          </div>
          <div
            onClick={() => selectLanguage("ar")}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
          >
            <img src="/ar.png" alt="Arabic" className="h-4 w-4" />
            العربية
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
