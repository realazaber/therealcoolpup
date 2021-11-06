const timeline = gsap.timeline({ defaults: {duration: 2}});
timeline
    .from('#welcomeText', { x: '100%', ease: 'bounce'})
    