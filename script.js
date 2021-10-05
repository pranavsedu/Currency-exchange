document.addEventListener('DOMContentLoaded', function() {

            document.querySelector('form').onsubmit = function() {
           
           const button = document.querySelector('#button_submit');
           
           button.innerHTML = '<div class="loading loading--full-height"></div>';
           
                        const base_curr = document.querySelector('#base_curr').value;
								const conv_curr = document.querySelector('#conv_curr').value;
						  	const conv_amount = document.querySelector('#conv_amount').value;
						 		const key = "2918f504b39dcdca4b9f0b44bab94390aaab25a4";

fetch(`https://api.getgeoapi.com/v2/currency/convert?api_key=${key}&from=${base_curr}&to=${conv_curr}&amount=${conv_amount}&format=json`)
  .then(response => response.json())
  .then(data => {

  				const data_raw = JSON.stringify(data);
  				const data_status = data.status;
  				const data_base_currency_code = data.base_currency_code;
  				const data_base_currency_name = data.base_currency_name;
  				const data_amount = data.amount;
  				const data_updated_date = data.updated_date;
  				// const rates = data.rates;
  				var data_currency_name;
  				var data_rate;
  				var data_rate_for_amount;
  				var data_currency_name_code;
  				
  		if(conv_curr=='INR'){
var data_currency_name_code = "INR";
var data_currency_name = data.rates.INR.currency_name;
var data_rate = data.rates.INR.rate;
var data_rate_for_amount = data.rates.INR.rate_for_amount;
}

else if(conv_curr=='STN'){
var data_currency_name_code = "STN";
var data_currency_name = data.rates.STN.currency_name;
var data_rate = data.rates.STN.rate;
var data_rate_for_amount = data.rates.STN.rate_for_amount;
}

else if(conv_curr=='XAG'){
var data_currency_name_code = "XAG";
var data_currency_name = data.rates.XAG.currency_name;
var data_rate = data.rates.XAG.rate;
var data_rate_for_amount = data.rates.XAG.rate_for_amount;
}

else if(conv_curr=='XAU'){
var data_currency_name_code = "XAU";
var data_currency_name = data.rates.XAU.currency_name;
var data_rate = data.rates.XAU.rate;
var data_rate_for_amount = data.rates.XAU.rate_for_amount;
}

else if(conv_curr=='PLN'){
var data_currency_name_code = "PLN";
var data_currency_name = data.rates.PLN.currency_name;
var data_rate = data.rates.PLN.rate;
var data_rate_for_amount = data.rates.PLN.rate_for_amount;
}

else if(conv_curr=='UGX'){
var data_currency_name_code = "UGX";
var data_currency_name = data.rates.UGX.currency_name;
var data_rate = data.rates.UGX.rate;
var data_rate_for_amount = data.rates.UGX.rate_for_amount;
}

else if(conv_curr=='GGP'){
var data_currency_name_code = "GGP";
var data_currency_name = data.rates.GGP.currency_name;
var data_rate = data.rates.GGP.rate;
var data_rate_for_amount = data.rates.GGP.rate_for_amount;
}

else if(conv_curr=='MWK'){
var data_currency_name_code = "MWK";
var data_currency_name = data.rates.MWK.currency_name;
var data_rate = data.rates.MWK.rate;
var data_rate_for_amount = data.rates.MWK.rate_for_amount;
}

else if(conv_curr=='NAD'){
var data_currency_name_code = "NAD";
var data_currency_name = data.rates.NAD.currency_name;
var data_rate = data.rates.NAD.rate;
var data_rate_for_amount = data.rates.NAD.rate_for_amount;
}

else if(conv_curr=='ALL'){
var data_currency_name_code = "ALL";
var data_currency_name = data.rates.ALL.currency_name;
var data_rate = data.rates.ALL.rate;
var data_rate_for_amount = data.rates.ALL.rate_for_amount;
}

else if(conv_curr=='BHD'){
var data_currency_name_code = "BHD";
var data_currency_name = data.rates.BHD.currency_name;
var data_rate = data.rates.BHD.rate;
var data_rate_for_amount = data.rates.BHD.rate_for_amount;
}

else if(conv_curr=='JEP'){
var data_currency_name_code = "JEP";
var data_currency_name = data.rates.JEP.currency_name;
var data_rate = data.rates.JEP.rate;
var data_rate_for_amount = data.rates.JEP.rate_for_amount;
}

else if(conv_curr=='BWP'){
var data_currency_name_code = "BWP";
var data_currency_name = data.rates.BWP.currency_name;
var data_rate = data.rates.BWP.rate;
var data_rate_for_amount = data.rates.BWP.rate_for_amount;
}

else if(conv_curr=='MRU'){
var data_currency_name_code = "MRU";
var data_currency_name = data.rates.MRU.currency_name;
var data_rate = data.rates.MRU.rate;
var data_rate_for_amount = data.rates.MRU.rate_for_amount;
}

else if(conv_curr=='BMD'){
var data_currency_name_code = "BMD";
var data_currency_name = data.rates.BMD.currency_name;
var data_rate = data.rates.BMD.rate;
var data_rate_for_amount = data.rates.BMD.rate_for_amount;
}

else if(conv_curr=='MNT'){
var data_currency_name_code = "MNT";
var data_currency_name = data.rates.MNT.currency_name;
var data_rate = data.rates.MNT.rate;
var data_rate_for_amount = data.rates.MNT.rate_for_amount;
}

else if(conv_curr=='FKP'){
var data_currency_name_code = "FKP";
var data_currency_name = data.rates.FKP.currency_name;
var data_rate = data.rates.FKP.rate;
var data_rate_for_amount = data.rates.FKP.rate_for_amount;
}

else if(conv_curr=='PYG'){
var data_currency_name_code = "PYG";
var data_currency_name = data.rates.PYG.currency_name;
var data_rate = data.rates.PYG.rate;
var data_rate_for_amount = data.rates.PYG.rate_for_amount;
}

else if(conv_curr=='AUD'){
var data_currency_name_code = "AUD";
var data_currency_name = data.rates.AUD.currency_name;
var data_rate = data.rates.AUD.rate;
var data_rate_for_amount = data.rates.AUD.rate_for_amount;
}

else if(conv_curr=='KYD'){
var data_currency_name_code = "KYD";
var data_currency_name = data.rates.KYD.currency_name;
var data_rate = data.rates.KYD.rate;
var data_rate_for_amount = data.rates.KYD.rate_for_amount;
}

else if(conv_curr=='RWF'){
var data_currency_name_code = "RWF";
var data_currency_name = data.rates.RWF.currency_name;
var data_rate = data.rates.RWF.rate;
var data_rate_for_amount = data.rates.RWF.rate_for_amount;
}

else if(conv_curr=='WST'){
var data_currency_name_code = "WST";
var data_currency_name = data.rates.WST.currency_name;
var data_rate = data.rates.WST.rate;
var data_rate_for_amount = data.rates.WST.rate_for_amount;
}

else if(conv_curr=='SHP'){
var data_currency_name_code = "SHP";
var data_currency_name = data.rates.SHP.currency_name;
var data_rate = data.rates.SHP.rate;
var data_rate_for_amount = data.rates.SHP.rate_for_amount;
}

else if(conv_curr=='SOS'){
var data_currency_name_code = "SOS";
var data_currency_name = data.rates.SOS.currency_name;
var data_rate = data.rates.SOS.rate;
var data_rate_for_amount = data.rates.SOS.rate_for_amount;
}

else if(conv_curr=='SSP'){
var data_currency_name_code = "SSP";
var data_currency_name = data.rates.SSP.currency_name;
var data_rate = data.rates.SSP.rate;
var data_rate_for_amount = data.rates.SSP.rate_for_amount;
}

else if(conv_curr=='BIF'){
var data_currency_name_code = "BIF";
var data_currency_name = data.rates.BIF.currency_name;
var data_rate = data.rates.BIF.rate;
var data_rate_for_amount = data.rates.BIF.rate_for_amount;
}

else if(conv_curr=='SEK'){
var data_currency_name_code = "SEK";
var data_currency_name = data.rates.SEK.currency_name;
var data_rate = data.rates.SEK.rate;
var data_rate_for_amount = data.rates.SEK.rate_for_amount;
}

else if(conv_curr=='CUC'){
var data_currency_name_code = "CUC";
var data_currency_name = data.rates.CUC.currency_name;
var data_rate = data.rates.CUC.rate;
var data_rate_for_amount = data.rates.CUC.rate_for_amount;
}

else if(conv_curr=='BTN'){
var data_currency_name_code = "BTN";
var data_currency_name = data.rates.BTN.currency_name;
var data_rate = data.rates.BTN.rate;
var data_rate_for_amount = data.rates.BTN.rate_for_amount;
}

else if(conv_curr=='MOP'){
var data_currency_name_code = "MOP";
var data_currency_name = data.rates.MOP.currency_name;
var data_rate = data.rates.MOP.rate;
var data_rate_for_amount = data.rates.MOP.rate_for_amount;
}

else if(conv_curr=='XDR'){
var data_currency_name_code = "XDR";
var data_currency_name = data.rates.XDR.currency_name;
var data_rate = data.rates.XDR.rate;
var data_rate_for_amount = data.rates.XDR.rate_for_amount;
}

else if(conv_curr=='IMP'){
var data_currency_name_code = "IMP";
var data_currency_name = data.rates.IMP.currency_name;
var data_rate = data.rates.IMP.rate;
var data_rate_for_amount = data.rates.IMP.rate_for_amount;
}

else if(conv_curr=='BYN'){
var data_currency_name_code = "BYN";
var data_currency_name = data.rates.BYN.currency_name;
var data_rate = data.rates.BYN.rate;
var data_rate_for_amount = data.rates.BYN.rate_for_amount;
}

else if(conv_curr=='BOB'){
var data_currency_name_code = "BOB";
var data_currency_name = data.rates.BOB.currency_name;
var data_rate = data.rates.BOB.rate;
var data_rate_for_amount = data.rates.BOB.rate_for_amount;
}

else if(conv_curr=='SRD'){
var data_currency_name_code = "SRD";
var data_currency_name = data.rates.SRD.currency_name;
var data_rate = data.rates.SRD.rate;
var data_rate_for_amount = data.rates.SRD.rate_for_amount;
}

else if(conv_curr=='GEL'){
var data_currency_name_code = "GEL";
var data_currency_name = data.rates.GEL.currency_name;
var data_rate = data.rates.GEL.rate;
var data_rate_for_amount = data.rates.GEL.rate_for_amount;
}

else if(conv_curr=='ZWL'){
var data_currency_name_code = "ZWL";
var data_currency_name = data.rates.ZWL.currency_name;
var data_rate = data.rates.ZWL.rate;
var data_rate_for_amount = data.rates.ZWL.rate_for_amount;
}

else if(conv_curr=='EUR'){
var data_currency_name_code = "EUR";
var data_currency_name = data.rates.EUR.currency_name;
var data_rate = data.rates.EUR.rate;
var data_rate_for_amount = data.rates.EUR.rate_for_amount;
}

else if(conv_curr=='BBD'){
var data_currency_name_code = "BBD";
var data_currency_name = data.rates.BBD.currency_name;
var data_rate = data.rates.BBD.rate;
var data_rate_for_amount = data.rates.BBD.rate_for_amount;
}

else if(conv_curr=='RSD'){
var data_currency_name_code = "RSD";
var data_currency_name = data.rates.RSD.currency_name;
var data_rate = data.rates.RSD.rate;
var data_rate_for_amount = data.rates.RSD.rate_for_amount;
}

else if(conv_curr=='SDG'){
var data_currency_name_code = "SDG";
var data_currency_name = data.rates.SDG.currency_name;
var data_rate = data.rates.SDG.rate;
var data_rate_for_amount = data.rates.SDG.rate_for_amount;
}

else if(conv_curr=='VND'){
var data_currency_name_code = "VND";
var data_currency_name = data.rates.VND.currency_name;
var data_rate = data.rates.VND.rate;
var data_rate_for_amount = data.rates.VND.rate_for_amount;
}

else if(conv_curr=='VES'){
var data_currency_name_code = "VES";
var data_currency_name = data.rates.VES.currency_name;
var data_rate = data.rates.VES.rate;
var data_rate_for_amount = data.rates.VES.rate_for_amount;
}

else if(conv_curr=='ZMW'){
var data_currency_name_code = "ZMW";
var data_currency_name = data.rates.ZMW.currency_name;
var data_rate = data.rates.ZMW.rate;
var data_rate_for_amount = data.rates.ZMW.rate_for_amount;
}

else if(conv_curr=='KGS'){
var data_currency_name_code = "KGS";
var data_currency_name = data.rates.KGS.currency_name;
var data_rate = data.rates.KGS.rate;
var data_rate_for_amount = data.rates.KGS.rate_for_amount;
}

else if(conv_curr=='HUF'){
var data_currency_name_code = "HUF";
var data_currency_name = data.rates.HUF.currency_name;
var data_rate = data.rates.HUF.rate;
var data_rate_for_amount = data.rates.HUF.rate_for_amount;
}

else if(conv_curr=='BND'){
var data_currency_name_code = "BND";
var data_currency_name = data.rates.BND.currency_name;
var data_rate = data.rates.BND.rate;
var data_rate_for_amount = data.rates.BND.rate_for_amount;
}

else if(conv_curr=='BAM'){
var data_currency_name_code = "BAM";
var data_currency_name = data.rates.BAM.currency_name;
var data_rate = data.rates.BAM.rate;
var data_rate_for_amount = data.rates.BAM.rate_for_amount;
}

else if(conv_curr=='CVE'){
var data_currency_name_code = "CVE";
var data_currency_name = data.rates.CVE.currency_name;
var data_rate = data.rates.CVE.rate;
var data_rate_for_amount = data.rates.CVE.rate_for_amount;
}

else if(conv_curr=='BGN'){
var data_currency_name_code = "BGN";
var data_currency_name = data.rates.BGN.currency_name;
var data_rate = data.rates.BGN.rate;
var data_rate_for_amount = data.rates.BGN.rate_for_amount;
}

else if(conv_curr=='NOK'){
var data_currency_name_code = "NOK";
var data_currency_name = data.rates.NOK.currency_name;
var data_rate = data.rates.NOK.rate;
var data_rate_for_amount = data.rates.NOK.rate_for_amount;
}

else if(conv_curr=='BRL'){
var data_currency_name_code = "BRL";
var data_currency_name = data.rates.BRL.currency_name;
var data_rate = data.rates.BRL.rate;
var data_rate_for_amount = data.rates.BRL.rate_for_amount;
}

else if(conv_curr=='JPY'){
var data_currency_name_code = "JPY";
var data_currency_name = data.rates.JPY.currency_name;
var data_rate = data.rates.JPY.rate;
var data_rate_for_amount = data.rates.JPY.rate_for_amount;
}

else if(conv_curr=='HRK'){
var data_currency_name_code = "HRK";
var data_currency_name = data.rates.HRK.currency_name;
var data_rate = data.rates.HRK.rate;
var data_rate_for_amount = data.rates.HRK.rate_for_amount;
}

else if(conv_curr=='HKD'){
var data_currency_name_code = "HKD";
var data_currency_name = data.rates.HKD.currency_name;
var data_rate = data.rates.HKD.rate;
var data_rate_for_amount = data.rates.HKD.rate_for_amount;
}

else if(conv_curr=='ISK'){
var data_currency_name_code = "ISK";
var data_currency_name = data.rates.ISK.currency_name;
var data_rate = data.rates.ISK.rate;
var data_rate_for_amount = data.rates.ISK.rate_for_amount;
}

else if(conv_curr=='IDR'){
var data_currency_name_code = "IDR";
var data_currency_name = data.rates.IDR.currency_name;
var data_rate = data.rates.IDR.rate;
var data_rate_for_amount = data.rates.IDR.rate_for_amount;
}

else if(conv_curr=='KRW'){
var data_currency_name_code = "KRW";
var data_currency_name = data.rates.KRW.currency_name;
var data_rate = data.rates.KRW.rate;
var data_rate_for_amount = data.rates.KRW.rate_for_amount;
}

else if(conv_curr=='KHR'){
var data_currency_name_code = "KHR";
var data_currency_name = data.rates.KHR.currency_name;
var data_rate = data.rates.KHR.rate;
var data_rate_for_amount = data.rates.KHR.rate_for_amount;
}

else if(conv_curr=='XAF'){
var data_currency_name_code = "XAF";
var data_currency_name = data.rates.XAF.currency_name;
var data_rate = data.rates.XAF.rate;
var data_rate_for_amount = data.rates.XAF.rate_for_amount;
}

else if(conv_curr=='CHF'){
var data_currency_name_code = "CHF";
var data_currency_name = data.rates.CHF.currency_name;
var data_rate = data.rates.CHF.rate;
var data_rate_for_amount = data.rates.CHF.rate_for_amount;
}

else if(conv_curr=='MXN'){
var data_currency_name_code = "MXN";
var data_currency_name = data.rates.MXN.currency_name;
var data_rate = data.rates.MXN.rate;
var data_rate_for_amount = data.rates.MXN.rate_for_amount;
}

else if(conv_curr=='PHP'){
var data_currency_name_code = "PHP";
var data_currency_name = data.rates.PHP.currency_name;
var data_rate = data.rates.PHP.rate;
var data_rate_for_amount = data.rates.PHP.rate_for_amount;
}

else if(conv_curr=='RON'){
var data_currency_name_code = "RON";
var data_currency_name = data.rates.RON.currency_name;
var data_rate = data.rates.RON.rate;
var data_rate_for_amount = data.rates.RON.rate_for_amount;
}

else if(conv_curr=='RUB'){
var data_currency_name_code = "RUB";
var data_currency_name = data.rates.RUB.currency_name;
var data_rate = data.rates.RUB.rate;
var data_rate_for_amount = data.rates.RUB.rate_for_amount;
}

else if(conv_curr=='SGD'){
var data_currency_name_code = "SGD";
var data_currency_name = data.rates.SGD.currency_name;
var data_rate = data.rates.SGD.rate;
var data_rate_for_amount = data.rates.SGD.rate_for_amount;
}

else if(conv_curr=='AED'){
var data_currency_name_code = "AED";
var data_currency_name = data.rates.AED.currency_name;
var data_rate = data.rates.AED.rate;
var data_rate_for_amount = data.rates.AED.rate_for_amount;
}

else if(conv_curr=='KWD'){
var data_currency_name_code = "KWD";
var data_currency_name = data.rates.KWD.currency_name;
var data_rate = data.rates.KWD.rate;
var data_rate_for_amount = data.rates.KWD.rate_for_amount;
}

else if(conv_curr=='CAD'){
var data_currency_name_code = "CAD";
var data_currency_name = data.rates.CAD.currency_name;
var data_rate = data.rates.CAD.rate;
var data_rate_for_amount = data.rates.CAD.rate_for_amount;
}

else if(conv_curr=='PKR'){
var data_currency_name_code = "PKR";
var data_currency_name = data.rates.PKR.currency_name;
var data_rate = data.rates.PKR.rate;
var data_rate_for_amount = data.rates.PKR.rate_for_amount;
}

else if(conv_curr=='CLP'){
var data_currency_name_code = "CLP";
var data_currency_name = data.rates.CLP.currency_name;
var data_rate = data.rates.CLP.rate;
var data_rate_for_amount = data.rates.CLP.rate_for_amount;
}

else if(conv_curr=='CNY'){
var data_currency_name_code = "CNY";
var data_currency_name = data.rates.CNY.currency_name;
var data_rate = data.rates.CNY.rate;
var data_rate_for_amount = data.rates.CNY.rate_for_amount;
}

else if(conv_curr=='COP'){
var data_currency_name_code = "COP";
var data_currency_name = data.rates.COP.currency_name;
var data_rate = data.rates.COP.rate;
var data_rate_for_amount = data.rates.COP.rate_for_amount;
}

else if(conv_curr=='AOA'){
var data_currency_name_code = "AOA";
var data_currency_name = data.rates.AOA.currency_name;
var data_rate = data.rates.AOA.rate;
var data_rate_for_amount = data.rates.AOA.rate_for_amount;
}

else if(conv_curr=='KMF'){
var data_currency_name_code = "KMF";
var data_currency_name = data.rates.KMF.currency_name;
var data_rate = data.rates.KMF.rate;
var data_rate_for_amount = data.rates.KMF.rate_for_amount;
}

else if(conv_curr=='CRC'){
var data_currency_name_code = "CRC";
var data_currency_name = data.rates.CRC.currency_name;
var data_rate = data.rates.CRC.rate;
var data_rate_for_amount = data.rates.CRC.rate_for_amount;
}

else if(conv_curr=='CUP'){
var data_currency_name_code = "CUP";
var data_currency_name = data.rates.CUP.currency_name;
var data_rate = data.rates.CUP.rate;
var data_rate_for_amount = data.rates.CUP.rate_for_amount;
}

else if(conv_curr=='GNF'){
var data_currency_name_code = "GNF";
var data_currency_name = data.rates.GNF.currency_name;
var data_rate = data.rates.GNF.rate;
var data_rate_for_amount = data.rates.GNF.rate_for_amount;
}

else if(conv_curr=='NZD'){
var data_currency_name_code = "NZD";
var data_currency_name = data.rates.NZD.currency_name;
var data_rate = data.rates.NZD.rate;
var data_rate_for_amount = data.rates.NZD.rate_for_amount;
}

else if(conv_curr=='EGP'){
var data_currency_name_code = "EGP";
var data_currency_name = data.rates.EGP.currency_name;
var data_rate = data.rates.EGP.rate;
var data_rate_for_amount = data.rates.EGP.rate_for_amount;
}

else if(conv_curr=='DJF'){
var data_currency_name_code = "DJF";
var data_currency_name = data.rates.DJF.currency_name;
var data_rate = data.rates.DJF.rate;
var data_rate_for_amount = data.rates.DJF.rate_for_amount;
}

else if(conv_curr=='ANG'){
var data_currency_name_code = "ANG";
var data_currency_name = data.rates.ANG.currency_name;
var data_rate = data.rates.ANG.rate;
var data_rate_for_amount = data.rates.ANG.rate_for_amount;
}

else if(conv_curr=='DOP'){
var data_currency_name_code = "DOP";
var data_currency_name = data.rates.DOP.currency_name;
var data_rate = data.rates.DOP.rate;
var data_rate_for_amount = data.rates.DOP.rate_for_amount;
}

else if(conv_curr=='JOD'){
var data_currency_name_code = "JOD";
var data_currency_name = data.rates.JOD.currency_name;
var data_rate = data.rates.JOD.rate;
var data_rate_for_amount = data.rates.JOD.rate_for_amount;
}

else if(conv_curr=='AZN'){
var data_currency_name_code = "AZN";
var data_currency_name = data.rates.AZN.currency_name;
var data_rate = data.rates.AZN.rate;
var data_rate_for_amount = data.rates.AZN.rate_for_amount;
}

else if(conv_curr=='SVC'){
var data_currency_name_code = "SVC";
var data_currency_name = data.rates.SVC.currency_name;
var data_rate = data.rates.SVC.rate;
var data_rate_for_amount = data.rates.SVC.rate_for_amount;
}

else if(conv_curr=='NGN'){
var data_currency_name_code = "NGN";
var data_currency_name = data.rates.NGN.currency_name;
var data_rate = data.rates.NGN.rate;
var data_rate_for_amount = data.rates.NGN.rate_for_amount;
}

else if(conv_curr=='ERN'){
var data_currency_name_code = "ERN";
var data_currency_name = data.rates.ERN.currency_name;
var data_rate = data.rates.ERN.rate;
var data_rate_for_amount = data.rates.ERN.rate_for_amount;
}

else if(conv_curr=='SZL'){
var data_currency_name_code = "SZL";
var data_currency_name = data.rates.SZL.currency_name;
var data_rate = data.rates.SZL.rate;
var data_rate_for_amount = data.rates.SZL.rate_for_amount;
}

else if(conv_curr=='DKK'){
var data_currency_name_code = "DKK";
var data_currency_name = data.rates.DKK.currency_name;
var data_rate = data.rates.DKK.rate;
var data_rate_for_amount = data.rates.DKK.rate_for_amount;
}

else if(conv_curr=='ETB'){
var data_currency_name_code = "ETB";
var data_currency_name = data.rates.ETB.currency_name;
var data_rate = data.rates.ETB.rate;
var data_rate_for_amount = data.rates.ETB.rate_for_amount;
}

else if(conv_curr=='FJD'){
var data_currency_name_code = "FJD";
var data_currency_name = data.rates.FJD.currency_name;
var data_rate = data.rates.FJD.rate;
var data_rate_for_amount = data.rates.FJD.rate_for_amount;
}

else if(conv_curr=='XPF'){
var data_currency_name_code = "XPF";
var data_currency_name = data.rates.XPF.currency_name;
var data_rate = data.rates.XPF.rate;
var data_rate_for_amount = data.rates.XPF.rate_for_amount;
}

else if(conv_curr=='GMD'){
var data_currency_name_code = "GMD";
var data_currency_name = data.rates.GMD.currency_name;
var data_rate = data.rates.GMD.rate;
var data_rate_for_amount = data.rates.GMD.rate_for_amount;
}

else if(conv_curr=='AFN'){
var data_currency_name_code = "AFN";
var data_currency_name = data.rates.AFN.currency_name;
var data_rate = data.rates.AFN.rate;
var data_rate_for_amount = data.rates.AFN.rate_for_amount;
}

else if(conv_curr=='GHS'){
var data_currency_name_code = "GHS";
var data_currency_name = data.rates.GHS.currency_name;
var data_rate = data.rates.GHS.rate;
var data_rate_for_amount = data.rates.GHS.rate_for_amount;
}

else if(conv_curr=='GIP'){
var data_currency_name_code = "GIP";
var data_currency_name = data.rates.GIP.currency_name;
var data_rate = data.rates.GIP.rate;
var data_rate_for_amount = data.rates.GIP.rate_for_amount;
}

else if(conv_curr=='GTQ'){
var data_currency_name_code = "GTQ";
var data_currency_name = data.rates.GTQ.currency_name;
var data_rate = data.rates.GTQ.rate;
var data_rate_for_amount = data.rates.GTQ.rate_for_amount;
}

else if(conv_curr=='HNL'){
var data_currency_name_code = "HNL";
var data_currency_name = data.rates.HNL.currency_name;
var data_rate = data.rates.HNL.rate;
var data_rate_for_amount = data.rates.HNL.rate_for_amount;
}

else if(conv_curr=='GYD'){
var data_currency_name_code = "GYD";
var data_currency_name = data.rates.GYD.currency_name;
var data_rate = data.rates.GYD.rate;
var data_rate_for_amount = data.rates.GYD.rate_for_amount;
}

else if(conv_curr=='HTG'){
var data_currency_name_code = "HTG";
var data_currency_name = data.rates.HTG.currency_name;
var data_rate = data.rates.HTG.rate;
var data_rate_for_amount = data.rates.HTG.rate_for_amount;
}

else if(conv_curr=='XCD'){
var data_currency_name_code = "XCD";
var data_currency_name = data.rates.XCD.currency_name;
var data_rate = data.rates.XCD.rate;
var data_rate_for_amount = data.rates.XCD.rate_for_amount;
}

else if(conv_curr=='GBP'){
var data_currency_name_code = "GBP";
var data_currency_name = data.rates.GBP.currency_name;
var data_rate = data.rates.GBP.rate;
var data_rate_for_amount = data.rates.GBP.rate_for_amount;
}

else if(conv_curr=='AMD'){
var data_currency_name_code = "AMD";
var data_currency_name = data.rates.AMD.currency_name;
var data_rate = data.rates.AMD.rate;
var data_rate_for_amount = data.rates.AMD.rate_for_amount;
}

else if(conv_curr=='IRR'){
var data_currency_name_code = "IRR";
var data_currency_name = data.rates.IRR.currency_name;
var data_rate = data.rates.IRR.rate;
var data_rate_for_amount = data.rates.IRR.rate_for_amount;
}

else if(conv_curr=='JMD'){
var data_currency_name_code = "JMD";
var data_currency_name = data.rates.JMD.currency_name;
var data_rate = data.rates.JMD.rate;
var data_rate_for_amount = data.rates.JMD.rate_for_amount;
}

else if(conv_curr=='IQD'){
var data_currency_name_code = "IQD";
var data_currency_name = data.rates.IQD.currency_name;
var data_rate = data.rates.IQD.rate;
var data_rate_for_amount = data.rates.IQD.rate_for_amount;
}

else if(conv_curr=='KZT'){
var data_currency_name_code = "KZT";
var data_currency_name = data.rates.KZT.currency_name;
var data_rate = data.rates.KZT.rate;
var data_rate_for_amount = data.rates.KZT.rate_for_amount;
}

else if(conv_curr=='KES'){
var data_currency_name_code = "KES";
var data_currency_name = data.rates.KES.currency_name;
var data_rate = data.rates.KES.rate;
var data_rate_for_amount = data.rates.KES.rate_for_amount;
}

else if(conv_curr=='ILS'){
var data_currency_name_code = "ILS";
var data_currency_name = data.rates.ILS.currency_name;
var data_rate = data.rates.ILS.rate;
var data_rate_for_amount = data.rates.ILS.rate_for_amount;
}

else if(conv_curr=='LYD'){
var data_currency_name_code = "LYD";
var data_currency_name = data.rates.LYD.currency_name;
var data_rate = data.rates.LYD.rate;
var data_rate_for_amount = data.rates.LYD.rate_for_amount;
}

else if(conv_curr=='LSL'){
var data_currency_name_code = "LSL";
var data_currency_name = data.rates.LSL.currency_name;
var data_rate = data.rates.LSL.rate;
var data_rate_for_amount = data.rates.LSL.rate_for_amount;
}

else if(conv_curr=='LBP'){
var data_currency_name_code = "LBP";
var data_currency_name = data.rates.LBP.currency_name;
var data_rate = data.rates.LBP.rate;
var data_rate_for_amount = data.rates.LBP.rate_for_amount;
}

else if(conv_curr=='LRD'){
var data_currency_name_code = "LRD";
var data_currency_name = data.rates.LRD.currency_name;
var data_rate = data.rates.LRD.rate;
var data_rate_for_amount = data.rates.LRD.rate_for_amount;
}

else if(conv_curr=='AWG'){
var data_currency_name_code = "AWG";
var data_currency_name = data.rates.AWG.currency_name;
var data_rate = data.rates.AWG.rate;
var data_rate_for_amount = data.rates.AWG.rate_for_amount;
}

else if(conv_curr=='MKD'){
var data_currency_name_code = "MKD";
var data_currency_name = data.rates.MKD.currency_name;
var data_rate = data.rates.MKD.rate;
var data_rate_for_amount = data.rates.MKD.rate_for_amount;
}

else if(conv_curr=='LAK'){
var data_currency_name_code = "LAK";
var data_currency_name = data.rates.LAK.currency_name;
var data_rate = data.rates.LAK.rate;
var data_rate_for_amount = data.rates.LAK.rate_for_amount;
}

else if(conv_curr=='MGA'){
var data_currency_name_code = "MGA";
var data_currency_name = data.rates.MGA.currency_name;
var data_rate = data.rates.MGA.rate;
var data_rate_for_amount = data.rates.MGA.rate_for_amount;
}

else if(conv_curr=='ZAR'){
var data_currency_name_code = "ZAR";
var data_currency_name = data.rates.ZAR.currency_name;
var data_rate = data.rates.ZAR.rate;
var data_rate_for_amount = data.rates.ZAR.rate_for_amount;
}

else if(conv_curr=='MDL'){
var data_currency_name_code = "MDL";
var data_currency_name = data.rates.MDL.currency_name;
var data_rate = data.rates.MDL.rate;
var data_rate_for_amount = data.rates.MDL.rate_for_amount;
}

else if(conv_curr=='MVR'){
var data_currency_name_code = "MVR";
var data_currency_name = data.rates.MVR.currency_name;
var data_rate = data.rates.MVR.rate;
var data_rate_for_amount = data.rates.MVR.rate_for_amount;
}

else if(conv_curr=='MUR'){
var data_currency_name_code = "MUR";
var data_currency_name = data.rates.MUR.currency_name;
var data_rate = data.rates.MUR.rate;
var data_rate_for_amount = data.rates.MUR.rate_for_amount;
}

else if(conv_curr=='MMK'){
var data_currency_name_code = "MMK";
var data_currency_name = data.rates.MMK.currency_name;
var data_rate = data.rates.MMK.rate;
var data_rate_for_amount = data.rates.MMK.rate_for_amount;
}

else if(conv_curr=='MAD'){
var data_currency_name_code = "MAD";
var data_currency_name = data.rates.MAD.currency_name;
var data_rate = data.rates.MAD.rate;
var data_rate_for_amount = data.rates.MAD.rate_for_amount;
}

else if(conv_curr=='XOF'){
var data_currency_name_code = "XOF";
var data_currency_name = data.rates.XOF.currency_name;
var data_rate = data.rates.XOF.rate;
var data_rate_for_amount = data.rates.XOF.rate_for_amount;
}

else if(conv_curr=='MZN'){
var data_currency_name_code = "MZN";
var data_currency_name = data.rates.MZN.currency_name;
var data_rate = data.rates.MZN.rate;
var data_rate_for_amount = data.rates.MZN.rate_for_amount;
}

else if(conv_curr=='MYR'){
var data_currency_name_code = "MYR";
var data_currency_name = data.rates.MYR.currency_name;
var data_rate = data.rates.MYR.rate;
var data_rate_for_amount = data.rates.MYR.rate_for_amount;
}

else if(conv_curr=='OMR'){
var data_currency_name_code = "OMR";
var data_currency_name = data.rates.OMR.currency_name;
var data_rate = data.rates.OMR.rate;
var data_rate_for_amount = data.rates.OMR.rate_for_amount;
}

else if(conv_curr=='NIO'){
var data_currency_name_code = "NIO";
var data_currency_name = data.rates.NIO.currency_name;
var data_rate = data.rates.NIO.rate;
var data_rate_for_amount = data.rates.NIO.rate_for_amount;
}

else if(conv_curr=='NPR'){
var data_currency_name_code = "NPR";
var data_currency_name = data.rates.NPR.currency_name;
var data_rate = data.rates.NPR.rate;
var data_rate_for_amount = data.rates.NPR.rate_for_amount;
}

else if(conv_curr=='PAB'){
var data_currency_name_code = "PAB";
var data_currency_name = data.rates.PAB.currency_name;
var data_rate = data.rates.PAB.rate;
var data_rate_for_amount = data.rates.PAB.rate_for_amount;
}

else if(conv_curr=='PGK'){
var data_currency_name_code = "PGK";
var data_currency_name = data.rates.PGK.currency_name;
var data_rate = data.rates.PGK.rate;
var data_rate_for_amount = data.rates.PGK.rate_for_amount;
}

else if(conv_curr=='PEN'){
var data_currency_name_code = "PEN";
var data_currency_name = data.rates.PEN.currency_name;
var data_rate = data.rates.PEN.rate;
var data_rate_for_amount = data.rates.PEN.rate_for_amount;
}

else if(conv_curr=='ARS'){
var data_currency_name_code = "ARS";
var data_currency_name = data.rates.ARS.currency_name;
var data_rate = data.rates.ARS.rate;
var data_rate_for_amount = data.rates.ARS.rate_for_amount;
}

else if(conv_curr=='SAR'){
var data_currency_name_code = "SAR";
var data_currency_name = data.rates.SAR.currency_name;
var data_rate = data.rates.SAR.rate;
var data_rate_for_amount = data.rates.SAR.rate_for_amount;
}

else if(conv_curr=='QAR'){
var data_currency_name_code = "QAR";
var data_currency_name = data.rates.QAR.currency_name;
var data_rate = data.rates.QAR.rate;
var data_rate_for_amount = data.rates.QAR.rate_for_amount;
}

else if(conv_curr=='SCR'){
var data_currency_name_code = "SCR";
var data_currency_name = data.rates.SCR.currency_name;
var data_rate = data.rates.SCR.rate;
var data_rate_for_amount = data.rates.SCR.rate_for_amount;
}

else if(conv_curr=='SLL'){
var data_currency_name_code = "SLL";
var data_currency_name = data.rates.SLL.currency_name;
var data_rate = data.rates.SLL.rate;
var data_rate_for_amount = data.rates.SLL.rate_for_amount;
}

else if(conv_curr=='LKR'){
var data_currency_name_code = "LKR";
var data_currency_name = data.rates.LKR.currency_name;
var data_rate = data.rates.LKR.rate;
var data_rate_for_amount = data.rates.LKR.rate_for_amount;
}

else if(conv_curr=='SBD'){
var data_currency_name_code = "SBD";
var data_currency_name = data.rates.SBD.currency_name;
var data_rate = data.rates.SBD.rate;
var data_rate_for_amount = data.rates.SBD.rate_for_amount;
}

else if(conv_curr=='VUV'){
var data_currency_name_code = "VUV";
var data_currency_name = data.rates.VUV.currency_name;
var data_rate = data.rates.VUV.rate;
var data_rate_for_amount = data.rates.VUV.rate_for_amount;
}

else if(conv_curr=='USD'){
var data_currency_name_code = "USD";
var data_currency_name = data.rates.USD.currency_name;
var data_rate = data.rates.USD.rate;
var data_rate_for_amount = data.rates.USD.rate_for_amount;
}

else if(conv_curr=='DZD'){
var data_currency_name_code = "DZD";
var data_currency_name = data.rates.DZD.currency_name;
var data_rate = data.rates.DZD.rate;
var data_rate_for_amount = data.rates.DZD.rate_for_amount;
}

else if(conv_curr=='BDT'){
var data_currency_name_code = "BDT";
var data_currency_name = data.rates.BDT.currency_name;
var data_rate = data.rates.BDT.rate;
var data_rate_for_amount = data.rates.BDT.rate_for_amount;
}

else if(conv_curr=='BSD'){
var data_currency_name_code = "BSD";
var data_currency_name = data.rates.BSD.currency_name;
var data_rate = data.rates.BSD.rate;
var data_rate_for_amount = data.rates.BSD.rate_for_amount;
}

else if(conv_curr=='BZD'){
var data_currency_name_code = "BZD";
var data_currency_name = data.rates.BZD.currency_name;
var data_rate = data.rates.BZD.rate;
var data_rate_for_amount = data.rates.BZD.rate_for_amount;
}

else if(conv_curr=='CDF'){
var data_currency_name_code = "CDF";
var data_currency_name = data.rates.CDF.currency_name;
var data_rate = data.rates.CDF.rate;
var data_rate_for_amount = data.rates.CDF.rate_for_amount;
}

else if(conv_curr=='UAH'){
var data_currency_name_code = "UAH";
var data_currency_name = data.rates.UAH.currency_name;
var data_rate = data.rates.UAH.rate;
var data_rate_for_amount = data.rates.UAH.rate_for_amount;
}

else if(conv_curr=='YER'){
var data_currency_name_code = "YER";
var data_currency_name = data.rates.YER.currency_name;
var data_rate = data.rates.YER.rate;
var data_rate_for_amount = data.rates.YER.rate_for_amount;
}

else if(conv_curr=='TMT'){
var data_currency_name_code = "TMT";
var data_currency_name = data.rates.TMT.currency_name;
var data_rate = data.rates.TMT.rate;
var data_rate_for_amount = data.rates.TMT.rate_for_amount;
}

else if(conv_curr=='UZS'){
var data_currency_name_code = "UZS";
var data_currency_name = data.rates.UZS.currency_name;
var data_rate = data.rates.UZS.rate;
var data_rate_for_amount = data.rates.UZS.rate_for_amount;
}

else if(conv_curr=='UYU'){
var data_currency_name_code = "UYU";
var data_currency_name = data.rates.UYU.currency_name;
var data_rate = data.rates.UYU.rate;
var data_rate_for_amount = data.rates.UYU.rate_for_amount;
}

else if(conv_curr=='CZK'){
var data_currency_name_code = "CZK";
var data_currency_name = data.rates.CZK.currency_name;
var data_rate = data.rates.CZK.rate;
var data_rate_for_amount = data.rates.CZK.rate_for_amount;
}

else if(conv_curr=='SYP'){
var data_currency_name_code = "SYP";
var data_currency_name = data.rates.SYP.currency_name;
var data_rate = data.rates.SYP.rate;
var data_rate_for_amount = data.rates.SYP.rate_for_amount;
}

else if(conv_curr=='TJS'){
var data_currency_name_code = "TJS";
var data_currency_name = data.rates.TJS.currency_name;
var data_rate = data.rates.TJS.rate;
var data_rate_for_amount = data.rates.TJS.rate_for_amount;
}

else if(conv_curr=='TWD'){
var data_currency_name_code = "TWD";
var data_currency_name = data.rates.TWD.currency_name;
var data_rate = data.rates.TWD.rate;
var data_rate_for_amount = data.rates.TWD.rate_for_amount;
}

else if(conv_curr=='TZS'){
var data_currency_name_code = "TZS";
var data_currency_name = data.rates.TZS.currency_name;
var data_rate = data.rates.TZS.rate;
var data_rate_for_amount = data.rates.TZS.rate_for_amount;
}

else if(conv_curr=='TOP'){
var data_currency_name_code = "TOP";
var data_currency_name = data.rates.TOP.currency_name;
var data_rate = data.rates.TOP.rate;
var data_rate_for_amount = data.rates.TOP.rate_for_amount;
}

else if(conv_curr=='TTD'){
var data_currency_name_code = "TTD";
var data_currency_name = data.rates.TTD.currency_name;
var data_rate = data.rates.TTD.rate;
var data_rate_for_amount = data.rates.TTD.rate_for_amount;
}

else if(conv_curr=='THB'){
var data_currency_name_code = "THB";
var data_currency_name = data.rates.THB.currency_name;
var data_rate = data.rates.THB.rate;
var data_rate_for_amount = data.rates.THB.rate_for_amount;
}

else if(conv_curr=='TRY'){
var data_currency_name_code = "TRY";
var data_currency_name = data.rates.TRY.currency_name;
var data_rate = data.rates.TRY.rate;
var data_rate_for_amount = data.rates.TRY.rate_for_amount;
}

else if(conv_curr=='TND'){
var data_currency_name_code = "TND";
var data_currency_name = data.rates.TND.currency_name;
var data_rate = data.rates.TND.rate;
var data_rate_for_amount = data.rates.TND.rate_for_amount;
}



  			document.querySelector('#result').innerHTML = `<strong>${data_amount} ${data_base_currency_code} = <h1 id="result_h1">${data_rate_for_amount} ${data_currency_name_code}</h1>as on: ${data_updated_date}<br><br> Rate for 1 ${data_base_currency_code} = ${data_rate} ${data_currency_name_code}</strong>`;
  			
  				console.log(data_status)
  				
  				 window.setTimeout("capital()",2000);
  				 }
  				)
  				        
                return false;
            }
            
        });

function capital(){
				
				const button = document.querySelector('#button_submit');
            button.innerHTML ='<input type="image" src="img/arrow_swap.png" id="submit">';
            
}

