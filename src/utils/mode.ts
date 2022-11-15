export function setGlobalMode(mode: string) {
  const { body } = document;
  body.setAttribute('theme-mode', mode);
  window.localStorage.setItem('theme-mode', mode);
}

export function getGlobalMode() {
  return window.localStorage.getItem('theme-mode');
}
