<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
    <?php
    require("funkcje.php");
    ?>
</head>

<body>
    <a href="index.php">index.php <br> </a>
    <?php
    if (isset($_SESSION["zalogowany"]) and $_SESSION["zalogowany"] == 1) {
        echo "zalogowano! <br>";
        $imieNazwisko = $_SESSION["zalogowanyImie"];
        echo "$imieNazwisko <br>";
    } else {
        header("Location: index.php");
    }
    ?>

    <?php
    if (isset($_POST["dodaj"])) {
        $currentDir = getcwd();
        $uploadDirectory = "\\zdjecia\\";
        $fileName = $_FILES["myfile"]["name"];
        $fileTmpName = $_FILES["myfile"]["tmp_name"];

        echo "$fileName <br>";
        echo "$fileTmpName <br>";

        $uploadPath = $currentDir . $uploadDirectory . $fileName;
        move_uploaded_file($fileTmpName, $uploadPath);
    }

    ?>

    <img src="zdjecia\obrazek.jpg" alt="brak obrazka">

    <form action='user.php' method='POST' enctype='multipart/form-data'>
        <input type="file" name="myfile">
        <input type="submit" name="dodaj" value="Dodaj plik">
    </form>

    <form action="index.php" method="post">
        <input type="submit" name="wyloguj" value="Wyloguj">
    </form>
</body>

</html>