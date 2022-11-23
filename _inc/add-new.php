<?php 

// include

require 'config.php';

// add new item

$id = $database -> insert( 'items', [
    'text' => $_POST['message']
] );

if( $id ) {
    echo 'SENDED FUCK YEAH !'?><br><?php ;
    $html = '<a href="/todo_app">back home</a>';
    echo $html;
}

