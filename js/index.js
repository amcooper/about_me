$( document ).ready(function() {

  var extensionSeq = [];

  $( '.nm > span' ).each( function( index,element ) {
    console.log( index ); // debug
    console.log( element ); // debug
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

  // ---- DEBUGGING ------------------- //
  console.log( "extensionSeq: " );
  extensionSeq.forEach( function(el,i,a) {
    for (var prop in el) {
      if (el.hasOwnProperty( prop )) {
        console.log( prop + " " + el[prop] );
        console.log( el[prop].innerHTML || "--" );
        console.log( typeof el[prop] );
        if ( typeof el[prop] === "object" ) {
          for (var subprop in el[prop]) {
            if (el[prop].hasOwnProperty( subprop )) {
              console.log( "subprop: " + subprop + " " + el[prop][subprop]);
            }
          }
        };
      }
    }
  });
  // -----------------------------------//


  function parade() {
    $.Velocity.RunSequence( extensionSeq );
  };

  parade();

  $( '#aboutAdamLink' ).hover( function() {
    $( '#lowercase' ).toggleClass( 'hidden' );
    $( '#aboutAdamHover' ).toggleClass( 'hidden' );
  });

  $( '#aboutAdamHover' ).hover( function() {
    $( '#lowercase' ).toggleClass( 'hidden' );
    $( '#aboutAdamHover' ).toggleClass( 'hidden' );
  });  

  $( '#projectsLink' ).hover( function() {
    $( '#lowercase' ).toggleClass( 'hidden' );
    $( '#projectsHover' ).toggleClass( 'hidden' );
  });

  $( '#projectsHover' ).hover( function() {
    $( '#lowercase' ).toggleClass( 'hidden' );
    $( '#projectsHover' ).toggleClass( 'hidden' );
  });

});
