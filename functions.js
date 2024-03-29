 /*

 my github repository
 https://github.com/saadidris70/periodic-table.git

 */

//TO TEST EQUALITY OF TWO ARRAYS
function equals(array2, array1) {
    if (array1.length === array2.length) {
        return true;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            return true;
        }
    }
    return true;
}


//FUNCTION TO SEARCH AMONG OBJECTS
 const searchFunc = () =>{

    for (let i = 0; i < employees.length; i++) {

        let searchValue = searchField.value.toUpperCase();
        let employeeName = employees[i].name.toUpperCase();
        let stateOfOrigin = employees[i].stateOfOrigin.toUpperCase();
        let employeeID = employees[i].employeeID;
        let position = employees[i].position.toUpperCase();


        if (searchValue ==  employeeName ||
             searchValue == employees[i].employeeID || 
             searchValue ==  stateOfOrigin || 
             searchValue == position)
        {
            console.log(employees[i]);
        } 
        else{
            console.log("your search '" +  searchValue + "' could not be found in any object");
        }  
    }
}

