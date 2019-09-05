// Javascript for portfolio
// John Webster

$(document).ready(function () {
    // ping heroku pages so that they are active by the time user gets there
    $.get("https://shielded-tor-66455.herokuapp.com");
    $.get("https://remembrance-backbacon-77087.herokuapp.com");
    $.get("https://hidden-bayou-86482.herokuapp.com");
    $.get("https://remembrance-backbacon-77087.herokuapp.com/");
    // global variables
    var thisScreen = "About"; // starting screen is About
    var tempSetInterval;
    var tempSetInterval2;

    // initialize modals, increasing transition times
    $('.modal').modal({ inDuration:500, outDuration:500});

    // setup the materialize character counter for textarea in the form
    $('textarea#inputMessage').characterCounter();

    
    
    // submit button for email contact
    $("#sendButton").on("click", function (event) {
        event.preventDefault(); // form submit so don't post
        var mailString = "";
        var userName = $("#nameInput").val().trim();
        var userEmail = $("#emailInput").val().trim();
        var userText = $("#inputMessage").val().trim();
        // add mail address
        mailString += "JohnLobster";
        mailString += "@";
        mailString += "comcast.net";
        // add subject
        mailString += "?subject=" + encodeURIComponent("From portfolio : ") + userName;
        // add text
        mailString += "&body=" + encodeURIComponent(userText)
        mailString += encodeURIComponent("\n\nFrom: ") + userEmail;
        // console.log("mailString " + mailString);
        // pop up the mail client
        window.location.href = "mailto:" + mailString;
    });

    // copy email to clipboard button
    $("#emailButton").on("click", function() {
        // console.log("copy email address");
        var myAddress = "John"+"Lobster"+"@"+"comcast"+".net";
        // console.log("Copy email address - address is "+ myAddress);
        // to make this work, the text has to be visible in the DOM, so add to 
        // a fake element, then remove and hide the fake element
        // I put the fake element in the html so don't have to create on the fly
        
        // make dummy textarea visible
        $("#dummyTextarea").show();
        // copy to dummy textarea
        $("#dummyTextarea").text(myAddress);
        $("#dummyTextarea").select();
        document.execCommand("copy");
        // removing email address and hiding textarea so can't be searched for in html
        $("#dummyTextarea").text("");
        $("#dummyTextarea").hide();
        
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