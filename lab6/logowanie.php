<?php session_start(); ?>
<?php
require("funkcje.php");


if (isset($_POST["send"])) {
    $name = $_POST['login'];
    $password = $_POST['haslo'];
    if (test_input($name)) {
        //echo "Przesłany login: $name <br>";
    }
    if (test_input($password)) {
        //echo "Przesłane hasło: $password <br>";
    }

    if ($name == $osoba1->login and $password == $osoba1->haslo) {
        $_SESSION["zalogowanyImie"] = $osoba1->imieNazwisko;
        $_SESSION["zalogowany"] = 1;
        header("Location: user.php");
    }

    else if ($name == $osoba2->login and $password == $osoba2->haslo) {
        $_SESSION["zalogowanyImie"] = $osoba2->imieNazwisko;
        $_SESSION["zalogowany"] = 1;
        header("Location: user.php");
    }
    
    else {
        header("Location: index.php");
    }
}
