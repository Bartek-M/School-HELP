<!-- zad_nazwisko.php -->
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Silnia</title>
    <style>
        html,
        body {
            font-family: monospace;
            background-color: #010409;
            color: #FFF;
            margin: 0 1rem;
        }

        table {
            border-collapse: collapse;
        }

        caption {
            text-align: left;
            margin: 1rem 0;
            font-size: 1.5rem;
        }

        td, th {
            padding: 1rem 1.5rem;
            border: 1px solid #FFF;
            text-align: center
        }
    </style>
</head>
<body>
    <h1>Bartosz Mroczkowski 3Ti</h1>
    <?php
        # FUNCTIONS
        function silnia($num) {
            $factorial = 1;
            
            for ($i = $num; $i > 0; $i--) {
                $factorial *= $i;
            }

            return $factorial;
        }

        function nwd($num_1, $num_2) {
            while ($num_1 != $num_2) {
                if ($num_1 > $num_2) $num_1 -= $num_2;
                else $num_2 -= $num_1;
            }

            return $num_1;
        }

        function losuj_dwie($start, $end) {
            do { $num_1 = rand($start, $end); } while ($num_1 <= 0);
            do { $num_2 = rand($start, $end); } while ($num_2 <= 0 || $num_2 == $num_1);

            return [$num_1, $num_2];
        }
    ?>
    <table>
        <?php
            # PROGRAM
            define("POCZ", -20);
            define("KON", 20);

            $losowe = losuj_dwie(POCZ, KON);

            echo "<thead>";
            echo "<tr><th colspan='4'>Zakres losowania: [" . POCZ . "; " . KON . "]</th></tr>";
            echo "</thead>";
            
            echo "<tbody>";
            echo "<tr>";
            echo "<td>losowa_1 = {$losowe[0]}</td>";
            echo "<td>{$losowe[0]}! = " . silnia($losowe[0]) . "</td>";
            echo "<td>losowa_2 = {$losowe[1]}</td>";
            echo "<td>NWD({$losowe[0]}; {$losowe[1]}) = " . nwd($losowe[0], $losowe[1]) . "</td>";
            echo "</tr>";
            echo "</tbody>";
        ?>
    </table>
</body>
</html>