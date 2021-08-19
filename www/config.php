<?php
/* Database credentials. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$DB_SERVER="localhost";
$DB_USERNAME="root";
$DB_PASSWORD="";
$DB_NAME="www";

/* Attempt to connect to MySQL database */
if(!$con = mysqli_connect($DB_SERVER,$DB_USERNAME,$DB_PASSWORD,$DB_NAME)){
    die("Failed to connect!");
}
?>