<?php 
session_start();

	include("connection.php");
	include("functions.php");

	$user_data = check_login($con);

?>

<!DOCTYPE html>
<html>
<head>
	<title>Belépősdi</title>
</head>
<body>

	<a href="logout.php">Kilépés</a>
	<h1>Ügyes vagy!</h1>

	<br>
	Szia <?php echo $user_data['user_name']; ?>
</body>
</html>