/**
 * implements jQuery.on() to older version
 * did not incorporate "one" parameter as it would need jQuery.off()
 * 2019-04-03 Thomas Fellinger
 */
;(function($){
  function returnFalse() {
    return false;
  }
  function on( elem, types, selector, data, fn ) {
    var origFn, type;

    // Types can be a map of types/handlers
    if ( typeof types === "object" ) {

      // ( types-Object, selector, data )
      if ( typeof selector !== "string" ) {

	      // ( types-Object, data )
	      data = data || selector;
	      selector = undefined;
      }
      for ( type in types ) {
	      on( elem, type, selector, data, types[ type ] );
      }
      return elem;
    }

    if ( data == null && fn == null ) {

      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if ( fn == null ) {
      if ( typeof selector === "string" ) {

	      // ( types, selector, fn )
	      fn = data;
	      data = undefined;
      } else {

	      // ( types, data, fn )
	      fn = data;
	      data = selector;
	      selector = undefined;
      }
    }
    if ( fn === false ) {
      fn = returnFalse;
    } else if ( !fn ) {
      return elem;
    }
    // did not incorporate "one" parameter as it would need jQuery.off()
    return elem.each( function() {
      jQuery.event.add( this, types, fn, data, selector );
    } );
  };

  $.fn.extend( {
	  on: function( types, selector, data, fn ) {
		  return on( this, types, selector, data, fn );
	  }
  } );
})(jQuery);
