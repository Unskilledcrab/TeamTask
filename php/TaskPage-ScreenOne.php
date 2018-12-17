<?php

    require_once 'dbOperations.php';
    
    $connection = connectDB();
    if($connection->connect_error) die ("Unable to connect to database".$connection->connect_error);

    
?>