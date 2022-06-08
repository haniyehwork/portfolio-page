var tl = new TimelineMax();
gsap.registerPlugin(ScrollTrigger);
tl.to(".first", {scrollTrigger:{ trigger: ".first", toggleActions: "play complete complete none"} , x: 300 , opacity: 1, duration: 2});
gsap.to(".second", {scrollTrigger:{ trigger: ".second", toggleActions: "play complete complete none"} , x: -300 , opacity: 1, duration: 2});
gsap.to(".third", {scrollTrigger:{ trigger: ".third", toggleActions: "restart complete complete none"} , x: 300 , opacity: 1, duration: 2});
gsap.to(".forth", {scrollTrigger:{ trigger: ".forth", toggleActions: "restart complete complete none"} , x: -300 , opacity: 1, duration: 2});
gsap.to(".fifth", {scrollTrigger:{ trigger: ".fifth", toggleActions: "restart complete complete none"} , x: 300 , opacity: 1, duration: 2});
gsap.to(".sixth", {scrollTrigger:{ trigger: ".sixth", toggleActions: "restart complete complete none"} , x: -300 , opacity: 1, duration: 2});
gsap.to(".seventh", {scrollTrigger:{ trigger: ".seventh", toggleActions: "restart complete complete none"} , x: 300 , opacity: 1, duration: 2});
gsap.to(".eighth", {scrollTrigger:{ trigger: ".eighth", toggleActions: "restart complete complete none"} , x: -300 , opacity: 1, duration: 2});
gsap.to(".nineth", {scrollTrigger:{ trigger: ".nineth", toggleActions: "restart complete complete none"} , x: 300 , opacity: 1, duration: 2});
gsap.to(".tenth", {scrollTrigger:{ trigger: ".tenth", toggleActions: "restart complete complete none"} , x: -300 , opacity: 1, duration: 2});
gsap.to(".eleventh", {scrollTrigger:{ trigger: ".eleventh", toggleActions: "restart complete complete none"} , x: 300 , opacity: 1, duration: 2});
gsap.to(".twelveth", {scrollTrigger:{ trigger: ".twelveth", toggleActions: "restart complete complete none"} , x: -300 , opacity: 1, duration: 2});
gsap.to(".thirteenth", {scrollTrigger:{ trigger: ".thirteenth", toggleActions: "restart complete complete none"} , x: 300 , opacity: 1, duration: 2});

