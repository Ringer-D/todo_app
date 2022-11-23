<?php

// show all errors

ini_set('display_startup_errors', 'On');
ini_set('display_errors', 'On');
error_reporting(-1);

// require

require_once 'vendor/autoload.php';

use Medoo\Medoo;

// connect to DB

$database = new Medoo([
	// [required]
	'type' => 'mysql',
	'host' => 'localhost',
	'database' => 'todo',
	'username' => 'root',
	'password' => 'root',
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_general_ci',

]);
