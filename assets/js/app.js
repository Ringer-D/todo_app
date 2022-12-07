(function($){

// Add form -------------------------------------------- 
let form = $('#add-form');
    list = $('#item-list');
    input = form.find('#text');

input.val('').focus();

// Settings 
let animation = {
        startColor: '#00803D',
        endColor: list.find( 'li' ).css('backgroundColor') || '#1F2937',
        delay: 200
};

form.on('submit', function(event) {
    event.preventDefault();
    
    let req = $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize()
    });
    
    req.done( function( data ) {
        if( data === 'success' ) {
                $.ajax({ url: baseUrl }).done( function(html) {
                    var newItem = $( html ).find( 'li:last-child' );
                    
                    newItem.appendTo( list )
                        .css({ backgroundColor: animation.startColor })
                        .delay( animation.delay )
                        .animate({ backgroundColor: animation.endColor });
                    
                    input.val('');
                });
        };
    });
});

input.keypress( function(event) {
    if( event.which === 13 ) {
        form.trigger('submit');
        return false;
    }
})

// Edit Form ----------------------------------------
$( '#edit-form' ).find('#text').trigger('select');

// Delete Form -------------------------------------------------
$( '#delete-form' ).on( 'submit', function( event ) {
    return confirm('Really ?');
});




}(jQuery));