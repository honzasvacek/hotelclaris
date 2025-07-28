document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement;

  // Prevent translation in Chrome and Edge
  html.setAttribute("translate", "no");
  html.classList.add("notranslate");

  // Declare correct language (e.g., Czech)
  html.setAttribute("lang", "cs"); // Change to "en", "de", etc. as needed

  // Prevent Google Translate via meta tag (optional, Chrome only)
  const meta = document.createElement("meta");
  meta.setAttribute("name", "google");
  meta.setAttribute("content", "notranslate");
  document.head.appendChild(meta);
});
