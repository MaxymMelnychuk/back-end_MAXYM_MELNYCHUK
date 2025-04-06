<?php
header('Content-Type: application/json');


$pokemonId = $_GET['id'];
$url = "https://pokeapi.co/api/v2/pokemon/{$pokemonId}/";

$response = file_get_contents($url);
if ($response === false) {
    http_response_code(500);
    echo json_encode(["error" => "Erreur lors de la récupération des données"]);
    exit;
}

// Retournez directement la réponse de l'API Pokemon
echo $response;
?>