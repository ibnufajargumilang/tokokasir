<?php
include "config.php";
if(isset($_POST['username']) && isset($_POST['password'])) {
    $username = strtolower($_POST['username']);
    $password = strtolower($_POST['password']);

    $cekLogin = mysqli_query($conn, "SELECT * FROM db_login WHERE username='$username' AND password='$password'") or die (mysqli_error($conn));
    
    if(mysqli_num_rows($cekLogin) > 0){
        $row = mysqli_fetch_array($cekLogin);
        $thisUser = strtolower($row["username"]);
        $thisPass = strtolower($row["password"]);
        $thisSesi = strtolower($row["akses"]);

        if($username === $thisUser && $password === $thisPass) {
            $response = array('success' => true, 'message' => 'Login berhasil.');
        }
    }else{
        // Jika tidak ada baris yang cocok, username atau password salah
        $response = array('success' => false, 'message' => 'Username atau password salah.');
    }

    echo json_encode($response);
}
?>
