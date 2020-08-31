// clear le state quand le user arrive sur le formulaire
chrome.webNavigation.onBeforeNavigate.addListener(function() {
    alert("Clique sur Tata Monique pour qu'elle te donne un coup de pouce 😉");
    chrome.storage.local.clear();
  }, {url: [{urlEquals : 'https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/faireunedemandedeprestation/demanderlaideaulogementexperimentation/!ut/p/a0'}]});

chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var tab = tabs[0];
    var url = new URL(tab.url)
    var domain = url.hostname

    // initialise le state à 1 si le user est sur la CAF, 0 sinon

    console.log('initialise state');

    if (domain == 'wwwd.caf.fr') {
      chrome.storage.local.set( {state: 1}, function() {
      console.log("state = 1") // OK

      // run content script pour la première page du formulaire
      chrome.tabs.executeScript ( {file: './content_script.js'} );

      });
    } else {
      chrome.storage.local.set( {state: 0}, function() {
      console.log("state = 0") // OK
      });
    }

  })

});


// à chaque fois qu'une nouvelle page se charge, run content script si state = 1
chrome.webNavigation.onCompleted.addListener(function() {
  console.log('page loaded');

  chrome.storage.local.get(['state'], function(result) {
  console.log(result.state);

    if (result.state == 1) {
      console.log('run content_script');
      chrome.tabs.executeScript ( {file: './content_script.js'} );
    } else {
      console.log('do nothing');
    }

  });

});
