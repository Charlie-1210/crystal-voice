/** Revelado progresivo al hacer scroll. Respeta prefers-reduced-motion. */
export function initReveal(root = document) {
  const targets = root.querySelectorAll(".reveal:not(.is-in)");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.06 });

  targets.forEach((el) => io.observe(el));
}
