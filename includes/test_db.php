<?php
$conn = pg_connect("host=localhost dbname=momol user=postgres password=1");
if (!$conn) {
    die("Ошибка подключения: " . pg_last_error());
}
echo "Подключение к PostgreSQL успешно!";
pg_close($conn);
?>

