
$(document).ready(function()
{
    //array of albums
    var albumItems = [
        ["images/Store-images/Awake.jpg","AWAKE", "$12.99","0"],
        ["images/Store-images/ninety.jpg","NINETY", "$13.99", "1"],
        ["images/Store-images/cold-world.jpg","COLD WORLD (Deluxe)", "$13.99", "2"],
        ["images/Store-images/situation.jpg","SITUATION", "$12.99", "3"]
    ];

    //array of MERCHANDISE
    var merchItems = [
        ["images/Store-images/brownHoodie.png","Brown Hoodie", "$49.99","4"],
        ["images/Store-images/whiteT.jpg","G-A White Tee", "$29.99", "5"],
        ["images/Store-images/waist-bag.jpg","Waist Bag", "$12.99", "6"],
        ["images/Store-images/airpods-case.jpeg","Airpods 1 case", "$14.99", "7"],
        ["images/Store-images/coffeemug.jpg","Coffee mug", "$9.99", "8"],
        ["images/Store-images/facemask.jpg","Face Mask", "$4.99", "9"]
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


    $(".item-button").on('click',function(evt)
    {
        console.log($(this).attr("data-index"));
        var itemIndex =  $(this).attr("data-index");
        var value = 1;
        localStorage.setItem(itemIndex, 1);
    })



});