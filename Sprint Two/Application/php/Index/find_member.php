<?php

$userEmail = $_POST["userEmail"];
$sqlString = "SELECT * FROM members WHERE (Email = '$userEmail');";

try {
    include "../Connectors/connector_users_db.php";
    $stmt = $conn->prepare($sqlString);
    $stmt->execute();
    $result = $stmt -> fetch();

    if (!empty($result)) {
        echo "OK";
    }
    
} catch (PDOException $e) {
    exit();
}

?>