gsap.registerPlugin(ScrollTrigger);

gsap.from('#welcomeText', { x: '100%', duration: 2, ease: 'elastic'});

gsap.from('#profileImg', {scrollTrigger: "#aboutEndWave", opacity: 0, duration: 2, ease: 'power1'});
gsap.from('#aboutMe', {scrollTrigger: "#aboutEndWave", opacity: 0, duration: 2, ease: 'power1'});


    