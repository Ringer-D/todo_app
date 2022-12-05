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
        
            if( input.val() ) {
                
                var li = $( '<li class="p-1 pl-2 mb-1 flex flex-row justify-between items-center border border-white/[.20] rounded"> '+ input.val() +' <div class="control flex flex-row items-center"> <a href="edit.php?id=" class="edit-link mr-2 p-1 text-sm text-green-700 hover:font-medium no-underline">edit</a> <a href="delete.php?id=" class="delete-link p-1 text-gray-400 hover:text-red-500 relative top-0.5 no-underline"><span class="material-symbols-outlined">delete</span></a> </div> </li>' );
                
                li.appendTo('.list-group')
                    .css({ backgroundColor: '#00803D' })
                    .delay(200)
                    .animate({ backgroundColor: '#1F2937' });
                
                input.val('');
            };


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

}(jQuery));