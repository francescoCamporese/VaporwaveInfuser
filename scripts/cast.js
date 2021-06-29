var initializeCastApi = function() {
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
}

function onCastBtnClick() {
  chrome.cast.requestSession(onSessionRequestSuccess, onError);
}