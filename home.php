<audio id="music" preload="none">
	<source src="http://radio.plaza.one/mp3">
</audio>

<video autoplay muted loop id="bgVid">
	<source src="static/bg/1.mp4" type="video/mp4" id="bgSrc">
</video>

<img src="static/img/streamsterTitle.png" id="titleImg">

<button class="btn bg-transparent text-white" id="aboutBtn" data-toggle="modal" data-target="#aboutModal">About</button>

<div class="modal fade" id="aboutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalCenterTitle">About</h5>
			</div>
			<div class="modal-body">
				<h2>Vaporwave Infuser</h2>
				Developed by: <a href="https://francescocamporese.weebly.com/">Francesco Camporese</a>
				<br>
				<a href="http://radio.plaza.one/mp3">Source</a> (mp3 / 128kbps)
			</div>
		</div>
	</div>
</div>

<button class="btn btn-lg text-white" id="playPauseBtn" onclick="playPauseFun();"><img src="static/img/baseline_play_arrow_white_24dp.png">Play</button>

<button class="btn bg-transparent btn-lg text-white" id="castBtn" onclick="onCastBtnClick();" disabled><img src="static/img/baseline_refresh_white_24dp.png"></button>

<!---<button class="btn bg-transparent btn-lg text-white" id="castBtn" is="google-cast-button"></button>--><!---TEST-->

<div class="btn-group btn-group-toggle" data-toggle="buttons" id ="bgDiv">
	<?php
		$newFiles = scandir("static/bg/", 0);
		foreach($newFiles as $file)
		{
			if ($file !== '.' && $file !== '..')
			{
				$name = strstr($file, '.', TRUE);
	?>
				<label class="btn bg-transparent btn-lg text-white <?php if (strcmp($name, "1") == 0) echo "active";?>" id="bglbl<?php echo $name;?>" onclick="selectBg(<?php echo $name;?>);">
					<input type="radio" name="bg" id="bg<?php echo $name;?>" autocomplete="off" <?php if (strcmp($name, "1") == 0) echo "checked";?>><img src="static/img/98pc24dp.png"><br><?php echo $name;?>
				</label>
	<?php
			}
		}
	?>
</div>