<?php
$servername = "localhost";
$dbname = "users_db";
$user = "root";
$pw = "";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $user, $pw);
    // Set PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
