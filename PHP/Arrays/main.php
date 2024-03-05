<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arrays</title>
    <style>
        html,
        body {
            font-family: monospace;
            background-color: #010409;
            color: #FFF;
            margin: 0 1rem;
            padding-bottom: 2rem;
        }

        h3, h2 {
            margin-top: 2rem;
            margin-bottom: 0.25rem;
        }

        h4 {
            margin: 0;
        }
    </style>
</head>
<body>
    <h2>Tablice</h2>
    <?php
        $tab = [12, "hello", "test"];
        $tab[] = 13;
        $tab[] = 14;

        $tab[3] = "podmienione"; // podmienianie

        echo "<pre>";
        print_r($tab);
        echo "</pre>";

        $tab_len = count($tab);
        echo "<h3>Ilość elementów: {$tab_len}</h3>";

        // FOR
        echo "<h3>Elementy za pomocą pętli FOR</h3>";
        for ($i = 0; $i < $tab_len; $i++) {
            echo "{$i}: {$tab[$i]}<br/>"; // index: wartość
        }

        // FOREACH
        echo "<h3>Elementy za pomocą pętli FOREACH</h3>";
        foreach ($tab as $i => $val) {
            echo "{$i}: {$val}<br/>";
        }

        echo "<h3>Elementy za pomocą pętli FOREACH</h3>";
        foreach ($tab as $val) {
            echo "{$val}<br/>";
        }

        // SORT
        echo "<h2>Sortowanie</h2>";
        echo "<h4>SORT() - zwykła tablica (rosnąco)</h4>";
        sort($tab);
        echo "<pre>";
        print_r($tab);
        echo "</pre>";

        echo "<h4>RSORT() - zwykła tablica (malejąco)</h4>";
        rsort($tab);
        echo "<pre>";
        print_r($tab);
        echo "</pre>";
    ?>
    <h2>Tablice Asocjacyjne</h2>
    <?php
        $kraje_stolice = [
            "Polska" => "Warszawa",
            "Anglia" => "Londyn",
            "Rosja" => "Moskwa",
            "Hiszpania" => "Madryt",
            "Niemcy" => "Berlin"
        ];

        foreach ($kraje_stolice as $kraj => $stolica) {
            echo "Kraj: {$kraj}, Stolica: {$stolica}<br/>"; // Kraj: , Stolica: 
        }

        // SORT (asort, ksort)
        // reversed (arsort, krsort)
        echo "<h2>Sortowanie</h2>";
        echo "<h4>ASORT() - tablica asocjacyjna (rosnąco - wartość)</h4>";
        asort($kraje_stolice);
        echo "<pre>";
        print_r($kraje_stolice);
        echo "</pre>";

        echo "<h4>KSORT() - tablica asocjacyjna (rosnąco - klucz)</h4>";
        ksort($kraje_stolice);
        echo "<pre>";
        print_r($kraje_stolice);
        echo "</pre>";
    ?>
</body>
</html>