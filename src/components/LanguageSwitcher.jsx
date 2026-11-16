
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const isArabic = i18n.language?.startsWith("ar");

  const changeLanguage = async () => {
    const nextLanguage = isArabic ? "en" : "ar";
    await i18n.changeLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
    document.documentElement.dir = nextLanguage === "ar" ? "rtl" : "ltr";
  };

  return (
    <button
      type="button"
      className="swc-language-switcher"
      onClick={changeLanguage}
      aria-label={isArabic ? "Switch to English" : "Switch to Arabic"}
    >
      <span className="swc-language-globe">◎</span>
      <span>{isArabic ? "English" : "العربية"}</span>
    </button>
  );
}

export default LanguageSwitcher;
