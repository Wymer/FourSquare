// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

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