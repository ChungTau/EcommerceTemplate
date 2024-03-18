export const fallbackLng = "en";
export const languages = [{"en":"English"}, {"zh":"繁體中文"}];
export const localeCodes = languages.map(language => Object.keys(language)[0]);
export const cookieName = "i18next";
export const defaultNS = "translation";

// lng = 採用的語言, ns = 採用的 name space
export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: localeCodes,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}