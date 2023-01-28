<?php


$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "lorenzoronconi60@gmail.com";

mail($recipient, $subject, $message, $mailheader)
or die("Error : invio non riuscito");

echo'

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contattami</title>
</head>
<body>
    <div class="contattami-post">
        <h1>Grazie per avermi contattato, ti risponderò il prima possibile!</h1>
        <p class="back">
            Torna alla <a href="index.html">pagina</a>
        </p>
    </div>
</body>
</html>

';

?>