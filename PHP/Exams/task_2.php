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
        // FUNKCJE
        function task_1($n, $pocz, $kon, $x) {
            for ($i=0; $i<$n; $i++) {
                do { $los = rand($pocz, $kon); } while ($los % $x != 0 || $los <= 0);
                $tab[] = $los;
            }

            return $tab;
        }

        function task_2($tab) {
            echo "<p>2 Zawartość tablicy: " . implode(" ", $tab) . "</p>";
        }

        function task_3($tab) {
            return implode("; ", $tab);
        }

        function nwd($a, $b) {
            while ($a != $b) {
                if ($a < $b) $b -= $a;
                else $a -= $b;
            }

            return $a;
        }

        // PROGRAM
        define("N", 10);
        define("X", 3);
        
        echo "<h3>1</h3>";
        $pocz = -50;
        $kon = 30;
        $tab = task_1(N, $pocz, $kon, X);
        task_2($tab);
        echo "<p>3 Zawartość tablicy: " . task_3($tab) . "</p>";

        echo "<h3>2</h3>";
        $pocz = -30;
        $kon = 100;
        $tab_2 = task_1(N, $pocz, $kon, X);
        task_2($tab_2);
        echo "<p>3 Zawartość tablicy: " . task_3($tab_2) . "</p>";

        echo "<h3>3</h3>";
        for ($i=0; $i<N; $i++) {
            $num_1 = $tab[$i]; 
            $num_2 = $tab_2[$i];

            echo "<p>NWD({$num_1}; {$num_2}) = " . NWD($num_1, $num_2) . "</p>";
        }
    ?>
</body>
</html>