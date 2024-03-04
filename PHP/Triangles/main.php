<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trójkąty</title>
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
        function pole_tr($a, $b, $c) {
            $s = ($a + $b + $c) / 2;
            return sqrt($s * ($s - $a) * ($s - $b) * ($s - $c));
        }

        function obw_tr($a, $b, $c) {
            return $a + $b + $c;
        }

        function boki_tr($start, $end) {
            do {
                do { $a = rand($start, $end); } while ($a <= 0);
                do { $b = rand($start, $end); } while ($b <= 0);
                do { $c = rand($start, $end); } while ($c <= 0);
            } while (
                ($a + $b <= $c) || 
                ($a + $c <= $b) || 
                ($b + $c <= $a)
            ); 

            return [$a, $b, $c];
        }
    ?>
    <table>
        <caption>
            Informacje o trójkącie
        </caption>
        <thead>
            <tr>
                <th>Bok a</th>
                <th>Bok b</th>
                <th>Bok c</th>
                <th>Pole</th>
                <th>Obwód</th>
            </tr>
        </thead>
        <tbody>
            <?php
                # PROGRAM
                define("N", 10);
                define("START", -50);
                define("END", 50);

                for ($i = 0; $i < N; $i++) {
                    $boki = boki_tr(START, END);
                    $a = $boki[0];
                    $b = $boki[1];
                    $c = $boki[2];

                    $pole = pole_tr($a, $b, $c);
                    $obw = obw_tr($a, $b, $c);

                    echo "<tr>";
                    echo "<td>{$a}</td>";
                    echo "<td>{$b}</td>";
                    echo "<td>{$c}</td>";
                    echo "<td>" . number_format($pole, 2) . "</td>";
                    echo "<td>" . number_format($obw, 3) . "</td>";
                    echo "</tr>";
                }
            ?>
        </tbody>
    </table>
    <?php
        echo "<h4>Liczby były losowane z zakresu: <" . START . "; " . END. "></h4>";
    ?>
</body>
</html>