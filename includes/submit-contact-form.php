<?php 
if ($_SERVER['REQUEST_METHOD'] === 'POST') { 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message']; 
    if (!empty($name) && !empty($email) && !empty($message)) { 
        $to = "admin@example.com";  
        $subject = "Новое сообщение с сайта";
        $body = "Имя: $name\nEmail: $email\nСообщение:\n$message";
        $headers = "From: $email"; 
        if (mail($to, $subject, $body, $headers)) { 
            echo "Спасибо за ваше сообщение!";
        } else { 
            echo "Ошибка при отправке сообщения.";
        }
    } else { 
        echo "Пожалуйста, заполните все поля.";
    }
} else { 
    echo "Ошибка: неверный метод запроса.";
}
?>

