$( document ).ready( function() {

  var $letters = $( '.hot' ),
    flickers = [6, 8, 10, 12, 14, 16],
    $randomLetter,
    flickerNumber, jFlickerNumber,
    counter, jCounter;

  function randomFromInterval(from,to) {
    return Math.floor(Math.random()*(to - from + 1) + from);
  }

  function flicker( element, counter ) {    
    counter += 1;
    
    if (counter === flickerNumber) {
      return;
    }

    setTimeout(function () {
      element.toggleClass( 'off' );
      flicker( element, counter );
    }, 30);
  }

  (function loop() {
    var rand = randomFromInterval(500,3000);

    $randomLetter = $( '.hot' ).eq( randomFromInterval( 0, $letters.length - 1 ));
    
    flickerNumber = flickers[ randomFromInterval(0, flickers.length - 1) ];
    // console.log( 'randomLetter : ' + $randomLetter.children().eq(0).html() +'; flickerNumber : ' + flickerNumber );

    setTimeout(function() {
      counter = 0;
      flicker( $randomLetter, counter );
      loop();  
    }, rand);
  }());

  (function jiveLoop() {
    var jrand = randomFromInterval(500,3000);

    jFlickerNumber = flickers[ randomFromInterval(0, flickers.length - 1) ];

    setTimeout( function() {
      jcounter = 0;
      flicker( $( '.jive' ), jcounter );
      jiveLoop();
    }, jrand);
  }());
  
});