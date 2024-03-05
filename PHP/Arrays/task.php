<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zadanie</title>
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
    <h2>Zadanie Funkcje</h2>
    <?php
        # FUNCTIONS
        function f_1($a, $b, $n, $k) {
            for ($i = 0; $i < $n; $i++) {
                do {
                    $tab[$i] = rand($a, $b);
                } while ($tab[$i] % $k != 0);
            }

            return $tab;
        }

        function f_2($tab) {
            echo "Zawartość tablicy: ";
            foreach ($tab as $val) {
                echo "{$val}; ";
            }

            echo "<br/>";
        }

        function f_3($tab, $num) {
            $ilosc = 0;

            foreach ($tab as $val) {
                if ($val == $num) $ilosc++;
            }

            return $ilosc;
        }

        function f_4($tab) {
            $suma = 0;

            foreach ($tab as $val) {
                if ($val > 0) $suma += $val;
            }

            return $suma;
        }

        # PROGRAM
        define("POCZ", -100);
        define("KON", 100);
        define("N", 5);
        define("K", 4);
        
        // F1
        echo "<h2>F1</h2>";
        echo "<h4>POCZ: " . POCZ . "; KON: " . KON . "; N: " . N . "; K: " . K . "</h4>";
        $tab_1 = f_1(POCZ, KON, N, K);

        echo "<pre>";
        print_r($tab_1);
        echo "</pre>";

        // F2
        echo "<h2>F2</h2>";
        f_2($tab_1);

        // F3
        $tab_2 = [1, 2, 3, 5, 2, 1, 10, 2, 3, 2]; // ilość 2 = 4
        $check = 2;
        echo "<h2>F3</h2>";
        echo "Ilość wystąpień {$check} w tablicy = " . f_3($tab_2, $check);

        // F4
        echo "<h2>F4</h2>";
        echo "Suma liczb dodatnich w tablicy = " . f_4($tab_1);
    ?>
    <br/>
    <br/>
    <br/>
    <h2>Zadania Asocjacyjne</h2>
    <table>
        <thead>
            <tr> 
                <th>Nazwisko</th>
                <th>ID</th>
            </tr>
        </thead>
        <tbody>
            <?php
                $pracownicy = [
                    "pracownik1" => "Kowalski",
                    "pracownik2" => "Howard",
                    "pracownik3" => "Smith",
                    "pracownik4" => "Bomba"
                ];

                foreach ($pracownicy as $key => $val) {
                    echo "<tr>";
                    echo "<td>{$val}</td>";
                    echo "<td>{$key}</td>";
                    echo "</tr>";
                }
            ?>
        </tbody>
    </table>
    <?php
        echo "<h5>Ilość pracowników = " . count($pracownicy) . "</h5>";

        $nazwiska = implode("; ", $pracownicy);
        echo "<h5>Nazwiska: {$nazwiska}</h5>";
    ?>
</body>
</html>