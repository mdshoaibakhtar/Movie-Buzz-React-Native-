import i18n from "../i18n";

export const useLanguage = () => {
  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);
  return { changeLanguage };
};
