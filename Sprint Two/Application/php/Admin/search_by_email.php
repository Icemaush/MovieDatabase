<?php

$email = $_POST["email"];
$sqlString = "SELECT * FROM members WHERE (Email = '$email');";

try {
    include "../Connectors/connector_users_db.php";
    $stmt = $conn->prepare($sqlString);
    $stmt->execute();
    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $json[] = $row;
    }

    if (!empty($json)) {
        echo json_encode($json);
    } else {
        echo null;
    }
    
} catch (PDOException $e) {
    echo $stmt . "\n" . $e.getMessage();
    exit();
}

?>