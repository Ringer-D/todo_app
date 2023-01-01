(function($){

// Add form -------------------------------------------- 
let form = $('#add-form');
    list = $('#item-list');
    input = form.find('#text');
    data = [];
    purchase = localStorage.getItem( 'purchase' );
    if( !purchase ) {
        purchase = localStorage.setItem( 'purchase', JSON.stringify([]) )
    }
    itemId = $( list.find( 'li' ) );

input.val('').focus();

if( purchase ) {
    purchase = JSON.parse(purchase);

    purchase.forEach(item => {
        data.push(item);
    });
}

itemId = itemId.toArray();
if( purchase && itemId ) {
    itemId.forEach(item => {
        if( purchase.indexOf(item.id) !== -1 ) {
            $(item).addClass('green-done');
        }
    });
}

// Functions 
function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

// Settings 
let addAnimation = {
        startColor: '#00803D',
        endColor: list.find( 'li' ).css('backgroundColor') || '#1F2937',
        delay: 200
};

let clickAnimation = {
    startColor: list.find( 'li' ).css('backgroundColor'),
    endColor: '#00803D',
    delay: 200
};

form.on('submit', function(event) {
    event.preventDefault();
    
    let req = $.ajax({
        type: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        dataType: 'json'
    });
    
    req.done( function( data ) {
        if( data.status === 'success' ) {
                $.ajax({ url: baseUrl }).done( function(html) {
                    var newItem = $( html ).find( '#item-' + data.id );
                    
                    newItem.appendTo( list )
                        .css({ backgroundColor: addAnimation.startColor })
                        .delay( addAnimation.delay )
                        .animate({ backgroundColor: addAnimation.endColor });
                    
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
});


$(list.find( 'li' )).click(function ( e ) { 
    if( !purchase || !purchase.includes( this.id ) ) {
        if( !data.includes( this.id ) ) {
            data.push( this.id );
        }
        localStorage.setItem( 'purchase', JSON.stringify( data ) );
        let purchase = localStorage.getItem( 'purchase' );
        purchase = JSON.parse( purchase );
        if( purchase.indexOf( this.id ) !== -1 ) {
            $( this ).addClass( 'green-done' );
        }
    }
});

$(list.find( 'li' )).click(function (e) {
    if( !purchase.includes( this.id ) ) {
        return
    }else {
        removeA( data, this.id );
        localStorage.setItem( 'purchase', JSON.stringify(data) );
        let purchase = localStorage.getItem( 'purchase' );
        purchase = JSON.parse( purchase )
        console.log( purchase );
        if( !purchase.includes( this.id ) ) { 
            $( this ).removeClass( 'green-done' );
        }
    } 
});



// Edit Form ----------------------------------------
$( '#edit-form' ).find('#text').trigger( 'select' );

// Delete Form -------------------------------------------------
$( '#delete-form' ).on( 'submit', function( event ) {
    return confirm('Really ?');
});




}(jQuery));