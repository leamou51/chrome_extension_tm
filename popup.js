function listenClick() {
  const button = document.getElementById('start');
  button.addEventListener('click', () => {
    chrome.tabs.executeScript({
      file: 'scripts/send-data.js'
    });
  })
}

listenClick();

// --------------
// Germain's Tuto
// --------------

// function listenClick() {
//   const button = document.getElementById('send-data');
//   button.addEventListener('click', () => {
//     chrome.tabs.executeScript({
//       file: 'scripts/send-data.js'
//     });
//   })
// }

// listenClick();
