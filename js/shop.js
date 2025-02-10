//левые три предмета (кнопка)
let leftItem1 = document.querySelector("#left-shop .shop-item:nth-child(1) .buy-button"); 
let leftItem2 = document.querySelector("#left-shop .shop-item:nth-child(2) .buy-button");
let leftItem3 = document.querySelector("#left-shop .shop-item:nth-child(3) .buy-button");
//правые три предмета (кнопка)
let rightItem1 = document.querySelector("#left-shop .shop-item:nth-child(1) .buy-button");
let rightItem2 = document.querySelector("#left-shop .shop-item:nth-child(2) .buy-button");
let rightItem3 = document.querySelector("#left-shop .shop-item:nth-child(3) .buy-button");
//первый предмет левого магазина

//количество жуков
leftItem1.addEventListener('click', function(){
    if(currentUser.leftShopItem1Lvl <= 20){
        if(currentUser.gold > price * currentUser.leftShopItem1Lvl)
            {
                buyItemSound();
                currentUser.gold -= price * currentUser.leftShopItem1Lvl;
                currentUser.leftShopItem1Lvl += 1;
                currentUser.beetlesCount+= 1;
                updateUI();
            }
            else{
                cantBuyItemSound()
            }
    }
    else {
        
    }

})

//цена и хп жуков
leftItem2.addEventListener('click', function(){
    //TODO: подумай, может быть сделать это максимальным уровнем до 20?
    if(currentUser.gold > price * currentUser.leftShopItem2Lvl * 2)
    {
        buyItemSound();
        currentUser.gold -= price * currentUser.leftShopItem2Lvl * 2;

        if (beetleStats.life < 100) {
            beetleStats.life *= 2;
        } else if (beetleStats.life < 2000) {
            beetleStats.life *= 1.5;
        } else if (beetleStats.life < 5000) {
            beetleStats.life *= 1.2;
        } else {
            beetleStats.life *= 1.1;
        }
        beetleStats.life = Math.ceil(beetleStats.life);

        if (beetleStats.size < 50) {
            beetleStats.size *= 1.4;
        } else if (beetleStats.size < 200) {
            beetleStats.size *= 1.1;
        }

        if (beetleStats.speed > 0.5) {
            beetleStats.speed *= 0.85;
        } else {
            beetleStats.speed *= 0.95;
        }

        if (beetleStats.price < 1000) {
            beetleStats.price *= 1.3;
        } else {
            beetleStats.price *= 1.15;
        }

        if (Math.random() < 0.7) { // 70% шанс на улучшение редкости
            beetleStats.rareChance = Math.min(beetleStats.rareChance + 0.03, 1);
        }

        if (currentUser.attackPower <= 500) {
            currentUser.attackPower *= 1.3;
        } else if (currentUser.attackPower <= 2000) {
            currentUser.attackPower *= 1.1;
        } else {
            currentUser.attackPower *= 1.07;
        }
        currentUser.attackPower = Math.ceil(currentUser.attackPower);

        currentUser.leftShopItem2Lvl += 1;
        updateUI();
    }
    else{
        cantBuyItemSound()
    }
})

// редкость жуков
leftItem3.addEventListener('click', function(){
    if(currentUser.diamond > price * currentUser.leftShopItem3Lvl)
    {
        buyItemSound();
        currentUser.diamond -= price * currentUser.leftShopItem3Lvl;
        currentUser.leftShopItem3Lvl += 1;
        beetleStats.rareChance+=0.01;
        updateUI();
    }
    else{
        cantBuyItemSound()
    }
})