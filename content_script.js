const apiUrl = 'http://localhost:3000/api/v1/users/2'
let userObj = null

function fetchUserData () {
  fetch (apiUrl)
    .then(res => res.json() )
    .then(data => {
      userObj = data;
    })
}

fetchUserData();

// ---------------------------
// TEST DATA
// ---------------------------

// const userObj = {
 //  first_name: "Edouard",
 //  last_name: "Giroult",
 //  birth_date: "12/07/1998",
 //  phone_number: "06 21 56 65 45 87",
 //  ID_number: "1700569254145",
 //  nationality: "française",
 //  birth_location: "Lyon",
 //  email: "doudou.giroult@gmail.com",
 //  password: "tatamonique",
 //  username: "Doudou",
 //  health: {
 //    ssn: "198076915616754",
 //    social_security: "SMENO",
 //    health_insurance: "Apicil"
 //  },
 //  habitation: {
 //    number: 80,
 //    street: "Rue Lafayette",
 //    zip_code: "75010",
 //    city: "Paris",
 //    category: "Locataire",
 //    rent: 780,
 //    size: 22,
 //    lease_start_date: "15/08/2020",
 //    furnished: true
 //  },
 //  familial_situation: {
 //    children: 0,
 //    relationship: "célibataire"
 //  },
 //  professional_situation: {
 //    income: 600, occupation: "vendeur",
 //    fiscal_number: 1345749738586,
 //    contract: "CDD",
 //    company_name: "Zara",
 //    status: "étudiant"
 //  }

 // }

// ---------------------------
// CAF WEBPAGE'S URLS
// ---------------------------

const urlFirstPage = 'https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/faireunedemandedeprestation/demanderlaideaulogementexperimentation/!ut/p/a0#/acces'

const urlSecondPage = 'https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/faireunedemandedeprestation/demanderlaideaulogement/!ut/p/a1/lZDRjoIwFES_xQ8wnQqoPKJIrVVxZYmWF9MomkYpBo3fb0nIJj4I2ft2kzNzZy7JyJ5kRr30RT11adSt3rPhYRNTNhcJWByuxuBp6CCabSkCWEBaAF_GArV-OHcZ9QUEE36EgK8T4U7gYDNo9C1Ax_0dyT6RcTSNwH0vDNc_3EZwugA0QFuHrhbSthh9BTyXpKasCvvPpPY6V8V1atQ5ONZfJrLKtdFPrW76kVeN119ciKWtTAfxImDUAaP_8bLAsTzl9_JB5MgDBbkX6R6a92VxWP3msvcGivDp6g!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/'

const urlThirdPage = 'https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/faireunedemandedeprestation/demanderlaideaulogement/!ut/p/a1'

const urlFourthPage = 'https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/faireunedemandedeprestation/demanderlaideaulogement/!ut/p/a1/hZDNDoIwEISfyHTLn3BEkVKrgBIicCGNAdMIxSDx-S0JMfEA7G2Tb2ZnFhUoQ4XkH_Hgg-gkb8a9sMo4wiRgCZDIO9tAU08H_3DF4IICcgXAzChg1FuBQbDDgBHm-ODSMGHGDnSItUm_AKzcv6HiH7H9vQ_UMT0vvFAVQV8DYAKWOqy1yFWL7SxgGiiVXd-qfyajV923z73ktXsfv4zyvhJSDII34l31k9cvLrCTqoy16OgSrAPB6NWmGQi6yduSfgHdskix/dl5/d5/L2dBISEvZ0FBIS9nQSEh'

// ---------------------------
// AUTOCOMPLETE FORM FUNCTIONS
// ---------------------------

function autoCompleteFormFirstPart() {
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
}

function autoCompleteFormSecondPart() {
  // click on "Continuer" (2nd button)
  document.querySelector(".bouton2").click();
}

function autoCompleteFormThirdPart() {
  // check checkbox "Vous payez un loyer"
  const rent = document.querySelector('#Location')
  if (userObj.habitation.category.toLowerCase() != "propriétaire") {
    rent.checked = true;
    rent.click (function() { this.click(); });
  }

  // enter the start date of the lease
  const leaseDate = document.querySelector('#DTEMM');
  leaseDate.value = userObj.habitation.lease_start_date.split("-").reverse().join("-").replace(/-/g,"/");
  var event = document.createEvent('Event');
  event.initEvent('input', true, true);
  leaseDate.dispatchEvent(event);

  // check checkbox "Vous vivez en couple oui/non"
  if (userObj.familial_situation.relationship.toLowerCase() == "célibataire") {
    const relationship = document.querySelector("#estCoupleNon");
    relationship.checked = true;
    relationship.click (function() { this.click(); });
  }

  if (userObj.professional_situation.status.toLowerCase() == "étudiant") {
    const status = document.querySelector('#estEtudiantOui');
    status.checked = true;
    status.click (function() { this.click(); });
  }

  const fiscalSituation = document.querySelector('#radioRattacheFisc');
  fiscalSituation.style.border = '3px solid red'
}

function autoCompleteFormFourthPart() {

}

// ---------------------------
// ACTIONS ACCORDING CAF WEBPAGES
// ---------------------------


function actions() {
  if (window.location.href.includes(urlFirstPage)) {
    console.log('url1')
    autoCompleteFormFirstPart();
  }

  if(window.location.href == urlSecondPage) {
    console.log('url2');
    autoCompleteFormSecondPart();
  }

  if(window.location.href.includes(urlThirdPage)) {
    console.log('url3');
    autoCompleteFormThirdPart();
  }
}

setTimeout(function() { actions()}, 150);

