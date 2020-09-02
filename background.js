// NOTIF QUAND FORMULAIRE CAF REMPLI -> retour sur app Tata Monique
// -----------
// avec popup
// -----------
// chrome.webNavigation.onCompleted.addListener(function() {
//   console.log('create dialog box');

//     window.open('https://www.tatamonique.live/tasks/22/subtasks','popUpWindow','height=300,width=400,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');

// }, {url: [{urlEquals : 'https://www.google.com/'}]});
// -----------
//avec notif
// -----------
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == "notification")
      chrome.notifications.create('notification', request.options, function() { });

    sendResponse();
});

// clear le state quand le user arrive sur le formulaire
chrome.webNavigation.onCompleted.addListener(function() {

  var tataMoniqueNotification = "tata-monique-notification"

  chrome.alarms.create("", {periodInMinutes: 0.1});

  chrome.notifications.clear(tataMoniqueNotification);
  chrome.notifications.clear('notification');

  chrome.notifications.create(tataMoniqueNotification, {
    "type": "basic",
    "iconUrl": "./images/grandmother.png",
    "title": "Besoin d'un coup de pouce ?!",
    "message": "Clique sur l'extension Tata Monique 😉"
  });

  // chrome.browserAction.setPopup({ popup: 'popup.html' })

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
