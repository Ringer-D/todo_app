<?php 

// include

require_once 'config.php';

// check password
if( $_POST['password'] ) {

    $pass = $database -> get( 'login', 'password');
} else {
    die();
}



if( $pass === $_POST[ 'password' ] ) {
    header("Location: $site_url");
}
