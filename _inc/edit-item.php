<?php 

// include

require_once 'config.php';

// update item

    $affected = $database -> update( 'items', [
        'text' => $_POST[ 'message' ]
    ], [
        'id' => $_POST[ 'id' ]
    ]);




if( $affected ) {
    header("Location: $base_url/index.php");
}