document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submitButton");
    var clearButton = document.getElementById("clearButton");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); 

        
        var email = document.getElementById("mailInput").value;
        var country = document.getElementById("countries").value;
        var option1 = document.getElementById("option1").checked;
        var option2 = document.getElementById("option2").checked;
        var paymentMethod = document.querySelector('input[name="payment"]:checked').value;
        var rememberMe = document.getElementById("rememberSwitch").checked;

      
        var formData = {
            email: email,
            country: country,
            additionalOptions: [],
            paymentMethod: paymentMethod,
            rememberMe: rememberMe
        };

     
        if (option1) {
            formData.additionalOptions.push("Parking Space");
        }
        if (option2) {
            formData.additionalOptions.push("Include Breakfast");
        }
       
        console.log(formData);
    });

    clearButton.addEventListener("click", function(event){
        event.preventDefault();      
        document.getElementById("mailInput").value = "";       
        document.getElementById("countries").value = "Choose a country";       
        document.getElementById("option1").checked = false;
        document.getElementById("option2").checked = false;
        document.getElementById("payoo").checked = false;
        document.getElementById("paypal").checked = false;     
        document.getElementById("rememberSwitch").checked = false;
    });
});
