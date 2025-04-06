<?php

function calculerMoyenne($number1, $number2, $number3) {
    return ($number1 + $number2 + $number3) / 3;
}

function afficherResultat($name, $moyenne) {
    echo "Name :  $name  ";
    echo $moyenne >= 10 ? "Moyenne suffisante <br>" : "Moyenne insuffisante <br>";
   
}


if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $number1 = (float)$_POST['number1'];
    $number2 = (float)$_POST['number2'];
    $number3 = (float)$_POST['number3'];
    $name = $_POST['name'];

    $calculerMoyenne  = calculerMoyenne($number1, $number2, $number3);
}

?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Calculer Moyenne !</title>
</head>
<body>

    <div class="form">
        <a href="api-exercice.php">Exercice api</a>
        <h1>Calculer Moyenne !</h1>
            <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
                <input type="text" placeholder="name" name="name" required class="name-zone">
                <input type="number" placeholder="number 1" name="number1" required class="input-zone">
                <input type="number" placeholder="number 2" name="number2" required class="input-zone">
                <input type="number" placeholder="number 3" name="number3" required class="input-zone" >
                <button name="calcul" type="submit" class="submitt" >Calculer !</button>
                <div class="direction">
                <?php 
                echo afficherResultat("  $name  <br>", "$calculerMoyenne ");
                echo "Moyenne :  $calculerMoyenne <br>"; 
                
                ?>
                </div>
            </form>
    </div>
    
</body>
</html>