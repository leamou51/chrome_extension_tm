// chrome.pageAction.onClicked.addListener(function(tab) {
//     chrome.storage.local.get("state", function(result)
//     {
//         //First initialisation of the state in the local storage
//         if(result.state == null)
//         {
//             chrome.storage.local.set({state: 0});
//             state0Actions(); //Do what you want
//         }
//         else if (result.state == 0) {
//             result.state = 1;
//             state0Actions(); //Do what you want
//         }
//         else {
//             result.state = 0;
//             state1Actions(); //Do what you want
//         }

//         //Save the new state to the storage
//         chrome.storage.set({state: result.state});
//     })
// });

// --------------
// Germain's Tuto
// --------------

// chrome.browserAction.onClicked.addListener((tab) => {
// chrome.tabs.executeScript({
//   code: 'document.body.style.backgroundColor="#C3413B"'
// });
// });
