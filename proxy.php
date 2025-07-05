<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$url = "https://api.plaza.one/status";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
?>