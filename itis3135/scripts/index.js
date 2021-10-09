var companyName = "Brilliant Mule Enterprises, Co.";
var userName = prompt("Please enter your name ");
var userQuestion = prompt("How are you doing today");
var dateAndTime =  new Date();
var todayDate = dateAndTime.toDateString();
var currentTime = dateAndTime.getHours() + ":" + dateAndTime.getMinutes() + ":" + dateAndTime.getSeconds();
console.log(companyName);

window.onload = function() {
                greetings();
                function greetings(){
                   document.getElementById('greetings-paragraph').innerHTML = "Today is "+ todayDate + ", and the time is: " + currentTime + "<br>"
                      + companyName + " welcomes you, " + userName + "!<br>" + 
                        "We're glad you are doing " + userQuestion + "!"
                                    };
                           }


function calculateCost()
{
   var duration = prompt("How many days do you intend to use our services not including weekends");
   var duration = parseInt(duration);
   var dailyCost = 100;
   alert("On the average, our services cost " + duration * dailyCost +" for " + duration + " days not including weekends");
}


function calculateCostPlusTax()
{
   var duration = prompt("How many days do you intend to use our services not including weekends");
   var duration = parseInt(duration);
   var dailyCost = 100;
   var taxAmountPerDailyCost = 5/100 * dailyCost;
   alert("On the average, our services cost " + duration * (dailyCost + taxAmountPerDailyCost) +" plus Tax for " + duration + " days not including weekends");
}

function calculateBugdetDays()
{
   var budget = prompt("What is your budget?");
   var budget = parseFloat(budget);
   var dailyCost = 100;
   var numberOfDaysForBudget = parseInt(budget/dailyCost);
   alert("Your budget is equivalent to the cost of our services for " + numberOfDaysForBudget + " days not including weekends");
}

function bandWidthTest()
{
   var bandwidth = prompt("How many people share the same bandwidth in the household?");
   var bandwidth = parseInt(bandwidth);

   if(bandwidth > 4)
   {
   alert("Your bandwidth is not sufficient for " + bandwidth + " people to use and may result in slow internet connections");
   }else
   {
   alert("Your bandwith is sufficient for the number of people in the household");
   }
}

function rateExperience()
{
   var bandwidth = prompt("How would you rate your experience with our website?");
   var bandwidth = parseInt(bandwidth);

  switch(bandwidth){
     case 1:
        prompt("Seems like something went wrong! What can we do better next time?");
        alert("Thank you for the response!");
        break;
      case 2:
         prompt("Seems like something went wrong! What can we do better next time?");
         alert("Thank you for the response!");
         break;
      case 3:
         prompt("We would still want to look into this. Please tell us what went wrong!");
         alert("Thank you for the response!");
         break;
      case 4:
         alert("Thank you for the feedback!");
         break;
      case 5:
         alert("Thank you for the feedback! We are glad you enjoyed our services");
         break;
      default:
         alert("input can only be between 1-5. Please try again!");
         break;
  }
}
