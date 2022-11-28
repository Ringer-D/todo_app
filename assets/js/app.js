(function($){

var form = $('#add-form');
    input = $('#text');

form.on('submit', function(event) {
    event.preventDefault();
    
    var req = $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize()
    });
    
    req.done( function( data ) {
        if( data === 'success' ) {
        
            var li = $( '<li class="p-1 pl-2 mb-1 border border-white/[.20] rounded"> '+ input.val() +' </li>' );

            li.hide()
                .appendTo('.list-group')
                .fadeIn();

        };
    });
});


}(jQuery));