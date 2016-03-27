$( document ).ready( function() {

  var $letters = $( '.hot' ),
    flickers = [5, 7, 9, 11, 13, 15, 17],
    $randomLetter,
    flickerNumber,
    counter;

  function randomFromInterval(from,to) {
    return Math.floor(Math.random()*(to-from+1)+from);
  }

  function flicker() {    
    counter += 1;
    
    if (counter === flickerNumber) {
      return;
    }

    setTimeout(function () {
      $randomLetter.toggleClass( 'off' );
      flicker();
    }, 30);
  }

  (function loop() {
    var rand = randomFromInterval(500,3000);

    $randomLetter = $( '.hot' ).eq( randomFromInterval( 0, $letters.length - 1 ));
    // console.log( "randomLetter " + randomLetter.html() );
    
    flickerNumber = flickers[ randomFromInterval(0, flickers.length - 1) ];

    setTimeout(function() {
      counter = 0;
      flicker();
      loop();  
    }, rand);
  }());

});