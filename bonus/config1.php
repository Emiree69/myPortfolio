<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
$db_hostname = 'localhost:3306';
$db_username = 'db_090029';
$db_password = 'Emm@&Teem0';
$db_database = '090029_db';

$mysqli = mysqli_connect($db_hostname, $db_username, $db_password, $db_database);

if (!$myqli){
    echo "FOUT: geen connectie naar database. <br>";
    echo "Error: " . mysqli_connect_error() . "<br/>";
    echo "Errno: " . mysqli_connect_error() . "<br/>";
}