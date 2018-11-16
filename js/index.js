$(function(){ 
  
  var topBottomArray = ['top', 'bottom']; 
  var leftRightArray = ['left', 'right'];
  
   $('button').click(function(){
     console.log('button is clicked!');
   
    
     var $newDiv = $('<div></div>')
        .addClass('box')
        .css('position', 'absolute')
        .css(topBottomArray[randomPercent(2)],   randomPercent(101)+'%')
        .css(leftRightArray[randomPercent(2)], randomPercent(101)+'%')
     $(this).after($newDiv); 
     
    
     
     
     
     
  }); 
     
});

function randomPercent(limit) {
    return Math.floor(Math.random() * limit); 
 }