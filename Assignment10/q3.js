
function registerStudent(studentName, seatAvailable) {
    return new Promise(function (resolve, reject) {
        if (seatAvailable) {
            resolve(`${studentName} registered successfully!`);
        } else {
            reject(`${studentName}: Registration failed. The class is full.`);
        }
    });
}

// Seat is available
registerStudent("Ali", true)
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error);
    });

// No seat is available
registerStudent("Sara", false)
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error);
    });
