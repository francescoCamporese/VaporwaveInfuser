<audio id="music" preload="none" onpause="whenPaused()" onplay="whenPlayed()">
	<source src="https://radio.plaza.one/mp3">
</audio>

<video disableRemotePlayback autoplay muted loop id="bgVid">
	<source src="static/bg/1.mp4" type="video/mp4" id="bgSrc">
</video>

<img src="static/img/streamsterTitle.webp" id="titleImg" title="Vaporwave Infuser (click to hide/show UI)" alt="title image" width="491" height="141" onclick="hideUi();">

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
				<a href="https://radio.plaza.one/mp3">Audio source</a> (mp3 / 128kbps)
				<br>
				<a href="https://mylivewallpapers.com">Wallpapers source</a>
			</div>
		</div>
	</div>
</div>

<div id="playerDiv">
	<div>
		<button class="btn btn-lg text-white" id="volumeDownBtn" onclick="setVolume(-10);">-</button>
		<button class="btn btn-lg text-white" id="playPauseBtn" onclick="playPauseFun();">
			<img id="album" class="disk paused" alt="album image">
		</button>
		<button class="btn btn-lg text-white" id="volumeUpBtn" onclick="setVolume(10);" disabled>+</button>
	</div>
	<br>
	<h5 id="title"></h5>
	<h6 id="artist"></h6>
	<br>
	<div>
		<button class="btn btn-sm text-white" id="setTimerBtn" onclick="setTimer();" data-minutes="Set timer" disabled><img src="static/img/outline_timer_white_24dp.webp" title="Timer" alt="timer image" width="24" height="24">Set timer</button>
	</div>
</div>


<button class="btn bg-transparent btn-lg text-white" id="castBtn" is="google-cast-button"></button>

<div class="btn-group btn-group-toggle" data-toggle="buttons" id="bgDiv">
	<?php
		$newFiles = scandir("static/bg/", 0);
		foreach($newFiles as $file)
		{
			if ($file !== '.' && $file !== '..')
			{
				$name = strstr($file, '.', TRUE);
	?>
				<label class="btn bg-transparent btn-lg text-white <?php if (strcmp($name, "1") == 0) echo "active";?>" id="bglbl<?php echo $name;?>" onclick="selectBg(<?php echo $name;?>);">
					<input type="radio" name="bg" id="bg<?php echo $name;?>" autocomplete="off" <?php if (strcmp($name, "1") == 0) echo "checked";?>><img src="static/img/<?php if (strcmp($name, "1") == 0) echo "gbasp24dp"; else echo "98pc24dp";?>.webp" title="Click to select wallpaper <?php echo $name;?>" alt="wallpaper <?php echo $name;?> button" width="32" height="32" id="icobg<?php echo $name;?>"><br><?php echo $name;?>
				</label>
	<?php
			}
		}
	?>
</div>
