import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLang = i18n.language;
    i18n.changeLanguage(currentLang === 'en' ? 'ar' : 'en');
  };

  return (
    <button onClick={toggleLanguage}>
      {i18n.language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    </button>
  );
};

export default LanguageSwitcher;
