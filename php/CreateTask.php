<?php

    require_once 'dbOperations.php';
    
    // connectDB method connects to the database with the proper credentials.
    // 
    $connection = connectDB();
    if($connection->connect_error) die ("Unable to connect to database".$connection->connect_error);

    $message = '';

    $json = json_decode(file_get_contents('php://input'), true);

    
    $query = "INSERT INTO 
    tasks(taskName, description, daysToComplete, parentTaskID, dueDate, signOffPersonnelID, priority, frequencyID, taskAssignedID) 
    values('$json[taskName]', '$json[taskDescription]', $json[daysToComplete], $json[subTasks], $json[dueDate], $json[signOffPersonnel], $json[priority],                     $json[frequency], $json[assignedPersonnel])";

    /*
    $query = "INSERT INTO 
    tasks(taskName, description, daysToComplete, parentTaskID, dueDate, signOffPersonnelID, priority, frequencyID, taskAssignedID) 
    values('Ten', 'Tester dexcr', 2, 4, '20120618 10:34:09 AM', 3, 5, 6, 7)";
    */

    //Run the query to insert the data into the Database
    $query_result = $connection->query($query);

    if ($query_result === true)
    {
     $message = 'Success!';
    }

    else
    {
     $message = 'Error! Try Again.';
    }

    echo json_encode($message);

    $connection->close();
?>