function fetchAndPostHistory() {
    chrome.history.search({ text: '', maxResults: 10 }, function (data) {
      fetch('http://127.0.0.1:3000/store-history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data),
      })
        .then(response => console.log('Data stored successfully'))
        .catch(error => console.error('Error storing data:', error));
  
      // Display the fetched data in the popup.html
      chrome.runtime.sendMessage({ historyData: data });
    });
  }
