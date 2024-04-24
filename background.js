function fetchAndPostHistory() {
    chrome.history.search({ text: '', maxResults: 10 }, function (data) {
      fetch('localhost:3000/receive-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => console.log('Data stored successfully'))
        .catch(error => console.error('Error storing data:', error));
  
      // Display the fetched data in the popup.html
      chrome.runtime.sendMessage({ historyData: data });
    });
  }
  
  // Fetch and post history every 10 seconds
  setInterval(fetchAndPostHistory, 10000);