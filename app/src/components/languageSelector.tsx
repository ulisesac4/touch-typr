"use client";
import { useState } from "react";
import LanguageOptions from "../utils/languageOptions";

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(LanguageOptions[0]);
  return (
    <div className="dropdown m-1">
      <div tabIndex={0} role="button" className="btn m-1">
        Lang: {selectedLanguage}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {LanguageOptions.map((value, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setSelectedLanguage(value);
              }}
            >
              <a>{value}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
