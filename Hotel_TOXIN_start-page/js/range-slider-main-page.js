$( function() {
  $( "#price-range__levels" ).slider({
    range: true,
    min: 0,
    max: 10000,
    values: [ 1500, 4500 ],
    slide: function( event, ui ) {
      $( "#price-range__input" ).val(ui.values[ 0 ] + " P" + " - " + ui.values[ 1 ] + " P");
    }
  });
  $( "#price-range__input" ).val($( "#price-range__levels" ).slider( "values", 0 ) +
    " P" + " - " + $( "#price-range__levels" ).slider( "values", 1 ) + " P");
} );