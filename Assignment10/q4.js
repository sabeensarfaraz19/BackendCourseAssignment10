
function getStudentData(id) {
    return new Promise(function (resolve, reject) {
        console.log(`Loading Student ${id}...`);

        setTimeout(function () {
            let student = {
                1: { id: 1, name: "Ali", age: 18 },
                2: { id: 2, name: "Sara", age: 19 },
                3: { id: 3, name: "Ahmed", age: 20 }
            };

            if (student[id]) {
                resolve(student[id]);
            } else {
                reject("Student not found!");
            }
        }, 2000);
    });
}

async function loadStudents() {
    try {
        let student1 = await getStudentData(1);
        console.log("Student Data:", student1);

        let student2 = await getStudentData(2);
        console.log("Student Data:", student2);

        let student3 = await getStudentData(3);
        console.log("Student Data:", student3);

    } catch (error) {
        console.log("Error:", error);
    }
}

loadStudents();

// await pauses the current async function until the Promise settles,
// but it does not freeze the entire JavaScript program.
// Other tasks can continue while the Promise is pending.
