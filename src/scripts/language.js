const STORAGE_KEY = "site-language";
const DEFAULT_LANGUAGE = "en";

function normalizeLanguage(value) {
  return value === "no" || value === "nb" ? "no" : DEFAULT_LANGUAGE;
}

function getStoredLanguage() {
  try {
    return normalizeLanguage(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

function setVisibleLanguage(language) {
  document.documentElement.dataset.language = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-lang]").forEach((element) => {
    if (!(element instanceof HTMLElement)) return;
    element.hidden = element.dataset.lang !== language;
  });

  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) return;

    const nextLanguage = language === "en" ? "no" : "en";
    button.textContent = nextLanguage.toUpperCase();
    button.dataset.activeLanguage = language;
    button.setAttribute(
      "aria-label",
      language === "en" ? "Switch to Norwegian" : "Switch to English",
    );
    button.setAttribute("aria-pressed", "true");
  });
}

function toggleLanguage() {
  const nextLanguage = document.documentElement.dataset.language === "no" ? "en" : "no";

  try {
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  } catch {
    // Ignore storage failures and keep the page language in sync.
  }

  setVisibleLanguage(nextLanguage);
}

function initializeLanguageToggle() {
  const currentLanguage = getStoredLanguage();
  setVisibleLanguage(currentLanguage);

  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) return;

    button.addEventListener("click", toggleLanguage);
  });
}

document.addEventListener("astro:page-load", initializeLanguageToggle);
initializeLanguageToggle();