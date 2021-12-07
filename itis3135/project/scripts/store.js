$(document).ready(function()
{

    //array of albums
    var albumItems = [
        ["images/store-images/awake.jpg","AWAKE", "$12.99","0"],
        ["images/store-images/ninety.jpg","NINETY", "$13.99", "1"],
        ["images/store-images/cold-world.jpg","COLD WORLD (Deluxe)", "$13.99", "2"],
        ["images/store-images/situation.jpg","SITUATION", "$12.99", "3"]
    ];

    //array of MERCHANDISE
    var merchItems = [
        ["images/store-images/brownhoodie.png","Brown Hoodie", "$49.99","4"],
        ["images/store-images/whitet.jpg","G-A White Tee", "$29.99", "5"],
        ["images/store-images/waist-bag.jpg","Waist Bag", "$12.99", "6"],
        ["images/store-images/airpods-case.jpeg","Airpods Case", "$14.99", "7"],
        ["images/store-images/coffeemug.jpg","Coffee Mug", "$9.99", "8"],
        ["images/store-images/facemask.jpg","Face Mask", "$4.99", "9"]
    ];

    var albumItemsCount = albumItems.length;

    //FOR LOOP TO APPEND ALL ALBUMS TO ALBUMS WRAPPER
    for(var i = 0; i < albumItemsCount; i++)
    {
        var shopItem = document.createElement('div');
            $(shopItem).addClass("shop-item").appendTo($("#wrapper"));

        var spanItem = document.createElement('span');
        spanItem.innerHTML = albumItems[i][1];
        $(spanItem).addClass("shop-item-title").appendTo(shopItem); 


        var shopImage = document.createElement('img');
        shopImage.setAttribute('alt', "album image");
        shopImage.setAttribute('class',"shop-item-image");
        shopImage.setAttribute('src', albumItems[i][0]);
        shopItem.append(shopImage); 

        var itemDetails = document.createElement('div');
        itemDetails.setAttribute('class', "shop-item-details");

        var itemSpan = document.createElement('span');
        itemSpan.setAttribute('class', "shop-item-price");
        itemSpan.innerHTML = albumItems[i][2];

        itemDetails.append(itemSpan);

        var addButton = document.createElement('button');
        addButton.setAttribute('class', "item-button");
        addButton.setAttribute('type', "button");
        addButton.setAttribute('data-index', i.toString());
        addButton.innerHTML = "ADD TO CART";
        itemDetails.append(addButton);
        shopItem.append(itemDetails);

    }


    //FUNCTION TO APPEND ALL MERCHANDISE TO MERCH WRAPPER
    for(var i = 0; i < merchItems.length; i++)
    {
            var shopItem = document.createElement('div');
                $(shopItem).addClass("shop-item").appendTo($("#wrapper-2"));
    
            var spanItem = document.createElement('span');
            spanItem.innerHTML = merchItems[i][1];
            $(spanItem).addClass("shop-item-title").appendTo(shopItem); 
    
    
            var shopImage = document.createElement('img');
            shopImage.setAttribute('alt', "merch image");
            shopImage.setAttribute('class',"shop-item-image");
            shopImage.setAttribute('src', merchItems[i][0]);
            shopItem.append(shopImage); 
    
            var itemDetails = document.createElement('div');
            itemDetails.setAttribute('class', "shop-item-details");
    
            var itemSpan = document.createElement('span');
            itemSpan.setAttribute('class', "shop-item-price");
            itemSpan.innerHTML = merchItems[i][2];
    
            itemDetails.append(itemSpan);
    
            var addButton = document.createElement('button');
            addButton.setAttribute('class', "item-button");
            addButton.setAttribute('type', "button");
            addButton.setAttribute('data-index', (albumItemsCount + i).toString());
            addButton.innerHTML = "ADD TO CART";
            itemDetails.append(addButton);
            shopItem.append(itemDetails);
    
    }



    //ADD TO CART button event handler to add store item info into localStorage
    $(".item-button").on('click',function(evt)
    {
        var itemIndex =  $(this).attr("data-index");
        var value = 1;
        localStorage.setItem(itemIndex, 1);

        $(this)[0].innerHTML = "ADDED";
        $(this).attr("style","background-color: #53e557");
        var itemCount = document.getElementById("count");
        itemCount.style.visibility = "visible";
        itemCount.innerHTML = parseInt(localStorage.length);
    })



});