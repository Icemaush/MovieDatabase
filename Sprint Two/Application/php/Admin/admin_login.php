<?php
$email = $_POST["email"];
$password = $_POST["password"];

$sqlString = "SELECT Email, PasswordHash FROM administrators WHERE (Email = '$email');";

try {
    include "../Connectors/connector_users_db.php";
    $stmt = $conn->prepare($sqlString);
    $stmt->execute();
    $result = $stmt -> fetch();
    if (!empty($result)) {
        if (password_verify($password, $result["PasswordHash"])) {
            echo "OK";
        }
    }
} catch (PDOException $e) {
    echo $e;
    exit();
}

?>
