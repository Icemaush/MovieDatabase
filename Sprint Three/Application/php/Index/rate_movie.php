<?php

$title = $_POST["title"];
$score = $_POST["score"];

$sqlString = "UPDATE movies SET $score" . "Star = $score" . "Star + 1 WHERE Title = '$title';";

try {
    include "../Connectors/connector_movies_db.php";
    $stmt = $conn->prepare($sqlString);
    $stmt->execute();
    echo "rate_movie OK";
} catch (PDOException $e) {

    exit();
}

require "./update_average_score.php";

?>
