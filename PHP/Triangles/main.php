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
        function pole_tr($boki) {
            $s = ($boki[0] + $boki[1] + $boki[2]) / 2;
            return sprintf("%.3f", sqrt($s * ($s - $boki[0]) * ($s - $boki[1]) * ($s - $boki[2])));
        }

        function obw_tr($boki) {
            return $boki[0] + $boki[1] + $boki[2];
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
                    $pole = pole_tr($boki);
                    $obw = obw_tr($boki);

                    echo "<tr>";
                    echo "<td>{$boki[0]}</td>";
                    echo "<td>{$boki[1]}</td>";
                    echo "<td>{$boki[2]}</td>";
                    echo "<td>{$pole}</td>";
                    echo "<td>{$obw}</td>";
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