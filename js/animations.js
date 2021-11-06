gsap.registerPlugin(ScrollTrigger);

gsap.from('#welcomeText', { x: '100%', duration: 2, ease: 'elastic'});

gsap.from('#profileImg', {scrollTrigger: "#aboutEndWave", opacity: 0, duration: 1, ease: 'power1'});
gsap.from('#aboutMe', {scrollTrigger: "#aboutEndWave", opacity: 0, duration: 3, ease: 'power1'});

gsap.from('.project', {scrollTrigger: "#contact", y: '300%', stagger: 0.3, ease: 'power1'});
    