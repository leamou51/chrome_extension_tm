// ---------------------------
// DIALOG BOX
// ---------------------------

function dialogBox() {
  chrome.runtime.sendMessage({type: "notification", options: {
    type: "basic",
    iconUrl: "./images/grandmother.png",
    title: "Bravo Doudou !! 🎉",
    message: " Ta demande est finalisée. N'oublie pas de valider cette tâche sur ton app 😉"
}});
};

// ---------------------------
// FETCH DATA FROM API
// ---------------------------
const apiUrl = 'http://localhost:3000//api/v1/users/4'
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

const urlSecondPage = 'https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/faireunedemandedeprestation/demanderlaideaulogement/!ut/p/a1/lZDRjoIwFES_xQ8wnQqoPKJIrVVxZYmWF9MomkYpBo3fb0nIJj4I2ft2kzNzZy7JyJ5kRr30RT11adSt3rPhYRNTNhcJWByuxuBp6CCabSkCWEBaAF_GArV-OHcZ9QUEE36EgK8T4U7gYDNo9C1Ax_0dyT6RcTSNwH0vDNc_3EZwugA0QFuHrhbSthh9BTyXpKasCvvPpPY6V8V1atQ5ONZfJrLKtdFPrW76kVeN119ciKWtTAfxImDUAaP_8bLAsTzl9_JB5MgDfHIv0j0078visPrNZe8NP2gIxQ!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/'



const urlThirdPage = 'https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/faireunedemandedeprestation/demanderlaideaulogement/!ut/p/a1/lZDRjoIwFES_xQ8wnQqoPKJIrVVxZYmWF9MomkYpBo3fb0nIJj4I2ft2kzNzZy7JyJ5kRr30RT11adSt3rPhYRNTNhcJWByuxuBp6CCabSkCWEBaAF_GArV-OHcZ9QUEE36EgK8T4U7gYDNo9C1Ax_0dyT6RcTSNwH0vDNc_3EZwugA0QFuHrhbSthh9BTyXpKasCvvPpPY6V8V1atQ5ONZfJrLKtdFPrW76kVeN119ciKWtTAfxImDUAaP_8bLAsTzl9_JB5MgDfHIv0j0078visPrNZe8NP2gIxQ!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/'



const urlFourthPage = 'https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/faireunedemandedeprestation/demanderlaideaulogement/!ut/p/a1/hZDNDoIwEISfyHTLn3BEkVKrgBIicCGNAdMIxSDx-S0JMfEA7G2Tb2ZnFhUoQ4XkH_Hgg-gkb8a9sMo4wiRgCZDIO9tAU08H_3DF4IICcgXAzChg1FuBQbDDgBHm-ODSMGHGDnSItUm_AKzcv6HiH7H9vQ_UMT0vvFAVQV8DYAKWOqy1yFWL7SxgGiiVXd-qfyajV923z73ktXsfv4zyvhJSDII34l31k9cvLrCTqoy16OgSrAPB6NWmGQi6yduSfgHdskix/dl5/d5/L2dBISEvZ0FBIS9nQSEh'

const urlFithPage = 'https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/faireunedemandedeprestation/demanderlaideaulogement/!ut/p/a1/hZBhT8IwEIZ_jR9drwwQPg7mRp0MFQlsX0jdbqZxa0np0J9v64jBGKBpk_buuffuLcnJhuSSH8Q7N0JJXrt3Ptw-LWg8S5YQL8L5CNgq9CG6f6EQgAUyC8CZZQFXP5z1YzpOIImTcQQBS5dJfwI-PPWO9ReAK_3XJP-LjKJpBGw8CMP0mdkR_GsAHIFLHq65yKyLu7PAoE9WUunG_ufSaVW6-ZhKXgWF-2WSaRRSGMFrsUd91PodF5JHa5n2Fg9BTH2IaadhsMadVgWWrUYmS_zq1Kaq1VwaJJkP_7i5Kt0RlSh419roFh0mnIKbiWS05wKNMtjqLnJytxn-0yeyfrpspb2CV95OaVOj8db49nrac8_sNFqiOQj8vIGUGxuccFHXVtMrFdk1qw0Idps12zQdHOyeB9-6L_nt/dl5/d5/L2dBISEvZ0FBIS9nQSEh'

