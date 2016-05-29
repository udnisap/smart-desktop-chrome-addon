    function drawURL(url){
        var urlElm = document.getElementById('url');
        urlElm.innerHTML = url;
        new QRCode(document.getElementById("qrcode"), {
          text: url,
          width: 128,
          height: 128,
          colorDark : "#000000",
          colorLight : "#ffffff",
          correctLevel : QRCode.CorrectLevel.H
      });
    }

//document.getElementById('start').addEventListener('click', function(){
//    chrome.runtime.sendMessage({type: 'start'});
//});


var sessionId= window.location.search.replace("?", "");
var url = 'https://udnisap.js.org/smart-desktop/view/?'+sessionId;
console.log(url)
drawURL(url)
