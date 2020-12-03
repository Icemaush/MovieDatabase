<?php

$sqlString = "SELECT 1Star, 2Star, 3Star, 4Star, 5Star FROM movies WHERE Title = '$title';";

try {
    include "../Connectors/connector_movies_db.php";
    $stmt = $conn->prepare($sqlString);
    $stmt->execute();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $json[] = $row;
    }


    foreach ($json as $row) {
        $oneStar = $row["1Star"];
        $twoStar = $row["2Star"];
        $threeStar = $row["3Star"];
        $fourStar = $row["4Star"];
        $fiveStar = $row["5Star"];
    }

    
    $totalRatings = $oneStar + $twoStar + $threeStar + $fourStar + $fiveStar;

    $averageScore = (($oneStar * 1) + ($twoStar * 2) + ($threeStar * 3) + ($fourStar * 4) + ($fiveStar * 5)) / $totalRatings;
    $averageScore = round($averageScore, 1);

    $formattedAverageScore = number_format($averageScore, 1);

    $sqlString = "UPDATE movies SET AverageScore = $formattedAverageScore WHERE Title = '$title';";
    $stmt = $conn->prepare($sqlString);
    $stmt->execute();

    echo "OK";
} catch (PDOException $e) {

    exit();
}

?>
