
$( "form" ).submit(function( event ) {
    console.log("successful run on jquery submit")
  console.log( $( this ).serializeArray() );
  event.preventDefault();
  $("form").trigger("reset");
});