// .checked Property = property that determines the checked state
//                   of an HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");

const myBtn = document.getElementById("myBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

myBtn.onclick = function() {

    if(myCheckBox.checked){
        subResult.textContent = `You are Subscribed!`;
    }
    else{
        subResult.textContent = `You are not Subscribed!`;
    }

    if(visaBtn.checked) {
        paymentResult.textContent = `Payment Method: Visa`;
    }
    else if(mastercardBtn.checked) {
        paymentResult.textContent = `Payment Method: Mastercard`;
    }
    else if(paypalBtn.checked) {
        paymentResult.textContent = `Payment Method: PayPal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`;
    }

}