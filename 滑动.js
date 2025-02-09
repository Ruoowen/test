gsap.to(".parallax-element", {
    yPercent: -30,
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });