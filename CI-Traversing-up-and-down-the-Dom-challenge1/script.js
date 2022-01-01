$('p').click(function () {
    $(this).children('a').css('background-color','yellow'); 
 });

 /**
  * Steps
Inside index.js do the following

Create a click event handler that triggers when a <p> element is clicked.
Within the click event handler, using the keyword this, target the specific <p> element that was clicked
And using the children method target all the <a> elements within this paragraph.
And using chaining, use the css method to change their background-color to yellow.
Within the html click on any paragraph and see the background color of its <a> elements change colour to yellow.
Enjoy!    
  * 
  */