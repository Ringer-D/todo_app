<?php 

// include

require_once 'config.php';

// delete item

    $deleted = $database -> delete( 'items', [ 'id' => $_POST[ 'id' ] ]);




if( $deleted ) {
    header("Location: $base_url/index.php");
}