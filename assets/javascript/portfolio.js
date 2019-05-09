// Javascript for portfolio
// John Webster

$(document).ready(function () {
    // global variables
    var thisScreen = "About"; // starting screen is About
    var tempSetInterval;
    var tempSetInterval2;


    // submit button for email contact
    $("#sendButton").on("click", function (event) {
        event.preventDefault(); // form submit so don't post
        console.log("send button");
    });

    // menu buttons
    $(".menuButton").on("click", function() {
        // simpleDisabled class is used to prevent a new menu button being pushed
        // whilst animation is still in progress
        if ((!$(this).hasClass("myDisabled")) && (!$(this).hasClass("simpleDisabled"))) {  
            // but not disabled so process
            var newScreen = $(this).attr("data-value");
            var button = $(this);
            if ( newScreen !== thisScreen) { // shouldn't happen but might if messing with screen sizes
                
                // enable the other buttons
                $(".menuButton").removeClass("myDisabled");
                $(".menuButton").addClass("simpleDisabled");

                // disable this button 
                button.addClass("myDisabled");

                // change the header
                $("#custom-header").text(newScreen);
                // fade out the existing screen 
                $("#" + thisScreen).addClass("fadePageOut");

                // 
                

                // wait for animations to complete
                tempSetInterval = setInterval( function() {
                    $("#" + thisScreen).hide();
                    $("#" + newScreen).css("opacity", "0");
                    $("#" + newScreen).show();
                    
                    // fade in the new screen
                    $("#" + newScreen).addClass("fadePageIn");

                    clearTimeout(tempSetInterval);
                    tempSetInterval2 = setInterval(function () {
                        // take away opacity
                        $("#" + newScreen).removeAttr("style");
                        // remove the animation classes
                        $("#" + newScreen).removeClass("fadePageIn");
                        $("#" + thisScreen).removeClass("fadePageOut");
                        $(".menuButton").removeClass("simpleDisabled");
                        thisScreen = newScreen;
                        clearTimeout(tempSetInterval2);
                    }, 700);
                    
                }, 700);
                
            }
            else { // action if screen isn't changing
                $(this).addClass("myDisabled");
            }

            
        }
        
    });

}); // end of document ready