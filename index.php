<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Vaporwave Infuser</title>
        <?php include "import.html";?>
	</head>
    <body oncontextmenu = "return false">
    	<div class="container-fluid">
        	<?php include "home.php";?>
        </div>
        <script async>
            window.onload = () => {
                'use strict'; 
                if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.register('./service-worker.js');
                }
            }
        </script>
    </body>
</html>