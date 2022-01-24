function imageChange(e) {
  document.getElementById("recent-work-slide").children[0].src =
    e.children[0].src;
}

gsap.to("#box", { duration: 2, x: 90 });
gsap.to("#logo", { duration: 2, x: -90 });
