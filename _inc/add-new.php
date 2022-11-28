<?php 

// include

require 'config.php';

// add new item
if( $_POST['message'] ) {

    $id = $database -> insert( 'items', [
        'text' => $_POST['message']
    ] );
} else {
    die();
}



if( $id ) {
    die('success');
}

