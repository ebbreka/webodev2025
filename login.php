<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $sifre = $_POST['sifre'];

    if ($email === "b231210026@sakarya.edu.tr" && $sifre === "123456") {
        header("Location: basarılı.html");
        exit();
    } else {
        header("Location: hatalı.html");
        exit();
    }
}
?>