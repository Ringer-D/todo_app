<?php 

// include

require 'config.php';

// add new item

$id = $database -> insert( 'items', [
    'text' => $_POST['message']
] );

if( $id ) {
    die('success');
}

