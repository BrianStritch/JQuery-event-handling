/**
 * Steps
Within the index.css file at the bottom, where it is indicated, make a class rule with the name make-red
It should have the property background-color with a value of red
Make a class rule with the name make-border
It should have the property border with a value of  2px solid black
Within the index.html file apply the class make-red to the <button> element, do not apply the class make-border.
Inside index.js do the following

Create a mouseenter event handler that triggers when the button is hovered
Within the mouseenter handler target the button and use the JQuery removeClass method to remove the class: "make-red"  and chaining onto this use the JQuery addClass method to add the class: "make-border"  
Create a mouseleave event handler that triggers when you leave the button
Within the mouseleave handler target the button and use the JQuery removeClass method to remove the class: "make-border" and chaining onto this use the JQuery addClass method to add the class: "make-red" 
Enjoy!      
 */

$('button').mouseenter(function(){
    $('button').removeClass('make-red').addClass('make-border');
});

$('button').mouseleave(function(){
    $('button').removeClass('make-border').addClass('make-red');
});


/***************************************** method chaining  *****************************************************/
	// $('#myButton').removeClass('blueBox');
	// $('#myButton').addClass('border');
    // $('#myButton').removeClass('blueBox').addClass('border');  // same as the two functions above but now are chained.

	
    // $('p').css('color','blue').slideUp(2000).slideDown(2000);  // can also be used for events and styles etc
	// $('a').attr('href','http://www.example.com'); // can be used to query a href from an anchor and then add a href to the anchor