// ---------------------------
// AUTOCOMPLETE FORM FUNCTIONS
// ---------------------------

function autoCompleteFormFirstPart() {
  const zipCode = document.querySelector('#codePostal');

  // enter the zip code and the scity
  zipCode.value = `${userObj.habitation.zip_code} ${userObj.habitation.city.toUpperCase()}`;

  // create an event to display the corresponding city
  var event = document.createEvent('Event');
  event.initEvent('input', true, true);
  zipCode.dispatchEvent(event);

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
  // (only case treated: "Oui")
  const rent = document.querySelector('#Location')
  if (userObj.habitation.category.toLowerCase() != "propriétaire") {
    rent.checked = true;
    rent.click (function() { this.click(); });
  }

  // enter the start date of the lease
  const leaseDate = document.querySelector('#DTEMM');
  // leaseDate.value = userObj.habitation.lease_start_date.split("-").reverse().join("-").replace(/-/g,"/");
  leaseDate.value = '04/09/2020'
  var event = document.createEvent('Event');
  event.initEvent('input', true, true);
  leaseDate.dispatchEvent(event);

  // check checkbox "Vous vivez en couple oui/non"
  // (only case treated: "non")
  if (userObj.familial_situation.relationship.toLowerCase() == "célibataire") {
    const relationship = document.querySelector("#estCoupleNon");
    relationship.checked = true;
    relationship.click (function() { this.click(); });
  }


  // check checkbox "Vous êtes étudiant oui/non"
  // (only case treated: "non")
  if (userObj.professional_situation.status.toLowerCase() == "étudiant") {
    const status = document.querySelector('#estEtudiantOui');
    status.checked = true;
    status.click (function() { this.click(); });
  }

  // check checkbox "Vous êtes rattachés fiscalement à vos parents oui/non"
  // (only case treated: "non")
  const fiscalSituation = document.querySelector('#rattacheFiscNon');
  if (userObj.professional_situation.fiscal_attach == false) {
    fiscalSituation.checked = true;
    fiscalSituation.click (function() { this.click(); });
  }


  // click on "Continuer" button
  setTimeout(function() { document.querySelector('#BCContinuer').click(); },150);
}

