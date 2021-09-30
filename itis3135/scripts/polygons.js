//variable to hold user input from the prompt
var userNumber = prompt("The Brilliant Mule would like your number...");

/* function to get the shape that has number of sides that corresponds 
to the user's input */
function getShape(number){
    number = Math.abs(number);
    if(number == 0)
    {
     alert("This is not a polygon, it is a circle!!!");
    }
    else if(number == 1)
    {
    alert("The polygon is a henagon!!!");
    }
    else if(number == 2)
    {
        alert("The polygon is a digon!!!");
    }
    else if(number == 3)
    {
        alert("The polygon is a trigon!!!");
    }
    else if(number == 4)
    {
        alert("The polygon is a tetragon!!!");
    }
    else if(number == 5)
    {
        alert("The polygon is a pentagon!!!");
    }
    else if(number == 6)
    {
        alert("The polygon is a hexagon!!!");
    }
    else if(number == 7)
    {
        alert("The polygon is a heptagon!!!");
    }
    else if(number == 8)
    {
        alert("The polygon is a octagon!!!");
    }
    else if(number == 9)
    {
        alert("The polygon is a enneagon!!!");
    }
    else if(number == 10)
    {
        alert("The polygon is a decagon!!!");
    }
}

/*function to validate the user's input*/
function validateEntry(number){
        if(number < -10 || number > 10)
        {
            var userNumber = prompt("Error: The number is invalid \nThe Brilliant Mule would like your number...");
            return userNumber;
        }
        else if(!Number.isInteger(number))
        {
            var number  = Math.round(number);
            return number;
        }
}

/* the get shape function is called after the user enters a number
and in it the number is validated and the appropriate response is
given back */
getShape(validateEntry(userNumber));