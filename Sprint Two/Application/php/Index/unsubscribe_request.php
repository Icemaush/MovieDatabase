<?php
$from = "rpieri@live.com.au";
$sendTo = "acmemoviedb@outlook.com";
$subject = "Unsubscribe Request";
$okMessage = "Sorry to see you go! You are now unsubscribed from Acme Movie DB communications.";
$errorMessage = "An error has occurred. Please try again later.";
$message = "User '" . $from . "' has requested to unsubscribe from Acme Movie DB's communication.";

try {
    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To ' . $from,
        'Return-Path: ' . $from
    );

    mail($sendTo, $subject, $message, implode("\n", $headers));
    echo $okMessage;
} catch (Exception $e) {
    echo $e;
    echo $errorMessage;
    exit();
}


$sqlString = "UPDATE members SET PendingRemoval = 'yes' WHERE Email = '" . $email . "';";

try {
    include "../Connectors/connector_users_db.php";
    $stmt = $conn->prepare($sqlString);
    $stmt->execute();
    echo "OK";
} catch (PDOException $e) {

    exit();
}

?>
