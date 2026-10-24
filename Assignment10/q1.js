
 // Calculator

function calculate(num1, num2, callback) {
    let result = callback(num1, num2);
    console.log("Sum:", result);
}

function addNumbers(a, b) {
    return a + b;
}

calculate(10, 20, addNumbers);


// Bill Calculator

function calculateBill(price1, price2, price3, callback) {
    let total = callback(price1, price2, price3);
    console.log("Total Bill:", total);
}

function addPrices(price1, price2, price3) {
    return price1 + price2 + price3;
}

calculateBill(200, 300, 500, addPrices);


// Money Withdrawal

function withdrawMoney(amount, callback) {
    let balance = 10000;

    setTimeout(function () {
        balance = balance - amount;
        callback(balance);
    }, 2000);
}

withdrawMoney(2000, function (remainingBalance) {
    console.log("Remaining Balance:", remainingBalance);
});
