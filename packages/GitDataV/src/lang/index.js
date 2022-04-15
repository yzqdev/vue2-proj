import Vue from "vue";
import VueI18n from "vue-i18n";

import enLocale from "./en";
import zhLocale from "./zh";

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...zhLocale
  }
};
export function getLanguage() {
  const chooseLanguage = localStorage.getItem("language");
  if (chooseLanguage) return chooseLanguage;

  const language = (
    navigator.language || navigator.browserLanguage
  ).toLowerCase();
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  return "en";
}
const i18n = new VueI18n({
  locale: getLanguage(),
  messages
});

export default i18n;
