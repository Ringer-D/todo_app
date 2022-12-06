(function($){

// Add form -------------------------------------------- 
var form = $('#add-form');
    input = form.find('#text');

input.val('').focus();

form.on('submit', function(event) {
    event.preventDefault();
    
    var req = $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize()
    });
    
    req.done( function( data ) {
        if( data === 'success' ) {
        
            
        
                
                $.ajax({ url: '/todo_app/add.php' }).done( function(html) {
                    var newItem = $( html ).find( 'li:last-child' );
                    
                    newItem.appendTo('.list-group')
                        .css({ backgroundColor: '#00803D' })
                        .delay(200)
                        .animate({ backgroundColor: '#1F2937' });
                    
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