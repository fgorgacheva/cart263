/**************************************************
Exercise: Code taker
Felicia Gorgatchov

**************************************************/
"use strict";

let secret = 'i am Batman';
let index  = 1;
let spaceAdded = 0;
$(document).ready(() => {

    $('body').on('click', function(event){
        $('#instructions').hide("swing");
        $('#code').css('display', 'flex');;
        $(".content").removeClass('center');
    });
    
    function setFindable(){
        $('.s' + index).addClass('secret'); 

        $('.secret').on('mouseover', function(event) {
            $(this).addClass('found',500);
        });

        // allows user to drag letters
        $('.secret').draggable({
          helper: 'clone'
        });
    }

    setFindable();
    
    $('#solved-dialog').dialog({
        autoOpen: false,
        buttons: {
          "Because I'm Batman": function() {
            $(this).dialog('close');
          }
        }
      });
      
      
      $('#answer').droppable({
        drop: function(event, ui) {
          // Get the letter in the dragged element
          let letter = ui.draggable.text();
          // Add it to the answer box
          $(this).append(letter);
          // Disable dragging for this letter
          ui.draggable.draggable('disable');
          // Remove the highlighting of this letter
          ui.draggable.removeClass('found', 500);
          ui.draggable.removeClass('secret');
          // Disable mouseovers on this letter
          ui.draggable.off('mouseover');

          //add a space in the secret message
          if(secret[index + spaceAdded] === ' '){
              $(this).append(' ');
              spaceAdded++;
          }

          //increment index to find the next hidden letter
          index++;
          //set the next letter to be findable
          setFindable();
          // Check if they got the answer right yet...
          if ($('#answer').text() === secret) {
            // If they did, display the dialog!
            $('#solved-dialog').dialog('open');
          }
        }
      });
      
});