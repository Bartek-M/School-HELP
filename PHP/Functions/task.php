<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zadanie Funkcje</title>
    <style>
        html,
        body {
            font-family: monospace;
            background-color: #010409;
            color: #FFF;
            margin: 0 1rem;
        }
    </style>
</head>
<body>
    <h2>Zadanie 1</h2>
    <?php
        # FUNCTIONS
        function losuj($start, $end) {
            do { $los = rand($start, $end); } while ($los <= 0);
            return $los;
        }

        function cyfry_liczby($num) {
            echo "Cyfry liczby {$num}: ";

            while ($num != 0) {
                echo $num % 10 . ", ";
                $num = ($num / 10) | 0;
            }
        }

        function suma_cyfry($num) {
            $suma = 0;

            while ($num != 0) {
                $suma += $num % 10;
                $num = ($num / 10) | 0;
            }

            return $suma;
        }

        # PROGRAM
        define("START", -100);
        define("END", 100);

        $los = losuj(START, END);

        echo "<p>Wylosowana liczba: {$los}</p>";
        cyfry_liczby($los);
        echo "<p>Suma cyfr: " . suma_cyfry($los) . "</p>";
    ?>
    <br/>
    <h2>Zadanie 2</h2>
    <?php
        # FUNCTIONS
        function losuj_2($start, $end) {
            do { $los = rand($start, $end); } while ($los <= 0);
            return $los;
        }

        function wypisz_z_zakres($start, $end) {
            echo "Liczby z zakresu [{$start}; {$end}]: ";

            for ($i = $start; $i <= $end; $i++) {
                echo "{$i}, ";
            }
        }

        function suma_w_zakresie($start, $end) {
            $suma = 0;

            for ($i = $start; $i <= $end; $i++) {
                $suma += $i;
            }

            return $suma;
        }

        # PROGRAM
        define("START_2", -10);
        define("END_2", 10);

        $los_1 = losuj_2(START_2, END_2);
        $los_2 = losuj_2(START_2, END_2);

        echo "<p>Wylosowano dwie liczby: {$los_1}, {$los_2}</p>";
        wypisz_z_zakres(START_2, END_2);
        echo "<p>Suma z zakresu: " . suma_w_zakresie(START_2, END_2) . "</p>";
    ?>
</body>
</html>