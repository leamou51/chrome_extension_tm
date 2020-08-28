const urlFirstPage = 'https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/faireunedemandedeprestation/demanderlaideaulogementexperimentation?eventName=eventAideAuLogement&origineDemande=WFM&typeActualisation=DSIT_DR&codePrestation=DAL#/acces'

const urlSecondPage = 'https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/faireunedemandedeprestation/demanderlaideaulogement/!ut/p/a1/lZDRjoIwFES_xQ8wnQqoPKJIrVVxZYmWF9MomkYpBo3fb0nIJj4I2ft2kzNzZy7JyJ5kRr30RT11adSt3rPhYRNTNhcJWByuxuBp6CCabSkCWEBaAF_GArV-OHcZ9QUEE36EgK8T4U7gYDNo9C1Ax_0dyT6RcTSNwH0vDNc_3EZwugA0QFuHrhbSthh9BTyXpKasCvvPpPY6V8V1atQ5ONZfJrLKtdFPrW76kVeN119ciKWtTAfxImDUAaP_8bLAsTzl9_JB5MgDBbkX6R6a92VxWP3msvcGivDp6g!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/'

//the actions to do for each states
function state0Actions()
{
  if (window.location.href == urlFirstPage) {
    console.log('url1');
  }

  if(window.location.href == urlSecondPage) {
    console.log('url2');
  }
}

function state1Actions()
{
  console.log('state 1');
}

// chrome.storage.local.onChanged.addListener(function(changes, areaName)
// {
//     if(areaName != "local" || changes.state == null) return;

//     switch(changes.state)
//     {
//         case 0 : state0Actions(); break;
//         case 1 : state1Actions(); break;
//     }
// })

chrome.storage.local.get("state", function(result){
    if(result.state == null) state0Actions(); //Do what you want if the state is not yet initialised
    else if (result.state == 0) state0Actions(); //Do what you want
    else if (result.state == 1) state1Actions(); //Do what you want
})


