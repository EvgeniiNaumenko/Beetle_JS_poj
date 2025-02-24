function updateUI() {
    // Для пользователя
    document.getElementById("score").innerText = Math.floor(currentUser.score);
    document.getElementById("coins").innerText = Math.floor(currentUser.gold);
    document.getElementById("gems").innerText = Math.floor(currentUser.diamond);
    //звук
    //document.getElementById("volume").ariaValueNow = currentUser.volume;
    // магазин
    //пользовательские скилы
    document.getElementById("player-strength-value").innerText = currentUser.attackPower;;
    //левый первый
    // Магазин
    // Левый первый
    document.querySelector("#left-shop .shop-item:nth-child(1) .level").innerText = currentUser.leftShopItem1Lvl;
    document.querySelector("#left-shop .shop-item:nth-child(1) .price").innerText = price * currentUser.leftShopItem1Lvl;
    // Левый второй
    document.querySelector("#left-shop .shop-item:nth-child(2) .level").innerText = currentUser.leftShopItem2Lvl;
    document.querySelector("#left-shop .shop-item:nth-child(2) .price").innerText = price * currentUser.leftShopItem2Lvl * 2;
    // Левый третий
    document.querySelector("#left-shop .shop-item:nth-child(3) .level").innerText = currentUser.leftShopItem3Lvl;
    document.querySelector("#left-shop .shop-item:nth-child(3) .price").innerText = price * currentUser.leftShopItem3Lvl * 3;
    //правый первый
    document.querySelector("#right-shop .shop-item:nth-child(1) .level").innerText = currentUser.rightShopItem1Lvl;
    document.querySelector("#right-shop .shop-item:nth-child(1) .price").innerText = price * currentUser.rightShopItem1Lvl*2;
    //dnjhjq второй
    document.querySelector("#right-shop .shop-item:nth-child(2) .level").innerText = currentUser.rightShopItem2Lvl;
    document.querySelector("#right-shop .shop-item:nth-child(2) .price").innerText = price * currentUser.rightShopItem2Lvl*4;
    //правый третий
    document.querySelector("#right-shop .shop-item:nth-child(3) .level").innerText = currentUser.rightShopItem3Lvl;
    document.querySelector("#right-shop .shop-item:nth-child(3) .price").innerText = price * currentUser.rightShopItem3Lvl*5;
    // ! сохраняем результат
    //saveGameState();
}
