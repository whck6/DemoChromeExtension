let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

chrome.windows.getCurrent(null, function(window) {
chrome.extension.getBackgroundPage().console.log(window);
})

chrome.extension.getBackgroundPage().console.log('foo');

chrome.alarms.create("alarmName", {delayInMinutes: 0.1, periodInMinutes: 0.1});

