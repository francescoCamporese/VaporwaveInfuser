/*var initializeCastApi = function() {
  console.log('initializeCastApi');

  var sessionRequest = new chrome.cast.SessionRequest(
    chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
  var apiConfig = new chrome.cast.ApiConfig(
    sessionRequest, sessionListener, receiverListener);
  chrome.cast.initialize(apiConfig, onInitSuccess, onError);
};

if (!chrome.cast || !chrome.cast.isAvailable) {
  setTimeout(initializeCastApi, 1000);
}

function onInitSuccess() {
  console.log('onInitSuccess');
}

function onError(e) {
  console.log('onError', e);
}

function sessionListener(e) {
  console.log('sessionListener', e);
}

function receiverListener(availability) {
  console.log('receiverListener', availability);

  if(availability === chrome.cast.ReceiverAvailability.AVAILABLE) {
    $("#castBtn").removeAttr("disabled").html("<img src=\"static/img/baseline_cast_white_24dp.png\">");
  }
}

function onSessionRequestSuccess(session) {
  console.log('onSessionRequestSuccess', session);

  var mediaInfo = new chrome.cast.media.MediaInfo(
    "http://radio.plaza.one/mp3",
    "audio/mpeg");
  var request = new chrome.cast.media.LoadRequest(mediaInfo);
  session.loadMedia(request, onMediaLoadSuccess, onError);
}

function onMediaLoadSuccess(e) {
  console.log('onMediaLoadSuccess', e);
  $("#castBtn").html("<img src=\"static/img/baseline_cast_connected_white_24dp.png\">");
}

function onCastBtnClick() {
  chrome.cast.requestSession(onSessionRequestSuccess, onError);
}*/





//TEST
window.__onGCastApiAvailable = function(isAvailable){
  if(! isAvailable) {
    return false;
  }

  var castContext = cast.framework.CastContext.getInstance();
  
  castContext.setOptions({
    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
    receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID
  });

  var stateChanged = cast.framework.CastContextEventType.CAST_STATE_CHANGED;
  castContext.addEventListener(stateChanged, function(event){
    var castSession = castContext.getCurrentSession();
    var media = new chrome.cast.media.MediaInfo("https://www.example.com/my-song.mp3", "audio/mp3");
    var request = new chrome.cast.media.LoadRequest(media);

    castSession && castSession
      .loadMedia(request)
      .then(function() {
        console.log("Success");
      })
      .catch(function(error) {
        console.log("Error: " + error);
      });
  });
};