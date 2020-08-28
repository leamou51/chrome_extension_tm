chrome.browserAction.onClicked.addListener(function(tab) {
  let domain = null;

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var tab = tabs[0];
    var url = new URL(tab.url);
    domain = url.hostname;

    if (domain == 'wwwd.caf.fr') {
      sessionStorage.setItem(domain, 1);

    } else {
      sessionStorage.setItem(domain, 0);
    }
  })

});

if ( sessionStorage.getItem('wwwd.caf.fr') == 1 ) {
    chrome.tabs.executeScript({ file: 'content_script.js' });
  }

// --------------
// Germain's Tuto
// --------------

// chrome.browserAction.onClicked.addListener((tab) => {
// chrome.tabs.executeScript({
//   code: 'document.body.style.backgroundColor="#C3413B"'
// });
// });
