<?php session_start(); ?>
<?php
$link = mysqli_connect("localhost", "scott", "tiger", "instytut");
if (!$link) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

if (isSet($_SESSION["dodany"]) && $_SESSION["dodany"] == 1) {
    printf("Insertion succes! <br/>");
    $_SESSION["dodany"] = 0;
}

$sql = "SELECT * FROM pracownicy";
$result = $link->query($sql);
foreach ($result as $v) {
    echo $v["ID_PRAC"] . " " . $v["NAZWISKO"] . "<br/>";
}
$result->free();
$link->close();

print <<<KONIEC
<a href="form06_post.php">form06_post</a>
KONIEC;
