(function($){

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
                
                var li = $( '<li class="p-1 pl-2 mb-1 border border-white/[.20] rounded"> '+ input.val() +' </li>' );
                
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
        form.submit();
        return false;
    }
})


}(jQuery));