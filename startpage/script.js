function showTime() {
    /*
    var date = new Date();
    var displayDate = date.toLocaleDateString();
    var displayTime = date.toLocaleTimeString();
    document.getElementById('clock').innerHTML = displayDate + ' ' + displayTime;
    setTimeout(showTime, 1000);
    */
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    var time = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second + ' ' + ampm;
    document.getElementById('clock').innerHTML = time;
    setTimeout(showTime, 1000);
  }
function search() {
    var query = document.getElementById('query').value;
    var engine = document.querySelector('input[name="engine"]:checked').value;
    var url = '';
    if (engine == 'google') {
      url = 'https://www.google.com/search?q=' + query;
    } else if (engine == 'bing') {
      url = 'https://www.bing.com/search?q=' + query;
    } else if (engine == 'duckduckgo') {
      url = 'https://www.duckduckgo.com/?q=' + query;
    } else if (engine == 'yandex') {
      url = 'https://www.yandex.com/search/?text=' + query;
    } else if (engine == 'brave') {
      url = 'https://search.brave.com/search?q=' + query;
    }
    window.open(url, '_blank');
  }
function changeEngine() {
    document.getElementById('query').placeholder = "Search the web with " + document.querySelector('input[name="engine"]:checked').value;
}
document.getElementById('query').onkeypress = function(e){
    if (!e) e = window.event;
    if (e.keyCode == 13){
      // Enter pressed
      search();
    }
  }
window.addEventListener("load", (event) => {
  changeEngine();
  showTime();
});
