$(document).ready(function()
{
    console.log(localStorage.length);
    getCartItems();

});

function getCartItems()
{
    $("#cart-items-container").empty();
    var totalPrice = 0;
    $.ajax({
        type: "GET",
        url: "data/storeItems.json",
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "JSON",
        success: function (data) {

            console.log(data);
            //function to use data from the JSON file and the data in the local storage to populate the carts
            $.each(data, function() {
                $.each(this, function(key, value)
                {
                    if(localStorage.getItem(value.id) != null)
                    {
                        totalPrice += parseFloat(value.price.replace("$", "")) * parseInt(localStorage.getItem(value.id));
                        var cartItem = document.createElement("div");
                        cartItem.setAttribute("class", "cart-items");
                        cartItem.setAttribute("data-index", key);

                        var itemAndName = document.createElement("div");
                        itemAndName.setAttribute("class", "items items-and-name");

                        var itemImage = document.createElement("img");
                        itemImage.setAttribute("class", "item-image");
                        itemImage.setAttribute("src", value.image);
                        itemImage.setAttribute("width", "50");
                        itemImage.setAttribute("alt", "cart item image");

                        var itemName = document.createElement("span");
                        itemName.setAttribute("class", "item-name");
                        itemName.textContent = value.name;

                        var itemPrice = document.createElement("span");
                        itemPrice.setAttribute("class", "items");
                        itemPrice.textContent = value.price;

                        var quantity = document.createElement("input");
                        quantity.setAttribute("class", "input-area");
                        quantity.setAttribute("type", "number");
                        quantity.setAttribute("data-index", key);
                        quantity.setAttribute("value", localStorage.getItem(key));

                        var removeBtn = document.createElement("button");
                        removeBtn.setAttribute('class', "cart-btn");
                        removeBtn.setAttribute('type', "button");
                        removeBtn.innerHTML = "REMOVE";

                        itemAndName.append(itemImage);
                        itemAndName.append(itemName);

                        cartItem.append(itemAndName);
                        cartItem.append(itemPrice);
                        cartItem.append(quantity);
                        cartItem.append(removeBtn);
                        $("#cart-items-container").append(cartItem);
                        console.log(value.id);
                    }

                })
            });
      console.log(totalPrice);
    var tP = document.getElementById("total-price")
    tP.innerHTML = totalPrice.toFixed(2);
        }
})
}


$(document).on('click', '.cart-btn', function(){

    var localStorageKey = $(this).parent().attr("data-index");
    console.log(localStorageKey);
    localStorage.removeItem(localStorageKey);
    localStorage.removeItem(localStorageKey);
    $(this).parent().empty()

    getCartItems();
});


$(document).on('change', '.input-area', function(evt){

    var localStorageKey = $(this).attr("data-index");
    var newValue = evt.target.value;
 console.log(typeof newValue);

 localStorage.setItem(localStorageKey, newValue);
 getCartItems();
});



