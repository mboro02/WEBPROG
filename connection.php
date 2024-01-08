<?php

$dbhost = "mysql.caesar.elte.hu";
$dbuser = "bml320";
$dbpass = "MnR6GKPByNHpCuiW";
$dbname = "bml320";

if(!$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname))
{

	die("failed to connect!");
}
