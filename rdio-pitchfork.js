_ajax =  function(url, callback, type, async) {
  console.log("calling ajax");
  chrome.extension.sendRequest({action:'ajax',url:url, type:type, async:async}, twitterCallback());
};

_ajax({
  action: 'ajax',
  url: 'http://search.twitter.com/search.jsonp?q=%40twitterapi', 
  type: 'JSONP'
}, twitterCallback());

function twitterCallback(data, textStatus, xhr) {
  console.log(data, textStatus, xhr);
  
}
