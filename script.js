
/**************************************************************************                      
                       SUBMIT BUTTON REQUIREMENTS   
***************************************************************************/
//submit button onclick function that adds a new employee to the table
//Adds employees salary to the total payroll cost for the company
//sanitize inputs after emplyee is added.
let employees = [];
let totalMonthly = 0;
function addEmployee(event) {

    console.log('form submits');
    //stops page refresh on submit
    event.preventDefault();

    let firstNameVal = document.querySelector('#firstName').value;
    let lastNameVal = document.querySelector('#lastName').value;
    let employeeIDVal = document.querySelector('#employeeID').value;
    let jobTitleVal = document.querySelector('#jobTitle').value;
    let annualSalaryVal = document.querySelector('#annualSalary').value;

    //Output to DOM must be in the form of a table on the index file
    let employeeTable = document.querySelector('#employeeData');
    employeeTable.innerHTML += `
    
    <tr>
        <td>${firstNameVal}</td>
        <td>${lastNameVal}</td>
        <td>${employeeIDVal}</td>
        <td>${jobTitleVal}</td>
        <td>${annualSalaryVal}</td>
        <td><button onClick="removeEmployee(event)">Delete</button></td>
    </tr>

    `
    
    let employee = {
        first: `${firstNameVal}`,
        last: `${lastNameVal}`,
        id: `${employeeIDVal}`,
        title: `${jobTitleVal}`,
        salary: `${annualSalaryVal}`
    }
    
    employees.push(employee);
    totalMonthly = Number(employee.salary) / 12 + totalMonthly;
    console.log(employees);
    console.log(totalMonthly);
    let totalMonthlyVal = document.querySelector('#monthlyCostData');
    totalMonthlyVal.innerHTML = `
        <p>Monthly cost</p>
        <p>${totalMonthly}</p>
    
    `
}





//The total employee cost must be in the footer element.


/**************************************************************************                      
                       DELETE BUTTON REQUIREMENTS   
***************************************************************************/
//delete button in each row that removes employee from table
function removeEmployee(event) {
    event.target.parentElement.parentElement.remove();       
}
//(STRETCH: removed employees salary is removed from total)