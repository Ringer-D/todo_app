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
    header("Location: $site_url/index.php");
}