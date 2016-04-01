$( document ).ready(function() {

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

  $( '#aboutAdamLink' ).hover( function() {
    console.log( 'aboutAdamLink : hover' );
    $( '#lowercase' ).velocity( 'fadeOut' );
    $( '#aboutAdamHover' ).velocity( 'fadeIn' );
  });

  $( '#aboutAdamHover' ).hover( function() {
    $( '#lowercase' ).toggleClass( 'ahidden' );
    $( '#aboutAdamHover' ).toggleClass( 'ahidden' );
  });  

  $( '#projectsLink' ).hover( function() {
    $( '#lowercase' ).toggleClass( 'ahidden' );
    $( '#projectsHover' ).toggleClass( 'ahidden' );
  });

  $( '#projectsHover' ).hover( function() {
    $( '#lowercase' ).toggleClass( 'ahidden' );
    $( '#projectsHover' ).toggleClass( 'ahidden' );
  });

  $( '#aboutAdamHover' ).click( function() {
    $( '#lowercase' ).velocity( 'fadeOut', { duration: 1000 });
    $( '#aboutAdamHover' ).velocity( 'fadeOut', { duration: 1000 });
    $( '#aboutAdamPanel' ).velocity( 'fadeIn', { duration: 1000 });
  });

  $( '#projectsHover' ).click( function() {
    $( '#lowercase' ).velocity( 'fadeOut', { duration: 1000 });
    $( '#projectsHover' ).velocity( 'fadeOut', { duration: 1000 });
    $( '#projectsPanel' ).velocity( 'fadeIn', { duration: 1000 });
  });

  $( '.navHome' ).click( function() {
    $( '.panel' ).velocity( 'fadeOut', { duration: 1000 });
    $( '#lowercase' ).velocity( 'fadeIn', { duration: 1000 });
  });

  $( '#navProjects' ).click( function() {
    $( '#aboutAdamPanel' ).velocity( 'fadeOut', { duration: 1000 });
    $( '#projectsPanel' ).velocity( 'fadeIn', { duration: 1000 });
  });

  $( '#navAbout' ).click( function() {
    $( '.panel' ).velocity( 'fadeOut', { duration: 1000 });
    $( '#aboutAdamPanel' ).velocity( 'fadeIn', { duration: 1000 });
  });

});
