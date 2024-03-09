<?php
$conhost = "localhost";
$conname = "sistem_kasir";
$conuser = "root";
$conpass = "";

$conn = new mysqli($conhost, $conuser, $conpass, $conname);

if($conn->connect_error){
    die("Koneksi Gagal : ". $conn->connect_error);
}
?>