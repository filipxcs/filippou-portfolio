export default defineNuxtPlugin(() => {
  if (process.client) {
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-S53TVZQ5PW"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S53TVZQ5PW');
</script>`;
    
    document.head.appendChild(gtmScript);
  }
}); 