<?php
$conn = pg_connect("host=127.0.0.1 dbname=momol user=postgres password=1")
   or die("Connection error: " . pg_last_error());
?>
