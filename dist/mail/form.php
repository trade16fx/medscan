<?php
$sendto   = "info@caringdetailing.ru, vladis_love@mail.ru"; 
// $sendto   = "vladis_love@mail.ru"; 
$usertel = $_POST['surname'];
$username = $_POST['name'];
$usermessage = $_POST['message'];

// $content  = nl2br($_POST['mail']);
// Формирование заголовка письма
$subject  = "Заявка с сайта Caring Detailing&Restoration";
$headers  = "From: info@caringdetailing.ru" . "\r\n";
$headers .= "Reply-To: info@caringdetailing.ru" . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Заявка с сайта Caring Detailing&Restoration</h2>\r\n";


$msg .= "<p><strong>Имя:</strong> ".$username."</p>\r\n";

$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n"; 
if ($usermessage) {
	$msg .= "<p><strong>Сообщение:</strong> ".$usermessage."</p>\r\n"; 
}

$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}

?>