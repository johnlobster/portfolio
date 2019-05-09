// Javascript for portfolio
// John Webster

$(document).ready(function () {
    // global variables
    var thisScreen = "About"; // starting screen is About

    // submit button for email contact
    $("#sendButton").on("click", function (event) {
        event.preventDefault(); // form submit so don't post
        console.log("send button");
    });

    // menu buttons
    $(".menuButton").on("click", function() {
        if ( ! $(this).hasClass("myDisabled")) {  // do nothing if button is disabled
            var newScreen = $(this).attr("data-value");
            console.log("Menu " + newScreen);
            if ( newScreen !== thisScreen) { // shouldn't happen but might if messing with screen sizes
                
                // enable the other buttons
                $(".menuButton").removeClass("myDisabled");

                // disable this button 
                $(this).addClass("myDisabled");

                // change the header
                $("#custom-header").text(newScreen);
                // fade out the existing screen

                // $("#" + thisScreen).hide();
                // fade in the new screen

                // $("#" + newScreen).show();

                thisScreen = newScreen;
            }
            else { // action if screen isn't changing
                $(this).addClass("myDisabled");
            }

            
        }
        
    });

}); // end of document ready