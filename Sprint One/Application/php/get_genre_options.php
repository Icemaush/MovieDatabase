<?php

require "connector.php";

try {
    $stmt = $conn->prepare("SELECT DISTINCT Genre FROM movies;");
    $stmt->execute();
    
    while (!empty($row = $stmt->fetch())) {
        $json[] = $row;
    }

    usort(
        $json, function ($a, $b) {
            return $a["Genre"] < $b["Genre"] ? -1 : 1;
        }
    );

    echo json_encode($json);
} catch (PDOException $e) {
    echo "Unable to get data:\n" . $e->getMessage();
}

?>
