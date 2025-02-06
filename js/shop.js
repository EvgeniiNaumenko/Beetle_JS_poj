//левые три предмета (кнопка)
let leftItem1 = document.querySelector("#left-shop .shop-item:nth-child(1) .buy-button");
let leftItem2 = document.querySelector("#left-shop .shop-item:nth-child(2) .buy-button");
let leftItem3 = document.querySelector("#left-shop .shop-item:nth-child(3) .buy-button");
//правые три предмета (кнопка)
let rightItem1 = document.querySelector("#left-shop .shop-item:nth-child(1) .buy-button");
let rightItem2 = document.querySelector("#left-shop .shop-item:nth-child(2) .buy-button");
let rightItem3 = document.querySelector("#left-shop .shop-item:nth-child(3) .buy-button");
//первый предмет левого магазина

leftItem1.addEventListener('click', function(){
    if(currentUser.gold > price * currentUser.leftShopItem1Lvl)
    {
        buyItemSound();
        currentUser.gold -= price * currentUser.leftShopItem1Lvl;
        currentUser.leftShopItem1Lvl += 1;
        currentUser.beetlesCount+= 1;
        updateUI();
    }
})

leftItem2.addEventListener('click', function(){
    if(currentUser.gold > price * currentUser.leftShopItem2Lvl * 2)
    {
        buyItemSound();
        currentUser.gold -= price * currentUser.leftShopItem2Lvl * 2;
        beetleStats.life*=2;
        beetleStats.size+=5;
        beetleStats.speed-=0.05;
        beetleStats.price*=1.2;
        beetleStats.rareChance+=0.01;
        currentUser.attackPower+=100;
        currentUser.leftShopItem2Lvl += 1;
        updateUI();
    }
})

leftItem3.addEventListener('click', function(){
    if(currentUser.diamond > price * currentUser.leftShopItem3Lvl)
    {
        buyItemSound();
        currentUser.diamond -= price * currentUser.leftShopItem3Lvl;
        currentUser.leftShopItem3Lvl += 1;
        beetleStats.rareChance+=0.01;
        updateUI();
    }
})