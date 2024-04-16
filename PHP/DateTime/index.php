<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[PHP] Data i Czas</title>
    <style>
        html, body {
            background-color: #0d1117;
            color: #FFF;
            font-family: monospace;
            margin: 0;
            padding: 0.25rem 0.5rem;
            color-scheme: light dark;
        }
    </style>
</head>
<body>
    <h2>[PHP] Data i Czas</h2><hr>
    <!-- KORZYSTANIE Z CZASU -->
    <?php
        $t = time();
        echo "<p>EPOCH Time: " . $t . "</p>";
        echo "<pre>";
        print_r(getdate($t));
        echo "</pre>";
    ?>
    <hr>
    <!-- KORZYSTANIE Z DATY -->
    <?php
        echo "<p>Dzisiaj jest: " . date("d/m/Y") . "</p>";
        echo "<p>Dzień tygodnia: " . date("l") . "</p>";
        echo "<p>Czas: " . date("H:i:s") . "</p>";
    ?>
    <hr>
    <!-- FORMATOWANIE -->
    <?php
        echo "<p>Dzień: " . date("c | D | l | w | z") . "</p>";
        echo "<p>Miesiąc: " . date("F | m | M | t") . "</p>";
        echo "<p>Rok: " . date("L | Y | y") . "</p>";
        echo "<p>Czas: " . date("a | A | g | G | h | H | i | s") . "</p>";
    ?>
    <hr>
    <!-- COPYWRITE --> 
    <p>
        Wykorzystanie do copywrite:
        &copy; 2022-<?php echo date("Y") ?>
    </p>
    <hr>
    <!-- ZMIANA STREFY CZASOWE -->
    <?php
        date_default_timezone_set("UTC"); 
        echo "<p>Czas UTC: " . date("H:i:s") . "</p>";
    ?>
    <hr>
    <!-- TWORZENIE DAT -->
    <?php
        $d = mktime(10, 24, 45, 1, 2, 1970); // h, min, s, m, d, Y
        echo "<p>Utworzona data: " . date("d-m-Y H:i:s", $d) . "</p>";
        
        echo "<pre>";
        print_r(getdate($d));
        echo "</pre>";
    ?>
    <hr>
    <!-- TWORZENIE DAT Z TEKSTU -->
    <?php
        $d = strtotime("tomorrow");
        echo "<p>Jutrzejsza data: " . date("d-m-Y", $d) . "</p>";
        $d = strtotime("next Monday");
        echo "<p>Następny poniedziałek: " . date("d-m-Y", $d) . "</p>";
        $d = strtotime("+4 Months");
        echo "<p>Data za cztery miesiące: " . date("d-m-Y", $d) . "</p>";
    ?>
    <hr>
    <!-- CZAS DO WAKACJI -->
    <?php
        $now = time();
        $wakacje = mktime(0, 0, 0, 6, 7);
        $roznica = floor(($wakacje - $now) / (60 * 60 * 24));
        echo "<p>Date dzisiaj: " . date("d/m/Y", $now) . "</p>";
        echo "<p>Data wakacji: " . date("d/m/Y", $wakacje). "</p>";

        if ($roznica > 0) {
            echo "<p>Dni do wakacji: " . $roznica .  "</p>";
        } else {
            echo "<p>Wakację zaczęły się: " . abs($roznica) .  " dni temu</p>";
        }
    ?>
</body>
</html>
