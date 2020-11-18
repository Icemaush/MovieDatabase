<?php
$email = $_POST["email"];

$sqlString = "DELETE FROM members WHERE Email = '" . $email . "';";

try {
    include "../Connectors/connector_users_db.php";
    $stmt = $conn->prepare($sqlString);
    $stmt->execute();
    echo "OK";
} catch (PDOException $e) {

    exit();
}

?>
