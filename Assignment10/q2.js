function prepareOrder(callback) {
    console.log("Preparing order...");

    setTimeout(function () {
        console.log("Order preparation completed.");
        callback();
    }, 1000);
}

function packOrder(callback) {
    console.log("Packing order...");

    setTimeout(function () {
        console.log("Order packing completed.");
        callback();
    }, 1000);
}

function notifyCustomer() {
    console.log("Notifying customer...");

    setTimeout(function () {
        console.log("Customer notified. Order is ready!");
    }, 1000);
}

prepareOrder(function () {
    packOrder(function () {
        notifyCustomer();
    });
});

// Using Async Await
function prepareOrder() {
    return new Promise(function (resolve) {
        console.log("Preparing order...");

        setTimeout(function () {
            console.log("Order preparation completed.");
            resolve();
        }, 1000);
    });
}

function packOrder() {
    return new Promise(function (resolve) {
        console.log("Packing order...");

        setTimeout(function () {
            console.log("Order packing completed.");
            resolve();
        }, 1000);
    });
}

function notifyCustomer() {
    return new Promise(function (resolve) {
        console.log("Notifying customer...");

        setTimeout(function () {
            console.log("Customer notified. Order is ready!");
            resolve();
        }, 1000);
    });
}

async function processOrder() {
    await prepareOrder();
    await packOrder();
    await notifyCustomer();
}

processOrder();

// Comparison: async/await makes the workflow easier to read
// because the steps appear sequentially without deeply nested callbacks.
