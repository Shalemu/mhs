<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if($_SERVER["REQUEST_METHOD"] == "POST") {

    // Collect form data
    $service = htmlspecialchars($_POST['service']);
    $fullname = htmlspecialchars($_POST['fullname']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Create email content
    $body = "
    <h2>New Contact Form Submission</h2>
    <p><strong>Service:</strong> $service</p>
    <p><strong>Name:</strong> $fullname</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Phone:</strong> $phone</p>
    <p><strong>Message:</strong><br>$message</p>
    ";

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'mail.mhsconsults.co.tz'; 
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@mhsconsults.co.tz'; 
        $mail->Password   = 'EMAIL_PASSWORD';    
        $mail->SMTPSecure = 'ssl';                   
        $mail->Port       = 465;                     

        //Recipients
        $mail->setFrom('info@mhsconsults.co.tz', 'MHS Consults Website');
        $mail->addAddress('info@mhsconsults.co.tz');  // where you want to receive messages
        $mail->addReplyTo($email, $fullname);

        //Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body    = $body;

        $mail->send();
        echo "<script>alert('Message sent successfully!'); window.location='index.html#contact';</script>";
    } catch (Exception $e) {
        echo "<script>alert('Message could not be sent. Mailer Error: {$mail->ErrorInfo}'); window.location='index.html#contact';</script>";
    }
}
?>
