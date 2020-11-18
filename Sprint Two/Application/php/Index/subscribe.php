<?php

$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$email = $_POST["email"];
$newsletter = $_POST["newsletter"];
$breakingNews = $_POST["breakingNews"];
$pendingRemoval = "no";

$sqlString = "INSERT INTO members (FirstName, LastName, Email, Newsletter, BreakingNews, PendingRemoval) VALUES
                ('" . $firstName . "', '" . $lastName . "', '" . $email . "', '" . $newsletter . "', '" . $breakingNews . "', '" . $pendingRemoval . "');";

try {
    include "../Connectors/connector_users_db.php";
    $stmt = $conn->prepare($sqlString);
    $stmt->execute();
    echo "OK";
} catch (PDOException $e) {

    exit();
}

?>
