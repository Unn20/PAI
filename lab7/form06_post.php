<?php session_start(); ?>
<?php
$link = mysqli_connect("localhost", "scott", "tiger", "instytut");
if (!$link) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

print <<<KONIEC
 <html>
 <head>
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
 </head>
 <body>
 <form action="form06_redirect.php" method="POST">
 id_prac <input type="text" name="id_prac">
 nazwisko <input type="text" name="nazwisko">
 <input type="submit" value="Wstaw">
 <input type="reset" value="Wyczysc">
 </form>
 <a href="form06_get.php">form06_get</a>
KONIEC;

if (isSet($_SESSION["blad1"]) && $_SESSION["blad1"] == 1) {
    printf("<br> Wystąpił błąd przy dodawaniu rekordu! <br>");
    printf("Nie uzupełnione pola dodawanego rekordu <br>");
    $_SESSION["blad1"] = 0;
}
if (isSet($_SESSION["blad2"]) && $_SESSION["blad2"] == 1) {
    printf("<br> Wystąpił błąd przy dodawaniu rekordu! <br>");
    printf($_SESSION["bladInfo"]);
    printf("<br>");
    $_SESSION["bladInfo"] = "";
    $_SESSION["blad2"] = 0;
}