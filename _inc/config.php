<?php

// show all errors

ini_set('display_startup_errors', 'On');
ini_set('display_errors', 'On');
error_reporting(-1);

// require

require_once 'vendor/autoload.php';

// whoops errors
$whoops = new \Whoops\Run;
$whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler);
$whoops->register();

//global variables
$site_url = 'http://localhost/todo_app';

// connect to DB
use Medoo\Medoo;

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
