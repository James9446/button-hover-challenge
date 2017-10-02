// The goal is this: you have two buttons, one with a class of "lighter" and one with a class of "darker." What I want is to see is 

// (1) each button should grow bigger when you hover your mouse over it, 

// (2) each button should SWITCH color scheme when you hover over it (darker should become lighter, lighter should become darker), and

// (3) make the OPPOSITE buttons switch color scheme when you hover over it's counterpart (so when you hover over the darker button, it turns lighter while the lighter button turns darker, and vice versa).


// When the page (aka document) is ready (i.e. loaded), do this (function means 'do this'):
$(document).ready(function() {
	// When button with class btn1 or btn2 has the mouse enter, do this:
	$(".btn1, .btn2").mouseenter(function(){
		// For button with class btn2 it switches the lighter class to the darker class
		$(".btn2").removeClass("lighter").addClass("darker");
		// For button with class btn1 it switches the darker class to the lighter class
		$(".btn1").removeClass("darker").addClass("lighter");
		// For 'this' i.e. the selected element, add the class bigger
		$(this).addClass("bigger");
	});
});

// When the page (aka document) is ready (i.e. loaded), do this (function means 'do this'):
$(document).ready(function() {
	// When button is hovered, do this:
	$(".btn1, .btn2").mouseleave(function(){
		// For button with class btn1 it switches the lighter class back to the darker class
		$(".btn1").removeClass("lighter").addClass("darker");
		// For button with class btn2 it switches the darker class back to the lighter class
		$(".btn2").removeClass("darker").addClass("lighter");
		// For 'this' i.e. the selected element, remove the class bigger
		$(this).removeClass("bigger");
	});
});


