import React, { useState } from "react";
import BookingForm from "./components/BookingForm";
import "./App.css";
import "./i18n";
import { useTranslation } from "react-i18next";
import arabic from './assets/Flag_of_Egypt.svg.webp'
import English from './assets/images.jpg'

function App() {
  const [language, setLanguage] = useState("en"); 
  const { i18n } = useTranslation(); 

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en"; 
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage); 
  };

  return (
    <div className="App flex flex-col" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="p-4 self-end shadow mb-10 w-full h-[50px]">
        <button
          onClick={toggleLanguage}
        >
          <img src={language === "ar" ?English:arabic} className="w-10"/>
        </button>
      </div>
      <BookingForm />
    </div>
  );
}

export default App;
