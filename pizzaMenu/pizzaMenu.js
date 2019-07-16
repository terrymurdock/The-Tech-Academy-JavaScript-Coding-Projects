//Get pizza size and start running subtotal
function checkSize() {
    var runningSub = 0;
    var sizeRadio = document.getElementsByClassName("pizzaSize");
    var txt = "";
    var sizeTotal = 0;
    for (var i = 0; i < sizeRadio.length; i++) {
        if (sizeRadio[i].checked) {
            txt = txt + sizeRadio[i].value;
        }
        if (txt == "Personal") {
            sizeTotal = 6;
        } else if (txt == "Medium") {
            sizeTotal = 10;
        } else if (txt == "Large") {
            sizeTotal = 14;
        } else if (txt == "Extra Large") {
            sizeTotal = 16;
        }
    }
    runningSub = sizeTotal;//Starts adding section total to running subtotal
    modalSizeList.innerHTML = txt; //Adds selection to receipt modal
    modalSizeTotal.innerHTML = sizeTotal+".00";//Adds price to receipt modal
    checkCrust(runningSub); // Ensures the running subtotal continues to the next function
};
//Get pizza crust and add to running subtotal
function checkCrust(runningSub) { // Ensures the running subtotal continues to this next function and so on throughout...
    var runningSub = runningSub;
    var crustRadio = document.getElementsByClassName("pizzaCrust");
    var txt = "";
    var crustTotal = 0;
    for (var i = 0; i < crustRadio.length; i++) {
        if (crustRadio[i].checked) {
            txt = txt + crustRadio[i].value;
        }
        if (txt == "Cheese Stuffed +$3.00") {
            crustTotal = 3;
        }
    }
    runningSub = (runningSub + crustTotal)
    modalCrustList.innerHTML = txt;
    modalCrustTotal.innerHTML = crustTotal+".00";  
    checkSauce(runningSub);  
};
//Get pizza sauce, no need to add to running subtotal because no extra charges for sauces
function checkSauce(runningSub) {
    var sauceRadio = document.getElementsByClassName("pizzaSauce");
    var txt = "";
    for (var i = 0; i < sauceRadio.length; i++) {
        if (sauceRadio[i].checked) {
            txt = txt + sauceRadio[i].value;
        }
    }
    modalSauceList.innerHTML = txt; 
    checkCheese(runningSub);   
};
//Get pizza cheese and add to running subtotal
function checkCheese(runningSub) {
    var cheeseRadio = document.getElementsByClassName("pizzaCheese");
    var txt = "";
    var cheeseTotal = 0;
    for (var i = 0; i < cheeseRadio.length; i++) {
        if (cheeseRadio[i].checked) {
            txt = txt + cheeseRadio[i].value;
        }
        if (txt == "Extra Cheese +$3.00") {
            cheeseTotal = 3;
        }
    }
    runningSub = (runningSub + cheeseTotal)
    modalCheeseList.innerHTML = txt;
    modalCheeseTotal.innerHTML = cheeseTotal+".00"; 
    checkMeats(runningSub);    
};
//Get pizza meats and add to running subtotal
function checkMeats(runningSub) {
    var items = document.getElementsByClassName("pizzaMeats");
    var selectedItems = "";
    var meatsArray = [];
    var meatsTotal = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i].type=='checkbox' && items[i].checked==true) {
            selectedItems += items[i].value+"<br>";
            meatsArray.push(items[i].value);
        }
        if (meatsArray.length > 1) {
            meatsTotal = meatsArray.length - 1; //Subtracts the 1 free meat
        }
    }
    runningSub = (runningSub + meatsTotal)
    modalMeatsList.innerHTML = selectedItems;
    modalMeatsTotal.innerHTML = meatsTotal+".00";
    checkVeggies(runningSub);
};
//Get pizza veggies and add to running subtotal
function checkVeggies(runningSub) {
    var items = document.getElementsByClassName("pizzaVeggies");
    var selectedItems = "";
    var veggiesArray = [];
    var VeggiesTotal = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i].type=='checkbox' && items[i].checked==true) {
            selectedItems += items[i].value+"<br>";
            veggiesArray.push(items[i].value);
        }
        if (veggiesArray.length > 1) {
            VeggiesTotal = veggiesArray.length - 1; //Subtracts the 1 free veggie
        }
    }
    runningSub = (runningSub + VeggiesTotal); //Completes running subtotal
    modalVeggiesList.innerHTML = selectedItems;
    modalVeggiesTotal.innerHTML = VeggiesTotal+".00";
    modalSubTotal.innerHTML = runningSub+".00"; //Adds running subtotal to receipt modal
    tax(runningSub);
};
//Brings running subtotal down to calculate sales tax and total
function tax(runningSub) {
    var taxAmount = (runningSub * .10); //Calculates sales tax
    var taxTotal = taxAmount.toFixed(2); //Adds the zeros after decimal
    var totalAmount = (runningSub * 1.10); //Calculates total bill
    var totalTotal = totalAmount.toFixed(2); //Adds the zeros after decimal
    modalTax.innerHTML = taxTotal; //Adds sales tax to receipt modal
    modalTotal.innerHTML = "$"+totalTotal; //Adds total bill to receipt modal
}