$(function() {  
    $("#tl").click(function() {
        $(this).toggleClass("open");  
    });  
});

$(function() {  
    $("#br").click(function() {
        $(this).toggleClass("open");  
    });  
});

$(function() {  
    $("#rt").click(function() {
        $(this).toggleClass("open");  
    });  
});

$(function() {  
    $("#bl").click(function() {
        $(this).toggleClass("open");  
    });  
});


if(!Modernizr.cssanimations) {
    $("#tl").click(function() {
        $('#myBlock').css("display", "block");
        $(this).animate({
            height: '100%',
            width: '100%'
        }, "slow");
    });
   
    $("#rt").click(function() {
        $('#myBlock').css("display", "block");
        $(this).animate({
            height: '100%',
            width: '100%'
        }, "slow");
    });
   
    $("#bl").click(function() {
        $('#myBlock').css("display", "block");
        $(this).animate({
            height: '100%',
            width: '100%'
        }, "slow");
    });
   
    $("#br").click(function() {
        $('#myBlock').css("display", "block");
        $(this).animate({
            height: '100%',
            width: '100%'
        }, "slow");
    });
   
}