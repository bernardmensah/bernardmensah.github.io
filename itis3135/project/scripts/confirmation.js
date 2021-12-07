$(document).ready(function () {

    //order details heading
    var orderDetails = '<h3>Order Details: </h3><ul style= "list-style-type: none; text-align:center;" id="orderItems"></ul>';
    $("#confirmation-details").append(orderDetails);


    //ajax to get data from storeitems json file and only
    //append store items that have been purchased
    $.ajax({
        type: "GET",
        url: "data/storeitems.json",
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "JSON",
        success: function (data) {
            //function to use data from the JSON file and the data in the local storage to populate the carts
            $.each(data, function () {
                $.each(this, function (key, value) {
                    if (localStorage.getItem(value.id) != null) {
                        var itemDetail = `<li style="padding:1em">${localStorage.getItem(key)} x ${value.name}</li>`
                        $("#orderItems").append(itemDetail);
                    }

                })
            });

            var itemsTotal = `<li style="padding:1em">Total: $${localStorage.getItem("total")}</li><br><br>`
            $("#orderItems").append(itemsTotal);
            var shippingDetails = '<h3>Shipping Details: </h3><ul style= "list-style-type: none; text-align:center;" id="shippingInfo"></ul>';
            $("#orderItems").append(shippingDetails);

            var infoObject = JSON.parse(localStorage.getItem("Customer Info"));
            var shippingInfo = `<li style="padding:.2em">Name: ${infoObject.Name}</li><br><br>`
            $("#orderItems").append(shippingInfo);
            var shippingInfo = `<li style="padding:.2em">Email: ${infoObject.Email}</li><br><br>`
            $("#orderItems").append(shippingInfo);
            var shippingInfo = `<li style="padding:.2em">Phone: ${infoObject.Phone}</li><br><br>`
            $("#orderItems").append(shippingInfo);
            var shippingInfo = `<li style="padding:.2em">Address: ${infoObject.Address}</li><br><br>`
            $("#orderItems").append(shippingInfo);



        }
    })

    //navigate to homepage button event handler
    $("#goBackToHomepage").on('click', function () {
        localStorage.clear();
        location.replace("index.html");
    })


})