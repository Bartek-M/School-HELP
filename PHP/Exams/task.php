<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zadania ze sprawdzianu</title>
    <style>
        html, body {
            background: #000;
            color: #fff;
            font-family: monospace;
        }
    </style>
</head>
<body>
    <?php 
        function nwd($a, $b) {
            while ($a != $b) {
                if ($a < $b) $b -= $a;
                else $a -= $b;
            }

            return $a;
        }

        function plus_1($liczba) {
            return $liczba + 1;
        }

        $liczba = plus_1(4);
        echo $liczba;
        echo "<br><br>";

        function potega($liczba_1, $liczba_2=2) {
            if ($liczba_2 == 0) {
                echo "<p>Nie obsługujemy potęg do 0</p>";
                return;
            }
            
            echo $liczba_1 ** $liczba_2 . "<br>";
            return;
        }

        potega(2, 3);
        potega(2, 0);
        potega(2);

        function silnia($a) {
            $silnia = 1;

            for ($i=1; $i<=$a; $i++) {
                $silnia *= $i;
            }

            return $silnia;
        }

        echo "<p>5! = " . silnia(5) . "</p>";
        echo "<p>5! = silnia(5)</p>";

        function tab_1($n, $pocz, $kon, $x) {
            for ($i=0; $i<$n; $i++) {
                do { $los = rand($pocz, $kon); } while ($los % $x != 0 || $los <= 0); // wychodzimy kiedy 
                // NOT (los % x == 0 AND los > 0) => los % x != 0 OR los <= 0
                $tab[] = $los;
            }

            return $tab;
        }

        define("POCZ", -20);
        define("KON", 20);
        define("X", 2);
        define("N", 5);

        echo "<p>Tablica Zwykła</p>";
        $tab = tab_1(N, POCZ, KON, X);
        echo "<p>Tab1: " . implode("; ", $tab) . "</p>";
        $tab[2] = 5;
        echo "<pre>";
        print_r($tab);
        echo "</pre>";
        echo "<p>Element klucz 2: {$tab[2]}</p>";

        // suma wartości
        $suma = 0;
        for ($i=0; $i<N; $i++) {
            $suma += $tab[$i];
        }
        echo "<p>Suma = {$suma}</p>";

        $suma = 0;
        foreach ($tab as $klucz => $wartosc) {
            $suma += $wartosc;
            echo "<p>{$klucz} = {$wartosc}</p>";
        }
        echo "<p>Suma = {$suma}</p>";


        echo "<br><p>Tablica Asocjacyjna</p>";
        $samoloty = [
            "UAE31W" => "Dubai",
            "KLM1314" => "Amsterdam",
            "LOT21" => "Los Angeles",
            "LOT29" => "Miami",
            "UPS273" => "Cologne",
        ];

        $samoloty['LOT29'] = "New York";
        echo "<pre>";
        print_r($samoloty);
        echo "</pre>";
        echo "<p>Element klucz LOT29: {$samoloty['LOT29']}</p>";

        foreach ($samoloty as $destynacja) {
            echo "<p>{$destynacja}</p>";
        }
    ?>
</body>
</html>