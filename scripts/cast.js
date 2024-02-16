window.__onGCastApiAvailable = function (isAvailable) {
  if (!isAvailable) {
    return false;
  }

  var castContext = cast.framework.CastContext.getInstance();

  castContext.setOptions({
    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
    receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID
  });

  var stateChanged = cast.framework.CastContextEventType.CAST_STATE_CHANGED;
  castContext.addEventListener(stateChanged, function (event) {
    var castSession = castContext.getCurrentSession();
    var media = new chrome.cast.media.MediaInfo(streamURL, "audio/mp3");
    media.metadata = new chrome.cast.media.MusicTrackMediaMetadata();
    media.metadata.title = "Vaporwave Infuser";
    media.metadata.artist = "Developed by Francesco Camporese";
    media.metadata.images = [{ "url": "https://vaporwaveinfuser.altervista.org/static/img/albumCover.webp" }];
    var request = new chrome.cast.media.LoadRequest(media);

    castSession && castSession
      .loadMedia(request)
      .then(function () {
        console.log("Media loaded successfully to Chromecast");
      })
      .catch(function (error) {
        console.error("Error loading media to Chromecast: " + error);
      });
  });
};