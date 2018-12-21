<?php

    require_once 'dbOperations.php';
    
    // connectDB method connects to the database with the proper credentials.
    // 
    $connection = connectDB();
    if($connection->connect_error) die ("Unable to connect to database".$connection->connect_error);

    $message = '';

    $json = json_decode(file_get_contents('php://input'), true);

    $query = "SELECT taskName FROM tasks WHERE taskName!='$json[taskName]'";

    //Run the query to insert the data into the Database
    $query_result = $connection->query($query);

    if ($query_result->num_rows > 0) {
    // output data of each row
        $rows = array();
        while($row = $query_result->fetch_assoc()) {
            $rows[] = $row;
        }
        echo json_encode($rows);
    } 
    else {
        echo json_encode("0 Results");
    }

    $connection->close();

?>