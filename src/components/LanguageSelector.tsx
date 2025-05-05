import { ChevronDown } from "lucide-react";
import { useState } from "react";

const LanguageSelector = () => {
  const [selectedLang, setSelectedLang] = useState("EN");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const selectLanguage = (lang) => {
    setSelectedLang(lang);
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <div
        className="h-8 w-28 rounded-4xl bg-white flex items-center justify-center gap-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="h-6 w-6 rounded-full bg-amber-500" />
        <div className="text-md font-bold">{selectedLang}</div>
        <div className="h-full w-auto flex items-center">
          <ChevronDown />
        </div>
      </div>

      {showDropdown && (
        <div className="absolute top-12 left-0 w-36 bg-white border rounded-lg shadow-md">
          <div
            onClick={() => selectLanguage("EN")}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            English
          </div>
          <div
            onClick={() => selectLanguage("AR")}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Arabic
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
