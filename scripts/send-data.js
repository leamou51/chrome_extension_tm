// --------------
// USER DATA
// --------------

const userData = '{ "user": { "first_name": "Edouard", "last_name": "Giroult", "birth_date": "12-07-1998", "phone_number": "06 21 56 65 45 87", "ID_number": "1700569254145", "nationality": "française", "birth_location": "Lyon", "email": "doudou.giroult@gmail.com", "password": "tatamonique", "username": "Doudou", "habitation": { "number": "80", "street": "Rue Lafayette", "zip_code": "75010", "city": "Paris", "category": "locataire", "rent": "780", "size": "22", "lease_start_date": "15-02-2020", "furnished": "true" } } }'

const userObj = JSON.parse(userData);

// const dataFile = require("../user-data.json");

function autoCompleteForm() {
  // const url = window.location.href;
  const zip_code = document.querySelector('#codePostal');
  zip_code.value = `${userObj.user.habitation.zip_code}`;
}

autoCompleteForm();



// --------------
// Germain's Tuto
// --------------

// function fetchData() {
//   const title = document.querySelector('title').innerText;
//   const url = window.location.href;

//   return {
//     title: title,
//     url: url
//   }
// }

// function sendData(data) {
//   const url = 'https://wagon-chat.herokuapp.com/engineering/messages';
//   fetch(url, {
//     method: 'POST',
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       "author": "Le Wagon chrome extension",
//       "content": `I've found something cool: ${data.title} on ${data.url}`
//     })
//   })
// }

// sendData(fetchData());
