(function($){

// Add form -------------------------------------------- 
let form = $('#add-form');
    list = $('#item-list');
    input = form.find('#text');

input.val('').focus();

// Done animate with local storage ------------------------------ 
let arrId = [];
    purchase = localStorage.getItem( 'purchase' );
    itemId = $( list.find( 'li' ) );
    
if( window.location.href === baseUrl + '/' || window.location.href.indexOf( "index.php" ) > -1 ) {
    if( !purchase || !itemId.length ) {
        localStorage.setItem( 'purchase', JSON.stringify([]) );
    }
}

if( purchase ) {
    purchase = JSON.parse(purchase);

    purchase.forEach(item => {
        arrId.push(item);
    });
}

itemId = itemId.toArray();
if( purchase && itemId ) {
    itemId.forEach(item => {
        if( purchase.includes( item.id ) ) {
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
    color: list.find( 'li' ).css('backgroundColor') || '#1F2937',
    colorDone: '#00803D',
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
                    let newItem = $( html ).find( '#item-' + data.id );
                    
                    newItem.appendTo( list )
                        .css({ backgroundColor: addAnimation.startColor })
                        .delay( addAnimation.delay )
                        .animate({ backgroundColor: addAnimation.endColor });
                    
                    input.val('');

                    newItem.click(function ( e ) { 
                        let purchase = localStorage.getItem( 'purchase' );
                        purchase = JSON.parse( purchase );
                        if( !purchase || !purchase.includes( this.id ) ) {
                            if( !arrId.includes( this.id ) ) {
                                arrId.push( this.id );
                            }
                            localStorage.setItem( 'purchase', JSON.stringify( arrId ) );
                            purchase = localStorage.getItem( 'purchase' );
                            purchase = JSON.parse( purchase );
                            if( purchase.includes( this.id ) ) {
                                console.log(this);
                                $( this ).addClass( 'green-done' ).css({ backgroundColor: clickAnimation.colorDone });
                            }
                        }else {
                            removeA( arrId, this.id );
                            localStorage.setItem( 'purchase', JSON.stringify( arrId ) );
                            purchase = localStorage.getItem( 'purchase' );
                            purchase = JSON.parse( purchase )
                            if( !purchase.includes( this.id ) ) { 
                                console.log(this);
                                $( this ).removeClass( 'green-done' ).css({ backgroundColor: clickAnimation.color });
                            }
                        }
                    });
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
    let purchase = localStorage.getItem( 'purchase' );
    purchase = JSON.parse( purchase );
    if( !purchase || !purchase.includes( this.id ) ) {
        if( !arrId.includes( this.id ) ) {
            arrId.push( this.id );
        }
        localStorage.setItem( 'purchase', JSON.stringify( arrId ) );
        purchase = localStorage.getItem( 'purchase' );
        purchase = JSON.parse( purchase );
        if( purchase.includes( this.id ) ) {
            $( this ).addClass( 'green-done' );
        }
    }else {
        removeA( arrId, this.id );
        localStorage.setItem( 'purchase', JSON.stringify( arrId ) );
        purchase = localStorage.getItem( 'purchase' );
        purchase = JSON.parse( purchase )
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