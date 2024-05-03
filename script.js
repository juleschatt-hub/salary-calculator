
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
//creating a querySelector to target each input field by ID
    let firstNameVal = document.querySelector('#firstName');
    let lastNameVal = document.querySelector('#lastName');
    let employeeIDVal = document.querySelector('#employeeID');
    let jobTitleVal = document.querySelector('#jobTitle');
    let annualSalaryVal = document.querySelector('#annualSalary');

//Output to DOM must be in the form of a table on the index file
    let employeeTable = document.querySelector('#employeeData');
    employeeTable.innerHTML += `
    
    <tr>
        <td>${firstNameVal.value}</td>
        <td>${lastNameVal.value}</td>
        <td>${employeeIDVal.value}</td>
        <td>${jobTitleVal.value}</td>
        <td>${annualSalaryVal.value}</td>
        <td><button onClick="removeEmployee(event)">Delete</button></td>
    </tr>

    `
   
    //creating an employee object to target individual employee salaries
    let employee = {
        first: `${firstNameVal.value}`,
        last: `${lastNameVal.value}`,
        id: `${employeeIDVal.value}`,
        title: `${jobTitleVal.value}`,
        salary: `${annualSalaryVal.value}`
    }
    
    //pushes a newly created employee to an array called employees
    employees.push(employee);
    totalMonthly = Number(employee.salary) / 12 + totalMonthly;
    console.log(employees);
    console.log(totalMonthly);
    let totalMonthlyVal = document.querySelector('#monthlyCostData');
    totalMonthlyVal.innerHTML = `
        <p>Monthly cost</p>
        <p>${totalMonthly}</p>
    
    `

    //attempt to clear input fields NOT WORKING!!!!!!!!!!
    firstNameVal.value = '';
    lastNameVal.value = '';
    employeeIDVal.value = '';
    jobTitleVal.value = '';
    annualSalaryVal.value = '';
    console.log('firstnameval: ', firstNameVal);
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