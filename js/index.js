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

  $( '#aboutLink' ).hover( 
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

  // $( '#aboutLink' ).click( function() {
  //   $( '#lowercase' ).css('z-index', '1').velocity('fadeOut', { duration: 1000 });
  //   $( 'video' ).css( 'opacity', '0.0' );
  //   $( '.container-fluid' ).css({ 'width':'3840px', 'left':'-1280px' });
  //   $( '.triptych' ).css('z-index', '3');
  //   $( '#middlePanel' ).velocity('fadeIn', { duration: 1000 });
  //   $( '#floatingNav' )
  //     .css('z-index', '5')
  //     .velocity({right: 'auto', left: '500px'})
  //     .velocity('fadeIn', { duration: 1000 });
  // });

  $( '#aboutLink' ).click( function() {
    $.Velocity.RunSequence([
      { e: $( '#lowercase' ), p: { zIndex: 1 }, o: { duration: 1 } },
      { e: $( '#lowercase' ), p: 'fadeOut', o: { duration: 400, sequenceQueue: false } },
      { e: $( 'video' ), p: { opacity: 0.0 }, o: { duration: 400, sequenceQueue: false } },
      { e: $( '.container-fluid' ), p: { width: '3840px', left: '-1280px' }, o: { duration: 1 } },
      { e: $( '.triptych' ), p: { zIndex: 3 }, o: { duration: 1, sequenceQueue: false } },
      { e: $( '#middlePanel' ), p: 'fadeIn', o: { duration: 1000, sequenceQueue: false } },
      { e: $( '#floatingNav' ), p: { zIndex: 5 }, o: { duration: 1, sequenceQueue: false } },
      { e: $( '#floatingNav' ), p: { right: 'auto', left: '500px' }, o: { duration: 400, sequenceQueue: false } },
      { e: $( '#floatingNav' ), p: 'fadeIn', o: { duration: 1000, sequenceQueue: false } }
    ]);
  });

  $( '#fHomeLink' ).hover(
    function() {
      $( this ).html('home');
    },
    function() {
      $( this ).html('&bull;');
    }
  );

  $( '#fHomeLink' ).click( function() {});

  $( '#fAboutLink' ).hover(
    function() {
      $( this ).html('about');
    },
    function() {
      $( this ).html('&bull;');
    }
  );

  $( '#fAboutLink' ).click( function() {});

  $( '#fProjectsLink' ).hover(
    function() {
      $( this ).html('projects');
    },
    function() {
      $( this ).html('&bull;');
    }
  );

  $( '#fProjectsLink' ).click( function() {});

  $( '#fLateralLink' ).hover(
    function() {
      $( '#fPhotoLink' ).html('photo&nbsp;&lt;');
      $( '#fBioLink' ).html('&gt;&nbsp;bio');
    },
    function() {
      $( '#fPhotoLink' ).html('&lt;');
      $( '#fBioLink' ).html('&gt;');
    }
  );

  $( '#fGmailShow' ).hover(
    function() {
      $( this ).html('<img src="images/gmail-64-black.png" target="_blank">');
    },
    function() {
      $( this ).html('&bull;');
    }
  );

  $( '#fGitHubShow' ).hover(
    function() {
      $( this ).html('<img src="images/github-64-black.png" target="_blank">');
    },
    function() {
      $( this ).html('&bull;');
    }
  );

  $( '#fLinkedInShow' ).hover(
    function() {
      $( this ).html('<img src="images/linkedin-64-black.png" target="_blank">');
    },
    function() {
      $( this ).html('&bull;');
    }
  );

  $( '#fPhotoLink' ).click( function() {
    $( '#photoPanel' ).velocity('fadeIn', { duration: 1000 });
    $( '.container-fluid' ).velocity({left: '0'}, { duration: 1000, easing: [250,50] });
    $( '#middlePanel,#bioPanel' ).velocity('fadeOut', { duration: 1000 });
    $( '#floatingNav' ).velocity({left: '1%'});
    $( '.hoverShow' ).css( 'opacity', '0.0' );
  });

  $( '#fBioLink' ).click( function() {
    $( '#bioPanel' ).velocity('fadeIn', { duration: 1000 });
    $( '.container-fluid' ).velocity({left: '-2560px'}, { duration: 1000, easing: [250,50] });
    $( '#middlePanel,#photoPanel' ).velocity('fadeOut', { duration: 1000 });
    $( '#floatingNav' ).velocity({left: '78%'});
    $( '.hoverShow' ).css( 'opacity', '0.0' );
  });

  $( '#fAboutSlash' ).click( function() {
    $( '#middlePanel' ).velocity('fadeIn', { duration: 1000 });
    $( '.container-fluid' ).velocity({left: '-1280px'}, { duration: 1000, easing: [250,50] });
    $( '#photoPanel,#bioPanel' ).velocity('fadeOut', { duration: 1000 });
    $( '#floatingNav' ).velocity({left: '500px'});
  });

  $( '#projectsLink' ).click( function() {
    $( '#lowercase' ).css('z-index', '1').velocity('fadeOut', { duration: 1000 });
    $( 'video' ).css( 'opacity', '0.0' );
    $( '#projectsPanel' ).css('z-index', '3').velocity('fadeIn', { duration: 1000 });
  });

});
