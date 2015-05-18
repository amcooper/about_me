$( document ).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        debugger;
        var target = $(this.href);
        console.log("target: " + target); //debug
        console.log("target.length: " + target.length); //debug
        debugger;
        if ( target.length ) {
            debugger;
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