function autoCompleteFormFourthPart() {
  // check webpage "Type de logement"
  if (document.querySelector('#Locataire') != null) {
    console.log(1);
    // check checkbox "Vous êtes Locataire, Sous-locataire, ..."
    // (only case treated: "locataire")
    if (userObj.habitation.category.toLowerCase() == "locataire") {
    const rent = document.querySelector('#Locataire');
    rent.checked = true;
    rent.click (function() { this.click(); });
    }

    // to be filled in by the user
    document.querySelectorAll('.width9').forEach((classRadio) => { classRadio.style.border = '3px solid red'
    });
  }

  // check webpage "Conditions"
  if (document.querySelector('#conditionAcces') != null) {
    console.log(2);
    // check checkbox "J'ai pris connaissance..." and click on "Commencer"
    document.querySelector('#conditionAcces').click (function() { this.click(); });
    document.querySelector('#BCCommencer').click();
  }

  // check webpage "Attention"
  if (document.querySelector('.fieldset-apparent.marginbottom15') != null) {
    console.log(3);
    // click on "Continuer" button
    document.querySelector('#BCContinuer').click();
  }

  // check webpage "Email"
  if (document.querySelector('#mel.zoneDeSaisie') != null) {
    console.log(4);
    // enter the user's email
    const email = document.querySelector('#mel.zoneDeSaisie');
    const emailConf = document.querySelector('#melConf.zoneDeSaisie')
    email.value = userObj.email;
    emailConf.value = userObj.email;
    document.querySelector('.bouton2').click();
  }

  // check webpage "Etat civil"
  if (document.querySelector('.cell.width15.paddingtop1') != null && document.querySelector('.message-alerte')) {
    console.log(5);

    var event = new Event('change');

    // check the user's sex
    if (userObj.health.ssn.charAt(0) == "1") {
      document.querySelectorAll('.borneBoutons')[1].click();
    } else {
      document.querySelectorAll('.borneBoutons')[0].click();
    }

    // enter the user's last and first name
    const lastName = document.querySelectorAll('.zoneDeSaisie')[0];
    lastName.value = userObj.last_name.toUpperCase();
    lastName.dispatchEvent(event);

    const firstName = document.querySelectorAll('.zoneDeSaisie')[2];
    firstName.value = userObj.first_name.toUpperCase();
    firstName.dispatchEvent(event);

    // enter the user's date of birth
    const birthDate = document.querySelector('[data-cnafdate]');
    birthDate.value = userObj.birth_date.split("-").reverse().join("-").replace(/-/g,"/");

    // enter the place of birth
    // (only case treated: "France métropolitaine")
    const birthPlace = document.querySelector("select[name='lieuNai']");
    birthPlace.value = 'F'

    // enter the nationality
    const nation = document.querySelector("select[name='NATI']");
    if (userObj.nationality.toLowerCase() == 'française') {
      nation.value = 'F'
    }

    // enter user's ssn
    const ssn = document.querySelectorAll('.zoneDeSaisie')[3];
    ssn.value = userObj.health.ssn.substring(0,13);

    // click on "Continuer" button
    setTimeout(function() { document.querySelector('#BCContinuer').click(); },50);
  }

  // check webpage "Etat civil - complément des données de naissance"
  if (document.querySelector('#IDENTCOMMUNE') != null && document.querySelector("input[name='adresseParent']") == null && document.querySelector('#dfOccLog') == null && document.querySelector('#nomVoie') == null) {
    console.log(6);
    const zipCodeBirth = document.querySelector('#IDENTCOMMUNE');
    zipCodeBirth.value = `${userObj.birth_location.toUpperCase()} (${userObj.zip_code_location})`

    var event = document.createEvent('Event');
    event.initEvent('input', true, true);
    zipCodeBirth.dispatchEvent(event);


    // click on "Continuer" button
    setTimeout(function() { document.querySelector('#BCContinuer').click()}, 50);
  }

  // check webpage "Prestations perçues"
  if (document.querySelector('#IDENTCOMMUNE') != null && document.querySelector("input[name='adresseParent']") != null) {
    console.log(7);
    // to be filled in by user
    document.querySelector('.cell.width16.lignes-3').style.border = '3px solid red';

    document.querySelector('.cell.width16.paddingbottom0').style.border = '3px solid red';
  }

  // check webpage "Situation familiale"
  if (document.querySelector('#dateSitFam') != null) {
    console.log(8);
    // check checkbox "Célibataire"
    // (only case treated: "célibataire")
    if (userObj.familial_situation.relationship.toLowerCase() == "célibataire") {
      document.querySelectorAll('.borneBoutons')[0].click();
    }

    // enter number of children
    document.querySelector('.zoneDeSaisie').value = userObj.familial_situation.children

    // click on "Continuer" button
    setTimeout(function() { document.querySelector('#BCContinuer').click()}, 50);
  }

  // check webpage "Boursier"
  if (document.querySelector("#nonEtuBoursier") != null) {
    console.log(9);
    // check checkbox "Vous êtes étudiants boursier"
    // (only case treated: "non")
    // /!\ by default (no data from API)
    document.querySelector('#nonEtuBoursier').click();

    // check checkbox "Vous êtes affilié à une mutuelle étudiante"
    // (only case treated: "yes")
    // /!\ by default (no data from API)
    document.querySelectorAll("input[name='ouinonSS']")[0].click();

    // click on "Continuer" button
    setTimeout(function() { document.querySelector('#BCContinuer').click()}, 50);
  }

  // check webpage "Adresse"
  if (document.querySelector('#dfOccLog') != null) {
    console.log(10);

    var event = document.createEvent('Event');
    event.initEvent('input', true, true);

    // enter "N° et voie"
    const address = document.querySelector('#LIBLIG4ADR');
    address.value = `${userObj.habitation.number} ${userObj.habitation.street.toUpperCase()}`
    address.dispatchEvent(event);

    // enter zip code and city
    const zipCode = document.querySelector('#IDENTCOMMUNE');
    zipCode.value = `${userObj.habitation.zip_code} ${userObj.habitation.city.toUpperCase()}`
    zipCode.dispatchEvent(event);

    // click on "Continuer" button
    setTimeout(function() { document.querySelector('#BCContinuer').click()}, 50);
  }

  // check webpage "Coordonnées de contact"
  if (document.querySelector("input[name='numTelDos']") != null) {
    console.log(11);
    // click on "Continuer" button
    // by default no phone number provided
    setTimeout(function() { document.querySelector('#BCContinuer').click()}, 50);
  }

  // check webpage "Coordonnées bancaires"
  if (document.querySelector('#CTNIBAN1') != null) {
    console.log(12);
    // /!\ by default (no data from API)
    const fakeIban = 'FR7630004000031234567890143';
    const fakeBIC = 'BNPAFRPPXXX';
    const fakeDom = 'PARIS'
    // enter IBAN
    const iban1 = document.querySelector("input[name='tniban1']");
    const iban2 = document.querySelector("input[name='tniban2']");
    const iban3 = document.querySelector("input[name='tniban3']");
    const iban4 = document.querySelector("input[name='tniban4']");
    const iban5 = document.querySelector("input[name='tniban5']");
    const iban6 = document.querySelector("input[name='tniban6']");
    const iban7 = document.querySelector("input[name='tniban7']");

    iban1.value = fakeIban.substring(0,4);
    iban2.value = fakeIban.substring(4,8);
    iban3.value = fakeIban.substring(8,12);
    iban4.value = fakeIban.substring(12,16);
    iban5.value = fakeIban.substring(16,20);
    iban6.value = fakeIban.substring(20,24);
    iban7.value = fakeIban.substring(24,27);

    // enter BIC
    const bic = document.querySelector('#CDNIDBIC');
    bic.value = fakeBIC;

    // enter "Domiciliation"
    const dom = document.querySelector("input[name='COMBAN']");
    dom.value = fakeDom;

    // click on "Continuer" button
    setTimeout(function() { document.querySelector('#BCContinuer').click()}, 50);
  }

  // check webpage "Les personnes de votre foyer"
  if (document.querySelector("label[for='drRessEnfOui']") != null) {
    console.log(13);
    // click on "Continuer" button
    setTimeout(function() { document.querySelector("input[name='BCContinuer']").click()}, 50);
  }

  // check webpage "Déclaration des ressources 2018"
  if (document.querySelector('#SalN2') != null) {
    console.log(14);
    // check checkbox "Revenus 2018"
    // (only case treated: "Aucun revenu")
    // /!\ by default (no data from API)
    document.querySelector('#NulN2').click();

    // click on "Continuer" button
    setTimeout(function() { document.querySelector("input[name='BCContinuer']").click()}, 50);
  }

  // check webpage "Patrimoine immobilier"
  if (document.querySelector('#patrimoineMobilierN') != null) {
    console.log(15);
    // check checkbox "Vous détenez un patrimoine mobilier oui/non"
    // (only case treated: "non")
    // /!\ by default (no data from API)
    document.querySelector('#patrimoineMobilierN').click();

    // check checkbox "Vous détenez un patrimoine immobilier (hors résidence principale ou bien à usage professionnel) oui/non"
    // (only case treated: "non")
    // /!\ by default (no data from API)
    document.querySelector('#patrimoineImmoN').click();

    // click on "Continuer" button
    setTimeout(function() { document.querySelector("input[name='BCContinuer']").click()}, 50);
  }

  // check webpage "Colocation"
  if (document.querySelector('#estColocataireNon') != null) {
    console.log(16);
    // check checkbox "Vous êtes colocataire oui/non"
    // (only case treated: "non")
    // /!\ by default (no data from API)
    document.querySelector('#estColocataireNon').click();

    // click on "Continuer" button
    setTimeout(function() { document.querySelector("input[name='BCContinuer']").click()}, 50);
  }

  // check webpage "Type de bailleur"
  if (document.querySelector('#particulier') != null) {
    console.log(17);
    // check checkbox "Le bailleur est..."
    // (only case treated: "particulier")
    // /!\ by default (no data from API)
    document.querySelectorAll('#particulier')[0].click();

    // check checkbox "Votre bailleur réside en France"
    // (only case treated: "oui")
    // /!\ by default (no data from API)
    document.querySelector('#adresseFranceOui').click();

    // click on "Continuer" button
    setTimeout(function() { document.querySelector("input[name='BCContinuer']").click()}, 50);
  }

  // check webpage "Info bailleur"
  if (document.querySelector('#libTypeVoie.zoneDeSaisie.ui-autocomplete-input') != null && document.querySelector('#lieuDit') == null) {
    console.log(18);
    // select "Type de voie"
    // /!\ by default (no data from API)
    // document.querySelector("select[name='typeVoiePropose']").value = "RUE";

    console.log(1);
    // enter landlord's information
    // /!\ by default (no data from API)
    const fakeLandlordLastName = 'DUPONT';
    const fakeLandlordFirstName = 'MARTIN';
    const fakeLandlordNum = '2';
    const fakeLandlordStreetType = 'RUE';
    const fakeLandlordStreetName = 'COLBERT';
    const fakeLandlordCity = 'RETHEL';

    document.querySelectorAll('.zoneDeSaisie')[0].value = fakeLandlordLastName;
    document.querySelectorAll('.zoneDeSaisie')[1].value = fakeLandlordFirstName;
    document.querySelector('#numeroVoie').value = fakeLandlordNum;
    document.querySelector('#libTypeVoie').value = fakeLandlordStreetType;
    document.querySelector('#nomVoie').value = fakeLandlordStreetName;
    document.querySelector('#IDENTCOMMUNE').value = fakeLandlordCity;

    // click on "Rechercher" button
    setTimeout(function() { document.querySelector('.bouton2').click()}, 50);

    // click on "Continuer" button
    setTimeout(function() { document.querySelector("input[name='BCContinuer']").click()}, 50);
  }

  // check webpage "Info bailleur - détails"
  if (document.querySelector('#libTypeVoie.zoneDeSaisie.ui-autocomplete-input') != null && document.querySelector('#lieuDit') != null) {
    console.log(19);
    // select "Type de voie" / "Type de num"
    // /!\ by default (no data from API)
    if (document.querySelector("select[name='typeVoiePropose']")) {
      document.querySelector("select[name='typeVoiePropose']").value = "RUE";
    }
    if (document.querySelector("select[name='numeroVoie']")) {
      document.querySelector("select[name='numeroVoie']").value = " ";
    }


    // click on "Continuer" button
    setTimeout(function() { document.querySelector("input[name='BCContinuer']").click()}, 50);
  }

  // check webpage "Caractéristiques du logement"
  if (document.querySelector('#surfaceLogement') != null ) {
    console.log(20);
    // enter "Surface du logement"
    document.querySelector('#surfaceLogement').value = userObj.habitation.size;

    // check checkbox "Logement meublé"
    // (only case treated: "oui")
    if (userObj.habitation.furnished == true) {
      document.querySelector('#estUnLogementMeubleNon').click();
    }

    // check checkbox "Pièce unique sans WC"
    // (only case treated: "non")
    // /!\ by default (no data from API)
    document.querySelector('#estUneChambreNon').click();

    // check checkbox "Logement décent"
    // (only case treated: "oui")
    // /!\ by default (no data from API)
    document.querySelector('#estDecentOui').click();

    // click on "Continuer" button
    setTimeout(function() { document.querySelector("input[name='BCContinuer']").click()}, 50);
  }

  // check webpage "Loyer"
  if (document.querySelector('#montantLoyer') != null ) {
    console.log(21);
    var event = document.createEvent('Event');
    event.initEvent('input', true, true);
    // enter "Montant loyer"
    // document.querySelectorAll('#montantLoyer')[0].value = userObj.habitation.rent;
    document.querySelectorAll('#montantLoyer')[0].value = '880';
    document.querySelectorAll('#montantLoyer')[1].value = '00'

    // enter "Mois du premier loyer payé"
    const firstMonth = document.querySelector('#moisPremierLoyer');
    // firstMonth.value = userObj.habitation.lease_start_date.split("-").reverse().join("-").replace(/-/g,"/").substring(3);
    firstMonth.value = '09/2020'
    firstMonth.dispatchEvent(event);

    // enter the start date of the lease
    const leaseDate = document.querySelector('#dateEffetBail');
    // leaseDate.value = userObj.habitation.lease_start_date.split("-").reverse().join("-").replace(/-/g,"/");
    leaseDate.value = '04/09/2020'
    leaseDate.dispatchEvent(event);

    // select the lease's owner
    document.querySelector('#titulaireBail').value = "V  "

    // click on "Continuer" button
    setTimeout(function() { document.querySelector("input[name='BCContinuer']").click()}, 50);
  }

  // check webpage "Double résidence pour stage"
  if (document.querySelector('#fraisDoubleResidenceNon') != null) {
    console.log(22);
     // check checkbox "Loyer supplémentaire pour l'occupation d'un deuxième logement"
    // (only case treated: "non")
    // /!\ by default (no data from API)
    document.querySelector('#fraisDoubleResidenceNon').click();

    // click on "Continuer" button
    setTimeout(function() { document.querySelector("input[name='BCContinuer']").click()}, 50);

  }

  // check webpage "Récap"
  if (document.querySelector('#idTituCompte')) {
    console.log(23);
    dialogBox();
  }
}

