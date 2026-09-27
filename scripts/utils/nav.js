/** Menú móvil, sombra del encabezado y marcado de la sección visible. */
import { $, $$ } from "./dom.js";

export function initNav() {
  const head    = $(".masthead");
  const toggle  = $(".navtoggle");
  const drawer  = $(".drawer");
  const close   = $(".drawer__close");

  if (head) {
    const onScroll = () => head.classList.toggle("is-stuck", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const setDrawer = (open) => {
    if (!drawer || !toggle) return;
    drawer.dataset.open = String(open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
    if (open) drawer.querySelector("a")?.focus();
    else toggle.focus();
  };

  toggle?.addEventListener("click", () => setDrawer(drawer.dataset.open !== "true"));
  close?.addEventListener("click", () => setDrawer(false));
  drawer?.addEventListener("click", (e) => {
    if (e.target.tagName === "A") setDrawer(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer?.dataset.open === "true") setDrawer(false);
  });

  initScrollSpy();
}

function initScrollSpy() {
  const links = $$(".navlist a[href^='#']");
  if (!links.length || !("IntersectionObserver" in window)) return;

  const map = new Map();
  links.forEach((a) => {
    const section = document.getElementById(a.hash.slice(1));
    if (section) map.set(section, a);
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = map.get(entry.target);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach((a) => a.removeAttribute("aria-current"));
        link.setAttribute("aria-current", "true");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  map.forEach((_, section) => io.observe(section));
}
