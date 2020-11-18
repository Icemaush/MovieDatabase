<?php

$userEmail = $_POST["userEmail"];

$sqlString = "UPDATE members SET PendingRemoval = 'yes' WHERE Email = '" . $userEmail . "';";

try {
    include "../Connectors/connector_users_db.php";
    $stmt = $conn->prepare($sqlString);
    $stmt->execute();
    echo "OK";
} catch (PDOException $e) {
    exit();
}

?>