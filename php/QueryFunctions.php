<?php

    function getTaskID($taskName)
    {
        require_once 'dbOperations.php';
    
        // connectDB method connects to the database with the proper credentials.
         
        $connection = connectDB();
        if($connection->connect_error) die ("Unable to connect to database".$connection->connect_error);

        $message = '';

        $json = json_decode(file_get_contents('php://input'), true);

        $query = "SELECT taskID, taskName FROM tasks WHERE taskName = '$taskName'";

        //Run the query to insert the data into the Database
        $query_result = $connection->query($query);

        if ($query_result->num_rows > 0)
        {
            // output data of each row
            $rows = array();
            while($row = $query_result->fetch_assoc())
            {
                $rows[] = $row;
            }
            echo json_encode($rows);
            return $rows;
        } 
        else
        {
            echo json_encode("0 Results");
        }

        $connection->close();
    }

    function getSubTasks($taskID)
    {
        require_once 'dbOperations.php';
    
        // connectDB method connects to the database with the proper credentials.
         
        $connection = connectDB();
        if($connection->connect_error) die ("Unable to connect to database".$connection->connect_error);

        $message = '';

        $json = json_decode(file_get_contents('php://input'), true);

        $query = "SELECT $taskID, taskName FROM tasks WHERE taskName != '$json[taskName]'";

        //Run the query to insert the data into the Database
        $query_result = $connection->query($query);

        if ($query_result->num_rows > 0)
        {
            // output data of each row
            $rows = array();
            while($row = $query_result->fetch_assoc())
            {
                $rows[] = $row;
            }
            echo json_encode($rows);
        } 
    
        else
        {
            echo json_encode("0 Results");
        }

        $connection->close();
    }

    function deleteTask($taskID)
    {
        require_once 'dbOperations.php';
    
        // connectDB method connects to the database with the proper credentials.
         
        $connection = connectDB();
        if($connection->connect_error) die ("Unable to connect to database".$connection->connect_error);

        $message = '';

        $json = json_decode(file_get_contents('php://input'), true);

        $query = "DELETE FROM tasks WHERE taskID = $taskID";

        //Run the query to insert the data into the Database
        $query_result = $connection->query($query);

        if ($query_result === true)
        {
            $message = 'Success! Task has been deleted';
            return $message;
        }

        else
        {
            $message = 'Error! Try Again.';
        }

        echo json_encode($message);

        $connection->close();
    }

    function deleteMultipleTasks($taskIDArray)
    {
        require_once 'dbOperations.php';
        
        var entriesDeleted = 0;
    
        // connectDB method connects to the database with the proper credentials.
         
        $connection = connectDB();
        if($connection->connect_error) die ("Unable to connect to database".$connection->connect_error);

        $message = '';

        // Runs a query for each task ID listed in the array.
        
//**************THIS MAY NOT BE THE MOST EFFICIENT WAY AND MAY NEED TO BE CHANGED!!!********************
        
        for(var i = 0; i < $taskIDArray; i++)
        {
        
            $json = json_decode(file_get_contents('php://input'), true);
            
            $query = "DELETE FROM tasks WHERE taskID = $taskIDArray[i]";

            //Run the query to insert the data into the Database
            $query_result = $connection->query($query);

            if ($query_result === true)
            {
                entriesDeleted += 1;
            }
        }
        if (entriesDeleted >= 1)
        {
            $message = 'Success!'.entriesDeleted.' tasks has been deleted';
            return $message;
        }
        else
        {
            $message = 'Error! Try Again.';
        }

        echo json_encode($message);

        $connection->close();
    }

    
?>