chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.historyData) {
      message.historyData.forEach(function (page) {
        var li = document.createElement('li');
        li.textContent = page.title;
        document.getElementById('historyList').appendChild(li);
      });
    }
  });