function autoCompleteFormFithPart() {
  // check webpage "Info bailleur"
  if (document.querySelector('#libTypeVoie.zoneDeSaisie.ui-autocomplete-input') != null) {
    console.log(1);
    // enter landlord's information
    // /!\ by default (no data from API)
    const fakeLandlordLastName = 'DUPONT';
    const fakeLandlordFirstName = 'MARTIN';
    const fakeLandlordNum = '2';
    const fakeLandlordStreetType = 'RUE';
    const fakeLandlordStreetName = 'COLBERT';
    const fakeLandlordCity = 'RETHEL';

    document.querySelectorAll('.zoneDeSaisie')[0].value = fakeLandlordLastName;
    document.querySelectorAll('.zoneDeSaisie')[1].value = fakeLandlordFirstName;
    document.querySelector('#numeroVoie').value = fakeLandlordNum;
    document.querySelector('#libTypeVoie').value = fakeLandlordStreetType;
    document.querySelector('#nomVoie').value = fakeLandlordStreetName;
    document.querySelector('#IDENTCOMMUNE').value = fakeLandlordCity;

    // click on "Rechercher" button
    setTimeout(function() { document.querySelector('.bouton2').click()}, 50);
  }

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

  if(window.location.href.includes(urlFourthPage)) {
    console.log('url4');
    autoCompleteFormFourthPart();
  }

  if(window.location.href.includes(urlFithPage)) {
    console.log('url5');
    autoCompleteFormFithPart();
  }
}

setTimeout(function() { actions()}, 50);

