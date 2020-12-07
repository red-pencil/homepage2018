
/* pallette */
function hexFromHSL(h, s, l) {
var hex = [
  h.toString(),
  s.toString(),
  l.toString()
];
$.each( hex, function( nr, val ) {
  if ( val.length === 1 ) {
    hex[ nr ] = "0" + val;
  }
});
return hex.join( "" ).toUpperCase();
}
function refreshSwatch() {
var hue = $( "#hue" ).slider( "value" ),
  sat = $( "#sat" ).slider( "value" ),
  lig = $( "#lig" ).slider( "value" )
$( "#swatch" ).css( "background-color", "hsla(" + hue + ", 100%, 65.7%, 100%)" );
$( ".container-fluid" ).css( "background-color", "hsla(" + hue + ", 100%, 65.7%, 100%)" );

}
$(function() {
$( "#hue, #sat, #lig" ).slider({
  orientation: "horizontal",
  range: "min",
  max: 255,
  value: 127,
  slide: refreshSwatch,
  change: refreshSwatch
});
$( "#hue" ).slider( "value", 16 );
$( "#sat" ).slider( "value", 0 );
$( "#lig" ).slider( "value", 0 );
});
