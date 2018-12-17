<?php
function connectDB()
{
	$server="a2plcpnl0398.prod.iad2.secureserver.net";
	$db="TeamTask";
	$user="ttadminaccess";
	$pwd="n&3!R8n3Z)&s";
	$connection=new mysqli($server,$user,$pwd, $db);
	return $connection;
}
function closeConnection($result, $connection)
{
	$result->close();
	$connection->close();
}
?>