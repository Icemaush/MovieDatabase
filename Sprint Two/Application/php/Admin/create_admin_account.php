<?php



// Check if admin account already exists
$sqlString = "SELECT * FROM administrators WHERE (Email = 'acmemoviedb@outlook.com');";

try {
    include "../Connectors/connector_users_db.php";
    $stmt = $conn->prepare($sqlString);
    $stmt->execute();
    $result = $stmt -> fetch();
    if (empty($result)) {
        AddAdminAccount();
    } 
} catch (PDOException $e) {
    echo $e;
    exit();
}

// Add the admin account
function AddAdminAccount() {
    $email = "acmemoviedb@outlook.com";
    $password = password_hash("smtafeP@ssw0rd", PASSWORD_ARGON2I);

    $sqlString = "INSERT INTO administrators (Email, PasswordHash) VALUES
                ('" . $email . "', '" . $password . "');";

    try {
        include "../Connectors/connector_users_db.php";
        $stmt = $conn->prepare($sqlString);
        $stmt->execute();
    } catch (PDOException $e) {
        echo $e;
        exit();
    }
}

?>