<?php

require 'vendor/autoload.php'; // Inclure l'autoload de Composer

use GuzzleHttp\Client;

// Créer un client HTTP
$client = new Client();


// Faire une requête GET
$response = $client->request('GET', 'https://potterapi-fedeperin.vercel.app/en/characters', [
    'verify' => false, // Désactiver la vérification SSL

]);

$statusCode = $response->getStatusCode();

$body = $response->getBody();

$data = json_decode($body, true);

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="api.css">
</head>
<body>
    
    <h1 class="centered">Harry Potter Cards !</h1>
 <a href="calculerMoyenne.php">calculer Moyenne</a>
    
    <div class="align">
   
    <?php 
    
    foreach ($data as $personnage) {
        echo "<div class='perso'>";
        
        echo '<img src="'  . $personnage['image'] . '" alt="' . '" style="width: 165px; border-radius: 5px; ">';
        echo '<div class="name">' . $personnage['fullName'] . '</div>';
        echo "</div>";
    }


    

    // foreach ($data as $key => $value) {
    //     echo '<pre>', print_r($value, true), '</pre>';
    // }

   
    
    ?>

    </div>
    
    <!-- WEB.START.CONTACT@GMAIL.COM
     -lien github
     -Video youtube
    -->
</body>
</html>


