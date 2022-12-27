import { createI18n } from 'vue-i18n'
import Cookies from "js-cookie";
import enLocale from "./en";
import vnLocale from "./vn";

const messages = {
  en: {
    ...enLocale,
  },

  vn: {
    ...vnLocale,
  },
};
export function getLanguage() {
  const chooseLanguage = Cookies.get("language");
  if (chooseLanguage) return chooseLanguage;

  // if has not choose language
  const language = (
    navigator.language || navigator.browserLanguage
  ).toLowerCase();
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  return "vn";
}
const i18n = createI18n({
  // set locale
  // options: en | vn
  locale: getLanguage(),
  // set locale messages
  messages,
});

export default i18n;
