// Scroll Animations
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Hero Text Animation
gsap.to(".hero-section h1", {
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power4.out"
});

// Service Card Stagger
gsap.utils.toArray(".service-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top center+=100"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: i * 0.2
  });
});

// Navigation Scroll Effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".floating-nav");
  window.scrollY > 100 
    ? nav.classList.add("scrolled")
    : nav.classList.remove("scrolled");
});