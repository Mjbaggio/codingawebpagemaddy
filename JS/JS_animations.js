gsap.to('.thinking', {
    scrollTrigger: {
	trigger: '.Loto', // the element will trigger the scroll
    start: "top center", //when the top center hits the viewport
	end: "top 100px", //when the top of .Loto is 100px from the top of the viewport
	pin: true,
	scrub: 1
},
	backgroundImage: "url('fonttype2')" // changing background image
