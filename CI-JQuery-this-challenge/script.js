$('p').click(function(){
    $(this).text('Changed only the text for this paragraph'); 
 });
 
 $('.card').mouseenter(function(){
    $(this).fadeTo(2000,0.2).fadeTo(2000,1); 
 });

 /**
  * Steps
Inside index.js do the following

Create a click event handler that triggers when a <p> element is clicked
Within the click handler, use the this keyword to target the element that was clicked, and using the text method, set the text of that particular element to: "Changed only the text for this paragraph"
Create a mouseenter event handler that triggers when an element with the class of card is hovered over.
Within the mouseenter handler, use the this keyword to target the element that was hovered over, and using chaining, chain two fadeTo methods, using the values 2000, 0.2 for the first and 2000, 1 for the second.
Enjoy!    
  */