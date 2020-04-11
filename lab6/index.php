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
    <a href="user.php">user.php</a>
    <?php
    echo "<h1> Nasz system </h1>";

    if (isset($_POST["wyloguj"])) {
        $_SESSION["zalogowany"] = 0;
    }

    if (isset($_COOKIE["ciastko"])) {
        $cookie1 = $_COOKIE["ciastko"];
        echo "Ustawione ciastko: $cookie1";
    } else {
        echo "Brak ciastka";
    }

    ?>
    <form action="logowanie.php" method="post">
        <fieldset>
            <legend>Logowanie:</legend>
            <label for="login">Login:</label>
            <input type="text" name="login"><br>

            <label for="haslo">Hasło:</label>
            <input type="text" name="haslo"><br>

            <input type="submit" name="send" value="Zaloguj">
        </fieldset>
    </form>

    <form action="cookie.php" method="get">
        <fieldset>
            <legend>Ciastka:</legend>
            <label for="czas">Czas:</label>
            <input type="text" name="czas"><br>
            <input type="submit" name="utworzCookie" value="Utwórz Cookie">
        </fieldset>
    </form>

    <style>
        fieldset {
            display: block;
            margin-left: 2px;
            margin-right: 2px;
            padding-top: 0.35em;
            padding-bottom: 0.625em;
            padding-left: 0.75em;
            padding-right: 0.75em;
            border: 2px groove;
        }
        label {
            font-weight: bold;
        }
    </style>
</body>

</html>