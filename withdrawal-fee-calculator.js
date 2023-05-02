document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculation-form-1").addEventListener("submit", function(event) {
      event.preventDefault();
      var vocusInternalCosts = parseFloat(document.getElementById("vocus-internal-costs").value);
      var numberOfmonthsPaidToThirdParty = parseInt(document.getElementById("number-of-months-paid-to-third-party").value);
      var monthlyFeeToThirdParty = parseFloat(document.getElementById("monthly-fee-to-third-party").value);
      var thirdPartyContractTermToVocus = parseInt(document.getElementById("third-party-contract-term-to-vocus").value);
      var outstandingThirdPartyMonthlyFeeToThirdParty = parseFloat(document.getElementById("outstanding-monthly-fee-to-third-party").value);
  
      var withdrawalFee = vocusInternalCosts + (numberOfmonthsPaidToThirdParty * monthlyFeeToThirdParty) + (thirdPartyContractTermToVocus * outstandingThirdPartyMonthlyFeeToThirdParty);
  
      document.getElementById("withdrawal-fee-1").textContent = withdrawalFee.toFixed(2);
    });
  });
  
