<?php

$title = $_POST["title"];
$genre = $_POST["genre"];
$rating = $_POST["rating"];
$year = $_POST["year"];
$field = $_POST["field"];
$jsonObj = new \stdClass();

CreateJSONObject($jsonObj, $title, $genre, $rating, $year);
$sqlString = CreateSQLString($jsonObj, $field);

try {
    include "../Connectors/connector_movies_db.php";
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

// Create SQL string using search parameters to query database
function CreateSQLString($object, $field)
{
    $string1 = "SELECT * FROM movies";
    $string2 = " WHERE ";
    $params = array();

    // Add key/value pair to array if not null
    foreach ($object as $key => $value) {
        if ($value != null) {
            $params[$key] = $value;
        }
    }
    
    // If no params, get all movies
    if (empty($params)) {
        return $string1 .= " ORDER BY " . $field . " DESC LIMIT 10;";
    } else {
        foreach ($params as $key => $value) {
            if ($key == "Title") {
                $string2 .= $key . " LIKE '%" . $value . "%' AND ";
            } else {
                $string2 .= $key . " = '" . $value . "' AND ";
            }
        }
        $string2 = rtrim($string2, " AND ") . " ORDER BY " . $field . " DESC LIMIT 10;";
    }

    return $string1 . $string2;    
}

// Create JSON object
function CreateJSONObject($jsonObj, $title, $genre, $rating, $year)
{
    if (!empty($title)) {
        $jsonObj->Title = $title;
    }

    if (!empty($genre)) {
        $jsonObj->Genre = $genre;
    }
    
    if (!empty($rating)) {
        $jsonObj->Rating = $rating;
    }
    
    if (!empty($year)) {
        $jsonObj->Year = $year;
    }
}

?>
