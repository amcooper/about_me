$( document ).ready(function() {

  console.log( 'Loaded: index.js' );

  var extensionSeq = [];

  $( '.ticker' ).each( function( index,element ) {
    extensionSeq.push({
      e: element,
      p: "fadeIn",
      o: { duration: 1000 }
    });

    extensionSeq.push({
      e: element,
      p: "fadeOut",
      o: { duration: 1000 }
    });
  });

  extensionSeq[ extensionSeq.length - 1 ].o.complete = function() { parade(); };

  function parade() {
    $.Velocity.RunSequence( extensionSeq );
  };

  parade();

  // $( '#aboutAdamLink' ).hover( function() {
  //   $( '#lowercase' ).toggleClass( 'ahidden' );
  //   $( '#aboutAdamHover' ).toggleClass( 'ahidden' );
  // });

  // Consult this link:
  // http://julian.com/research/velocity/#displayAndVisibility

  $( '.hotAbout' ).hover( 
    function() {
      console.log( 'about : hover on' );
      $( '#lowercase' ).velocity( 'fadeOut' );
      $( '#aboutAdamHover' ).velocity( 'fadeIn' );
    }, function() {
      console.log( 'about : hover off' );
      $( '#lowercase' ).velocity( 'fadeIn' );
      $( '#aboutAdamHover' ).velocity( 'fadeOut' );      
    }
  );


// // // This seems to work (on Firefox) but is slow:
  
  // $( '#aboutAdamLink' ).mouseover( function() {
  //     console.log( 'aboutAdamLink : mouseover' );
  //     $( '#lowercase' ).velocity( 'fadeOut' );
  //     $( '#aboutAdamHover' ).velocity( 'fadeIn' );
  // });

  // $( '#aboutAdamHover' ).mouseout( function() {
  //     console.log( 'aboutAdamHover : mouseout' );
  //     $( '#lowercase' ).velocity( 'fadeIn' );
  //     $( '#aboutAdamHover' ).velocity( 'fadeOut' );
  // });  


// // // This doesn't work on either browser.

  // $( '#aboutAdamLink' ).mouseenter( function() {
  //     console.log( 'aboutAdamLink : mouseenter' );
  //     $( '#lowercase' ).velocity( 'fadeOut' );
  //     $( '#aboutAdamHover' ).velocity( 'fadeIn' );
  // });

  // $( '#aboutAdamHover' ).mouseleave( function() {
  //     console.log( 'aboutAdamHover : mouseleave' );
  //     $( '#lowercase' ).velocity( 'fadeIn' );
  //     $( '#aboutAdamHover' ).velocity( 'fadeOut' );
  // });  

  // $( '#projectsLink' ).hover( function() {
  //   console.log( 'projectsLink : hover' );
  //   $( '#lowercase' ).velocity( 'fadeOut' );
  //   $( '#projectsHover' ).velocity( 'fadeIn' );
  // });

  // $( '#projectsHover' ).hover( function() {
  //   console.log( 'projectsHover : hover' );
  //   $( '#lowercase' ).velocity( 'fadeOut' );
  //   $( '#projectsHover' ).velocity( 'fadeIn' );
  // });

  $( '#aboutAdamHover' ).click( function() {
    console.log( 'aboutAdamHover : click' );
    $( '#lowercase' ).velocity( 'fadeOut', { duration: 1000 });
    $( '#aboutAdamHover' ).velocity( 'fadeOut', { duration: 1000 });
    $( '#aboutAdamPanel' ).velocity( 'fadeIn', { duration: 1000 });
  });

  $( '#projectsHover' ).click( function() {
    console.log( 'projectsHover : click' );
    $( '#lowercase' ).velocity( 'fadeOut', { duration: 1000 });
    $( '#projectsHover' ).velocity( 'fadeOut', { duration: 1000 });
    $( '#projectsPanel' ).velocity( 'fadeIn', { duration: 1000 });
  });

  $( '.navHome' ).click( function() {
    console.log( 'navHome : click' );
    $( '.panel' ).velocity( 'fadeOut', { duration: 1000 });
    $( '#lowercase' ).velocity( 'fadeIn', { duration: 1000 });
  });

  $( '#navProjects' ).click( function() {
    console.log( 'navProjects : click' );
    $( '#aboutAdamPanel' ).velocity( 'fadeOut', { duration: 1000 });
    $( '#projectsPanel' ).velocity( 'fadeIn', { duration: 1000 });
  });

  $( '#navAbout' ).click( function() {
    console.log( 'navAbout : click' );
    $( '.panel' ).velocity( 'fadeOut', { duration: 1000 });
    $( '#aboutAdamPanel' ).velocity( 'fadeIn', { duration: 1000 });
  });

});
