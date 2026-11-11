// Google Analytics (gtag.js). Loads the library async, then queues the config.
const GA_ID = 'G-S53TVZQ5PW';

export default defineNuxtPlugin(() => {
  if (!import.meta.client) return;

  const lib = document.createElement('script');
  lib.async = true;
  lib.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(lib);

  const w = window as unknown as { dataLayer: unknown[]; gtag: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // gtag expects the raw arguments object
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag('js', new Date());
  w.gtag('config', GA_ID);
});
