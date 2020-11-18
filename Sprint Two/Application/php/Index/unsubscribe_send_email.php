<?php

$userEmail = $_POST["userEmail"];
$adminEmail = "acmemoviedb@outlook.com";
$subscriptionsEmail = "acme.subscriptions@outlook.com";


/* Namespace alias. */
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/* Include the Composer generated autoload.php file. */
//require 'G:\Programming\xampp\composer\vendor\autoload.php';

/* If you installed PHPMailer without Composer do this instead: */

require '..\Mail\Exception.php';
require '..\Mail\PHPMailer.php';
require '..\Mail\SMTP.php';


/* Create a new PHPMailer object. Passing TRUE to the constructor enables exceptions. */
$mail = new PHPMailer(TRUE);

/* Open the try/catch block. */
try {
   
    $mail->setFrom($subscriptionsEmail); /* Set the mail sender. */
    $mail->addAddress($adminEmail, 'Administrator'); /* Add a recipient. */
    $mail->Subject = 'Unsubscribe Request'; /* Set the subject. */
    $mail->Body = "'" . $userEmail . "' has requested to unsubscribe from Acme Movie DB communications."; /* Set the mail message body. */

    /* SMTP Parameters */
    $mail->isSMTP(); /* Tells PHPMailer to use SMTP. */
    $mail->Host = "smtp.office365.com";
    $mail->SMTPAuth = TRUE;
    $mail->SMTPSecure = "starttls";
    $mail->Username = "acme.subscriptions@outlook.com";
    $mail->Password = "smtafeP@ssw0rd";
    $mail->Port = 587;

    $mail->SMTPDebug = 4;

    $mail->send(); /* Finally send the mail. */

    echo "email sent";
}
catch (Exception $e)
{
   /* PHPMailer exception. */
   echo $e->errorMessage();
}
catch (\Exception $e)
{
   /* PHP exception (note the backslash to select the global namespace Exception class). */
   echo $e->getMessage();
}


?>