$( document ).ready(function() {

    // smoothDivScroll section
    $("#ticker").smoothDivScroll({
        mousewheelScrolling: "allDirections",
        manualContinuousScrolling: true,
        autoScrollingMode: "onStart"
    });
    
    // These three animations scroll to the respective sections
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

    // Highlight clicked items in the navbar
    $(".nav a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });   

    // Highlight project screenshots on mouseover
    $(".screenshot").on("mouseenter", function(){
        $( this ).css({ "border-color": "rgb(0,200,255)", "border-color": "rgba(0,200,255,0.5)" });
    })
    .on("mouseleave", function() {
        $( this ).css({ "border-color": "transparent" });
    });

});
