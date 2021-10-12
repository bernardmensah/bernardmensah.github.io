var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {


	//add onclick event handler for each image
    $("espresso").addEventListener('click', function ()
	{
		var itemPrice = 1.95;
		var orderId = document.getElementById("order");
        const newOrder = document.createElement("p");
		newOrder.innerHTML = "$" + itemPrice + " - Espresso - Delicious espresso. Wanna try it?"
		orderId.appendChild(newOrder);

		var totalPrice = document.getElementById("total-price");
       
		if(totalPrice.innerHTML == null)
		{
		totalPrice.innerHTML = itemPrice;
		}
		else
		{
			totalPrice.innerHTML = itemPrice + parseFloat(totalPrice.innerHTML);
		}
	});

	$("cappucino").addEventListener('click', function ()
	{
		var itemPrice = 3.45;
		var orderId = document.getElementById("order");
        const newOrder = document.createElement("p");
		newOrder.innerHTML = "$" + itemPrice + " - Cappucino - Delicious cappucino?"
		orderId.appendChild(newOrder);

		var totalPrice = document.getElementById("total-price");
		if(totalPrice.innerHTML == null)
		{
		totalPrice.innerHTML = itemPrice;
		}
		else
		{
			totalPrice.innerHTML = itemPrice + parseFloat(totalPrice.innerHTML);
		}
	});
	// for click event add item to order and update total

	// display order and total

	
		
}; // end onload