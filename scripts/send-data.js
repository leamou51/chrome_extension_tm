// --------------
// USER DATA
// --------------

 const userObj = {
  first_name: "Edouard",
  last_name: "Giroult",
  birth_date: new Date(1998, 7, 12),
  phone_number: "06 21 56 65 45 87",
  ID_number: "1700569254145",
  nationality: "française",
  birth_location: "Lyon",
  email: "doudou.giroult@gmail.com",
  password: "tatamonique",
  username: "Doudou",
  health: {
    ssn: "198076915616754",
    social_security: "SMENO",
    health_insurance: "Apicil"
  },
  habitation: {
    number: 80,
    street: "Rue Lafayette",
    zip_code: "75010",
    city: "Paris",
    category: "Locataire",
    rent: 780,
    size: 22,
    lease_start_date: new Date(2020, 8, 15),
    furnished: true
  },
  familial_situation: {
    children: 0,
    relationship: "célibataire"
  },
  professional_situation: {
    income: 600, occupation: "vendeur",
    fiscal_number: 1345749738586,
    contract: "CDD",
    company_name: "Zara",
    status: "étudiant"
  }

 }

function autoCompleteForm() {
  const zip_code = document.querySelector('#codePostal');

  // enter the zip code and the scity
  zip_code.value = `${userObj.habitation.zip_code} ${userObj.habitation.city.toUpperCase()}`;

  // create an event to display the corresponding city
  var event = document.createEvent('Event');
  event.initEvent('input', true, true);
  zip_code.dispatchEvent(event);

  // click on the corresponding city
  // click on "Continuer" (1st button)
  setTimeout(function(){
    document.querySelector(".uib-typeahead-match").click();
    document.querySelector(".boutondalprimo").click();
  }, 150);

  // click on "Continuer" (2nd button)
  // document.querySelector(".bouton2").click();

  // check checkbox "Vous payez un loyer"
  // const rent = document.querySelector('#Location')
  // if (userObj.user.habitation.category.toLowerCase() != "propriétaire") {
  //   rent.checked = true
  //   rent.onclick (function() { this.click(); })
  // }

  // enter the start date of the lease
  // const leaseDate = document.querySelector('#DTEMM');
  // leaseDate.value = userObj.habitation.lease_start_date.replace(/-/g,"/");
  // var event = document.createEvent('Event');
  // event.initEvent('input', true, true);
  // leaseDate.dispatchEvent(event);

  // check checkbox "Vous vivez en couple oui/non"
  // if (userObj.familial_situation.relationship.toLowerCase() == "célibataire") {
  //   const relationship = document.querySelector("#estCoupleNon")
  //   relationship.checked = true
  //   relationship.onclick (function() { this.click(); })
  // }

  // if (userObj.professional_situation.toLowerCase)
  //   const status = document.querySelector('#estEtudiantOui')
  //   status.checked = true
  //   status.onclick (function() { this.click(); })

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
