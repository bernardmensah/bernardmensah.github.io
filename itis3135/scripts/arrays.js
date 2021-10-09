/**Global variables */
var person = ["Abigail Dawn", "Francis Mensah", "Jason Cubb", "Jessica Grubb",
                "Kendrick Dot", "Michelle Williams", "Mike Teller", "Paul Keller"];
var salaries = [3000,4000,2000,3500,4000,2000,3000,2500];
var personAndSalaries = [];

/**This functions take the person and the salaries arrays
 * and makes a 2-dimension array from it
 */
function combinePersonAndSalaries()
{
    for(var i = 0; i < person.length; i++)
    {
        personAndSalaries[i] = [];
        personAndSalaries[i] = [person[i],salaries[i]];
    }
}
combinePersonAndSalaries();//calls the combine person and salaries function on page load.

/**This function makes sure whenever a new 
 * button is clicked, the previous data on the
 * page is cleared
 */
function clearAllElementsPreviousCreated()
{
    document.getElementById("salary-input").innerHTML = "";
    document.getElementById("results-table").innerHTML = "";
    const results = document.getElementById("results");
    results.innerHTML = "";
}

/**This function allow us to add person and their salary
 * The correct data is add into the display salaries table
 * as well as the person's name is added into the dropdown element.
 */
function addSalary()
{
    clearAllElementsPreviousCreated();

    var inputSalary = document.getElementById("salary-input");
    const personField = document.createElement("input");
    personField.style = "width:150px; margin: 1em";
    inputSalary.appendChild(personField);
    const salaryField = document.createElement("input");
    salaryField.style = "width:150px; margin: 1em";
    inputSalary.appendChild(salaryField);
    const addButton = document.createElement("button");
    addButton.textContent = "Add";
    addButton.style = "width:50px; margin: 1em; margin-left: 70px; color:#181894";
    inputSalary.appendChild(addButton);

    addButton.onclick = (function ()
    {

        if(personField.value.length === 0 || isNaN(salaryField.value) || salaryField.value.length === 0)
        {
            alert("The values you entered is incorrect. Make sure salary value is a number and person field is not empty");
        }
        else
        {
            person.push(personField.value);
            console.log(person);
            salaries.push(parseInt(salaryField.value));
            const newDropdownElement = document.createElement("option");
            newDropdownElement.textContent = personField.value;
            document.getElementById("dropdownElements").appendChild(newDropdownElement);

            combinePersonAndSalaries();

            personField.value = "";//clears the person field after data has been added
            salaryField.value = "";//clears the salary field after data has been added
        }
    });//This onClick function allows the correct data to be added after the add button has been clicked.
}

/**This function displays the average salary as
 * well as the highest salary in the salaries table
 */
function displayResult()
{
    clearAllElementsPreviousCreated();

    var salariesSum = 0;
    
    for(var i = 0; i < salaries.length; i++)
    {
      salariesSum += salaries[i];
    }
    const resultsHeader = document.createElement("h2");
    resultsHeader.innerHTML = "Results";

    const resultsParagraph = document.createElement("p");
    resultsParagraph.style = "text-align: center";
    console.log(salariesSum);
    console.log(salaries);
    console.log((salariesSum/salaries.length));
    resultsParagraph.innerHTML = "The average salary is " + (salariesSum/salaries.length) + " and the highest salary is " + Math.max(...salaries);
    results.appendChild(resultsHeader);
    results.appendChild(resultsParagraph);

}

/**The displaySalary function calls the createTable function 
 * which creates the salaries table
*/
function displaySalary()
{
    createTable(personAndSalaries);
}

/**This function actually creates the salaries table with data 
 * from the 2-dimensional persons and salaries array.
 */
function createTable(tableInfo) 
{
    clearAllElementsPreviousCreated();

    const headingForSalaries = document.createElement("h2");
    headingForSalaries.innerHTML = "Salaries";
    document.getElementById("results-table").appendChild(headingForSalaries); 
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    tableInfo.forEach(function(tableRowData) {
        var row = document.createElement('tr');
    
        tableRowData.forEach(function(cellData) {
          var cell = document.createElement('td');
          cell.appendChild(document.createTextNode(cellData));
          row.appendChild(cell);
        });
    
        tableBody.appendChild(row);
      });
    
    table.appendChild(tableBody);
    document.getElementById("results-table").appendChild(table);
}



