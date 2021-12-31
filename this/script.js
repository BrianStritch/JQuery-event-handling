// $('p').click(function(){
//     $(this).slideToggle('slow');
// })

// $('button').mouseenter(function(){
//         $(this).removeClass('make-red').addClass('make-blue');
// })
// $('button').mouseleave(function(){
//     $(this).removeClass('make-blue').addClass('make-red');
// })

// $('document').ready(function (){
//     $('.box').on('click', function(){    // function makes the boxes turn red with the same class name ie. one two three 
//         var classNames = $(this).attr('class').split(' ');
//         $('.' + classNames[1]).css('background-color','red');
//     })
// })

$(document).ready(function (){
    $('.box').on('click', function (){
        var classNames = $(this).attr('class').split(' ');
        var boxClass = classNames[0];
        var className = classNames[1]
        if($(this).css('background-color') == 'rgb(255, 0, 0)') {
            // if this object is already red, turn it black
            $('.' + className).css('background-color','#000');
        } else {
            // else turn all elements with a box class black
            // and then change all the elements with the same class name 
            // as the clicked element to red.
            $('.' + boxClass).css('background-color','#000');
            $('.' + className).css('background-color','red');
        }
});
})