//левые три предмета (кнопка)
let leftItem1 = document.querySelector("#left-shop .shop-item:nth-child(1) .buy-button"); 
let leftItem2 = document.querySelector("#left-shop .shop-item:nth-child(2) .buy-button");
let leftItem3 = document.querySelector("#left-shop .shop-item:nth-child(3) .buy-button");
//правые три предмета (кнопка)
let rightItem1 = document.querySelector("#right-shop .shop-item:nth-child(1) .buy-button");
let rightItem2 = document.querySelector("#right-shop .shop-item:nth-child(2) .buy-button");
let rightItem3 = document.querySelector("#right-shop .shop-item:nth-child(3) .buy-button");
//первый предмет левого магазина

//количество жуков
leftItem1.addEventListener('click', function(){
    if(currentUser.leftShopItem1Lvl >= shopMaxLVLs.leftShop1){
            this.style.display = "none"; 
            return;
        }
    else if(currentUser.gold >= price * currentUser.leftShopItem1Lvl)
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
});

//цена и хп жуков
leftItem2.addEventListener('click', function(){
    if(currentUser.leftShopItem2Lvl >= shopMaxLVLs.leftShop2){
            this.style.display = "none";
            return;
        }
    else if(currentUser.gold >= price * currentUser.leftShopItem2Lvl * 3)
    {
        buyItemSound();
        currentUser.gold -= price * currentUser.leftShopItem2Lvl * 3;

        beetleStats.life *=2;
        beetleStats.life = Math.ceil(beetleStats.life);

        if (beetleStats.size < 50) {
            beetleStats.size *= 1.2;
        } else if (beetleStats.size < 100) {
            beetleStats.size *= 1.1;
        }

        if (beetleStats.speed > 0.5) {
            beetleStats.speed *= 0.85;
        } else {
            beetleStats.speed *= 0.95;
        }

        beetleStats.price += beetleStats.life * 2

        currentUser.leftShopItem2Lvl += 1;
        updateUI();
    }
    else{
        cantBuyItemSound();
    }
});

// редкость жуков
leftItem3.addEventListener('click', function(){
    if(currentUser.leftShopItem3Lvl >= shopMaxLVLs.leftShop3){
            this.style.display = "none"; 
            return;
        }
    else if(currentUser.diamond >= price * currentUser.leftShopItem3Lvl*3)
    {
        buyItemSound();
        currentUser.diamond -= price * currentUser.leftShopItem3Lvl*3;
        currentUser.leftShopItem3Lvl += 1;
        beetleStats.rareChance+=0.01;
        updateUI();
    }
    else{
        cantBuyItemSound();
    }
});


// ПРАВЫЙ МАГАЗИН
// сила нашей тычки
rightItem1.addEventListener('click', function(){
    if(currentUser.rightShopItem1Lvl === shopMaxLVLs.rightShop1){
            this.style.display = "none";  
            return;
        }
    else if(currentUser.gold >= price * currentUser.rightShopItem1Lvl*2)
    {
        buyItemSound();
        currentUser.gold -= price * currentUser.rightShopItem1Lvl*2;
        currentUser.rightShopItem1Lvl += 1;
        if (currentUser.attackPower <= 500) {
            currentUser.attackPower *= 1.3;
        } else if (currentUser.attackPower <= 2000) {
            currentUser.attackPower *= 1.1;
        } else {
            currentUser.attackPower *= 1.07;
        }
        currentUser.attackPower = Math.ceil(currentUser.attackPower);
        updateUI();
    }
    else{
        cantBuyItemSound();
    }
});

// кулак(тапок) ванпачмена
rightItem2.addEventListener('click', function(){
    if(currentUser.rightShopItem2Lvl >= shopMaxLVLs.rightShop2){
            this.style.display = "none"; 
            return;
        }
    else if(currentUser.diamond >= price * currentUser.rightShopItem2Lvl*4)
    {
        buyItemSound();
        currentUser.diamond -= price * currentUser.rightShopItem2Lvl*4;
        currentUser.rightShopItem2Lvl += 1;
        currentUser.onePunchDuration += 1;
        currentUser.onePunchCooldown -=2;
        currentUser.onePunchBonus +=1;
        currentUser.attackPower = Math.ceil(currentUser.attackPower);
        updateUI();
    }
     else{
        cantBuyItemSound();
    }
});
// облако-спрей отрава
rightItem3.addEventListener('click', function(){
    if(currentUser.rightShopItem3Lvl >= shopMaxLVLs.rightShop3){
            this.style.display = "none";  
            return:
        }
    else if(currentUser.diamond >= price * currentUser.rightShopItem3Lvl*5)
    {
        buyItemSound();
        currentUser.diamond -= price * currentUser.rightShopItem3Lvl*5;
        currentUser.rightShopItem3Lvl += 1;
        currentUser.sprayAttackPower *=2;
        currentUser.sprayAttackDuration += 1;
        currentUser.sprayAttackRange += 20;
        currentUser.sprayAttackCooldown -=3;
        currentUser.sprayAttackSpeed -=50;
        updateUI();
    } else {
        cantBuyItemSound();
    }
});
