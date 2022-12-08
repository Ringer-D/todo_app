<?php 

// include

require_once 'config.php';

// add new item
if( $_POST['message'] ) {

    $id = $database -> insert( 'items', [
        'text' => $_POST['message']
    ] );
    $newId = $database -> id();
} else {
    die();
}



if( $id ) {
    $message = json_encode([
        'status'    => 'success',
        'id'        => $newId
         
    ]);

    die( $message );
}

