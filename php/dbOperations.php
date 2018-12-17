<?php
function connectDB()
{
	$server="localhost";
	$db="TeamTask";
	$user="tasktest";
	$pwd="balls";
	$connection=new mysqli($server,$user,$pwd, $db);
	return $connection;
}
function closeConnection($result, $connection)
{
	$result->close();
	$connection->close();
}
?>