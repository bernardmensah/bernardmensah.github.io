var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000, 2500, 1500, 4000, 2200, 1200, 4400];



var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    //event handlers
    var updateButton = document.getElementById("update-button");

    updateButton.addEventListener('click', function updateCalorie() {
        var calorieAmount = document.getElementById("calorie-amount").value;
        console.log(calorieAmount.length);

        if (calorieAmount.length != 0) {
            var radios = document.getElementsByName('radio1');

            for (var i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {

                    for (var n = 0; n < days.length; n++) {
                        if (radios[i].value === days[n]) {
                            calories[n] = parseInt(calorieAmount);

                            break;
                        }
                    }
                }
            }


            alert("Your updated calories details are: \n" + calories)
            console.log(calories);
            document.getElementById("calorie-amount").value = "";
        }
        else {
            alert("Enter a valid number");
        }

    });


    var averageButton = document.getElementById("average-button");
    var caloriesAverage = 0;

    averageButton.addEventListener('click', function showAverageCalories() {
        var averageField = document.getElementById("average-field");

        for (var i = 0; i < calories.length; i++) {
            caloriesAverage += calories[i];
        }


        console.log(caloriesAverage / calories.length);
        averageField.value = "";
        averageField.value = caloriesAverage / calories.length;
        averageField.style.color = "green";
        averageField.style.backgroundColor = "white";


    });


    var showmax = document.getElementById("show_max");
    var maxCalorieDay = "";

    showmax.addEventListener("mouseover", function showMax() {
        var showMaxDiv = document.getElementById("showMax");
        showMaxDiv.innerHTML = "";


        for (var i = 0; i < calories.length; i++) {
            if (calories[i] == Math.max(...calories)) {
                maxCalorieDay = days[i];
            }
        }

        showMaxDiv.innerHTML = "Your maximum consumed calories is " + Math.max(...calories) + " on " + maxCalorieDay;

    })

};
