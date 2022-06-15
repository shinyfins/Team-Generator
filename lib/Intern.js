const Employee = require("./Employee");
class Intern extends Employee{
    constructor(name, id, email,  school) {
        super(name, id, email);
        this.type = "Intern";
        this.school = school;
    }
//make sure
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

};

module.exports = Intern;


// class Employee{
//     constructor(name, id, email) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     }

//     getName() {
//         return this.name;
//     }

//     getId() {
//         return this.id;
//     }

//     getEmail() {
//         return this.email;
//     }

//     getRole() {
//         return "Intern";
//     }

// };

// module.exports = Intern;