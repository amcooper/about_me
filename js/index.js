$( document ).ready(function() {

    var targetLink; // Delete if unneeded

    $( "#name" ).velocity(
      { colorAlpha: 0.7 }, 
      { duration: 3000,
        complete: function( element ) { 
          $( "#dev" ).velocity(
            { colorAlpha: 0.7 },
            { duration: "slow",
              complete: function( element ) {
                $( "#links" )
                  .velocity(
                    "fadeIn",
                    { duration: 4000 }
                  )
                  .velocity(
                    { top: "auto" },
                    { duration: 4000, queue: false }
                  );
              } 
            }
          ); 
        } 
      }
    );

    // $( "#aboutLink" ).click( function() {
    //   targetLink = "#about";
    // });

    // $( "#projectsLink" ).click( function() {
    //   targetLink = "#projects";
    // });

    // $( "#contactLink" ).click( function() {
    //   targetLink = "#contact";
    // });

    $( ".shimmy" ).click( function() {
      $( "#titleText" ).velocity({ top: "40px" }, { duration: 1000 });
      $( "#name" ).velocity({ fontSize: "30px", fontSize: "3.0rem" }, { duration: 1000 });
      $( "#dev" ).velocity({ fontSize: "20px", fontSize: "2.0rem", marginTop: "-15px", height: "42px" }, { duration: 1000 });
      $( "#links" ).velocity({ paddingLeft: "0px", marginTop: "-20px" }, { duration: 1000 });
      $( ".link" ).css( "display", "block" );
      $( "#links > li" ).removeClass( "active" );
      $( this ).removeClass( "dormant" ).addClass( "active" );
      $( "#panels > div").addClass( "hidden" );
      console.log( "#" + $( this ).attr( "id" )); // debuggin'
      $( "#" + ($( this ).attr( "id" )).slice(0,-4)).removeClass( "hidden" ); // <-- quite right!
     });

    // var initialSequence = [
    //   { e: $( "#name" ), p: { colorAlpha: 0.7 }, o: { duration: 3000 } },
    //   { e: $( "#dev" ), p: { colorAlpha: 0.7 }, o: { duration: "slow" } },
    //   { e: $( "#aboutLink" ), p: { position: "relative", top: "0", left: "auto" }, o: { duration: 3000, easing: "easeInSine" } },
    //   { e: $( "#projectsLink" ), p: { position: "relative", top: "0", left: "auto" }, o: { duration: 2000 } },
    //   { e: $( "#shotsLink" ), p: { position: "relative", top: "0", left: "auto" }, o: { duration: 1000 } },
    //   { e: $( "#jamsLink" ), p: { position: "relative", top: "0", left: "auto" }, o: { duration: 1000 } },
    //   { e: $( "#goodreadsLink" ), p: { position: "relative", top: "0", left: "auto" }, o: { duration: 1000 } },
    //   { e: $( "#contactLink" ), p: { position: "relative", top: "0", left: "auto" }, o: { duration: 1000, easing: "easeInSine" } }
    // ];

    // $.Velocity.RunSequence( initialSequence );

    // These three animations scroll to the respective sections
    // $('#scroll_contact').on('click', function(event) {
    //     event.preventDefault();
    //     console.log($('#contact').offset().top);
    //     $('html, body').animate({
    //         scrollTop: $('#contact').offset().top - 50
    //     }, 1000);
    // });    

    // $('#scroll_projects').on('click', function(event) {
    //     event.preventDefault();
    //     console.log($('#projects').offset().top);
    //     $('html, body').animate({
    //         scrollTop: $('#projects').offset().top - 50
    //     }, 1000);
    // });    

    // $('#scroll_about').on('click', function(event) {
    //     event.preventDefault();
    //     console.log($('#about').offset().top);
    //     $('html, body').animate({
    //         scrollTop: $('#about').offset().top - 50
    //     }, 1000);
    // }); 

    // // Highlight clicked items in the navbar
    // $(".nav a").on("click", function(){
    //     $(".nav").find(".active").removeClass("active");
    //     $(this).parent().addClass("active");
    // });   

    // // Highlight project screenshots on mouseover
    // $(".screenshot").on("mouseenter", function(){
    //     $( this ).css({ "border-color": "rgb(0,200,255)", "border-color": "rgba(0,200,255,0.5)" });
    // })
    // .on("mouseleave", function() {
    //     $( this ).css({ "border-color": "transparent" });
    // });

});
