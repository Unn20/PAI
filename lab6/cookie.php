<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
    <?php
        require_once("funkcje.php");
    ?>
</head>

<body>
    <a href="index.php">index.php <br> </a>
    <?php

    if (isset($_GET["czas"]) and is_numeric($_GET["czas"])) {
        setcookie("ciastko", "ciasteczko", time() + $_GET["czas"], "/");
        echo "Dodano ciastko! <br>";
    }
    ?>
</body>

</html>