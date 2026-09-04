// Reveal elements tagged with [data-reveal] as they scroll into view.
const els = document.querySelectorAll<HTMLElement>("[data-reveal]");

// Only hide-then-reveal when we can actually observe intersections; otherwise
// leave everything visible so content is never stuck hidden.
if (els.length && "IntersectionObserver" in window) {
  // Marker class so the hiding CSS only applies when JS is available.
  document.documentElement.classList.add("reveal-ready");

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  els.forEach((el) => io.observe(el));
}
