/*
    Michael Mancuso
    SDI
    Project 3
*/


//globals

//$139,084,697 is the average production cost derived from the 20 best and worst grossing films in 2010-2012. Fitting for something based on a movie.
var filmBudget = 139084697;

//json
var itemList =
    {
    items:
        [
            {itemName:"Sword", itemPrice:100},
            {itemName:"Bow", itemPrice:240},
            {itemName:"Shield", itemPrice:120},
            {itemName:"Lance", itemPrice:300},
            {itemName:"Potion", itemPrice:50},
            {itemName:"Gem of supreme power", itemPrice:5},
            {itemName:"Better movie script", itemPrice:139083882}
        ]
    };
    
    //private class ItemStore
var ItemStore = function()
{
    var storeStock = [];
    
    //array in function
    var setStockList = function(stockArray)
    {
        if (stockArray instanceof Array)
        {
            for(var i = 0, l = stockArray.length; i < l; i++)
            {
                storeStock.push(stockArray[i]);
            };
            storeStock.reverse();
        };
    };
    
    //array out function
    var getStockList = function()
    {
        return (storeStock);
    };
    
    var sellEverything = function(gold)
    {
        console.log("You decide to buy EVERYTHING.");

        while (curItem = storeStock.pop())
        {
            console.log("You buy a " + curItem.itemName + " for " + curItem.itemPrice + " gold.");
            gold -= curItem.itemPrice;
            console.log(gold + " gold remaining");
        };
    };
    
    return{
        setStockList: setStockList,
        sellEverything: sellEverything,
        getStockList:getStockList
    };
};

//private class Player
var Player = function(goldInWallet)
{
    isJust:true;
    name:"Parduex";
    wallet:0;

    wallet = goldInWallet;
    
    var getWallet = function()
    {
        return wallet;
    }
    
    var checkIsJust = function()
    {
        if (isJust)
        {
            return "I am just";
        }
        else
        {
            return "I am not just";
        }
    };
    
    var getName = function()
    {
        return name;    
    };
    
    return{
        checkIsJust:checkIsJust,
        getName:getName
    };
}

//main function
function main()
{
    console.log("You arrive at the item store. You need money. Fortunatly the movie still has " + filmBudget + " gold left. You take it.");
    var store = ItemStore();
    store.setStockList(itemList.items);
    
    var parduex = Player(filmBudget);
    
    console.log("There's a lot of stuff in the store: ");
    
    var items = store.getStockList();
    for (var i = 0; i < items.length; i ++)
    {
        console.log("There's a(n) " + items[i].itemName + " for " + items[i].itemPrice);
    };
    
    console.log("I'm " + parduex.getName() +", so...");
    store.sellEverything(filmBudget); ///couldn't get working before deadline.
};

//psuedo runtime loop...that doesn't loop.
if (true) //always true
{
    main();
}


