<?php 

	// Подключаем библиотеку PHPMailer
	use PHPMailer\PHPMailer\PHPMailer;
	require 'PHPMailer/PHPMailer.php';

	 

	$usertel = $_POST['surname'];
	$username = $_POST['name'];
	$usermessage = $_POST['message'];

	 
	// Создаем письмо
	$mail = new PHPMailer();
	$mail->CharSet = 'UTF-8';
	$mail->setFrom('test@domain.ru', 'Иван Иванов'); // от кого (email и имя)
	$mail->addAddress('vladis_love@mail.ru');  // кому (email и имя)
	$mail->Subject = 'Тест';                         // тема письма
	// html текст письма

	$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
	$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Заявка с сайта Caring Detailing&Restoration</h2>\r\n";
	$msg .= "<p><strong>Имя:</strong> ".$username."</p>\r\n";
	$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
	if ($usermessage) {
		$msg .= "<p><strong>Сообщение:</strong> ".$usermessage."</p>\r\n"; 
	}
	$msg .= "</body></html>";

	$mail->msgHTML($msg);
	// Отправляем
	if ($mail->send()) {
	  echo 'Письмо отправлено!';
	} else {
	  echo 'Ошибка: ' . $mail->ErrorInfo;
	}  

?>