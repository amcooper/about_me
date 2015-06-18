$( document ).ready(function() {
    $('#scroll_contact').on('click', function(event) {
        event.preventDefault();
        console.log($('#contact').offset().top);
        $('html, body').animate({
            scrollTop: $('#contact').offset().top - 50
        }, 1000);
    });    

    $('#scroll_projects').on('click', function(event) {
        event.preventDefault();
        console.log($('#projects').offset().top);
        $('html, body').animate({
            scrollTop: $('#projects').offset().top - 50
        }, 1000);
    });    

    $('#scroll_about').on('click', function(event) {
        event.preventDefault();
        console.log($('#about').offset().top);
        $('html, body').animate({
            scrollTop: $('#about').offset().top - 50
        }, 1000);
    }); 

    $(".nav a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });   

    $(".screenshot").on("mouseenter", function(){
        $( this ).css({ "border-color": "rgb(0,200,255)", "border-color": "rgba(0,200,255,0.5)" });
    })
    .on("mouseleave", function() {
        $( this ).css({ "border-color": "transparent" });
    });

});
