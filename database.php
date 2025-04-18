<?php
$host = 'localhost';
$port = '8889'; 
$dbname = 'chat';
$username = 'root';
$password = 'root'; 

try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8mb4", $username, $password);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}
?>
