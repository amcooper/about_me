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

  $( '#aboutAdamLink' ).hover( 
    function() {
      $( '#lineTwo' ).css( 'opacity', '0.0' );
      $( '.willHide' ).css( 'opacity', '0.0' );
      $(this).html( "about_adam" ); 
      $(this).addClass("aboutAdamHover"); 
    },
    function() {
      $(this).removeClass("aboutAdamHover");
      $(this).html( "a" );
      $( '#lineTwo' ).css( 'opacity', '1.0' );
      $( '.willHide' ).css( 'opacity', '1.0' );
    }
  );

  $( '#projectsLink' ).hover(
    function() {
      $( '#lineOne' ).css( 'opacity', '0.0' );
      $( '.willHide' ).css( 'opacity', '0.0' );
      $(this).html( "projects" ); 
      $(this).addClass("projectsHover"); 
    },
    function() {
      $(this).removeClass("projectsHover");
      $(this).html( "p" );
      $( '#lineOne' ).css( 'opacity', '1.0' );
      $( '.willHide' ).css( 'opacity', '1.0' );
    }
  );

  $( '#aboutAdamLink' ).click( function() {
    $( '#lowercase' ).css('z-index', '1').velocity('fadeOut', { duration: 1000 });
    $( 'video' ).css( 'opacity', '0.0' );
    $( '#aboutAdamPanel' ).css('z-index', '3').velocity('fadeIn', { duration: 1000 });
  });

  $( '#projectsLink' ).click( function() {
    $( '#lowercase' ).css('z-index', '1').velocity('fadeOut', { duration: 1000 });
    $( '#projectsPanel' ).css('z-index', '3').velocity('fadeIn', { duration: 1000 });
  });

  $( '.navHome' ).click( function() {
    $( '#aboutAdamPanel' ).css('z-index', '1').velocity( 'fadeOut', { duration: 1000 });
    $( '#projectsPanel' ).css('z-index', '1').velocity( 'fadeOut', { duration: 1000 });
    $( '#lowercase' ).css('z-index', '3').velocity( 'fadeIn', { duration: 1000 });
  });

  $( '#navProjects' ).click( function() {
    $( '#aboutAdamPanel' ).css('z-index', '1').velocity( 'fadeOut', { duration: 1000 });
    $( '#projectsPanel' ).css('z-index', '3').velocity( 'fadeIn', { duration: 1000 });
  });

  $( '#navAbout' ).click( function() {
    $( '#projectsPanel' ).css('z-index', '1').velocity( 'fadeOut', { duration: 1000 });
    $( 'video' ).css( 'opacity', '0.0' );
    $( '#aboutAdamPanel' ).css('z-index', '3').velocity( 'fadeIn', { duration: 1000 });
  });

});
