const Employee = require("../lib/Employee");

//contructor and props
test("constructor and return employee props name/id/mail" , () => {
    const employee = new Employee("Leroy J.", 70, "Jenkins@leroy.com", "Employed")

    expect(employee.name).toBe("Leroy J.");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
   

});

//retrieve name

test ("getName() and return Employee's name", () => {
    const employee = new Employee("Leroy J.", 70, "Jenkins@leroy.com", "Employed")

    expect(employee.getEmail()).toEqual(expect.any(String));

});

//ID
test("getId() and returns employee ID", () =>{
    const employee = new Employee("Leroy J.", 70, "Jenkins@leroy.com", "Employed")

    expect(employee.getId()).toEqual(expect.any(Number));
});

//Email
test("getEmail() and returns employee email", () => {
    const employee = new Employee("Leroy J.", 70, "Jenkins@leroy.com", "Employed")

    expect(employee.getEmail()).toEqual(expect.any(String));
});

//get role
test("getRole() and returns employee role", () => {
    const employee = new Employee("Leroy J.", 70, "Jenkins@leroy.com", "Employed")
});