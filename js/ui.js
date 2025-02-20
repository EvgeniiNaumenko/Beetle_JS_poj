function updateUI() {
    // Для пользователя
    document.getElementById("score").innerText = Math.floor(currentUser.score);
    document.getElementById("coins").innerText = Math.floor(currentUser.gold);
    document.getElementById("gems").innerText = Math.floor(currentUser.diamond);

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

    // Правый первый
    document.querySelector("#right-shop .shop-item:nth-child(1) .level").innerText = currentUser.rightShopItem1Lvl;
    document.querySelector("#right-shop .shop-item:nth-child(1) .price").innerText = price * currentUser.rightShopItem1Lvl;

    // Правый второй
    document.querySelector("#right-shop .shop-item:nth-child(2) .price").innerText = superFingerPrice;

    // Если редкость достигла максимума, скрываем кнопку и показываем сообщение
    if (beetleStats.rareChance >= 0.5) {
        document.querySelector("#right-shop .shop-item:nth-child(1) .buy-button").disabled = true;
    } else {
        document.querySelector("#right-shop .shop-item:nth-child(1) .buy-button").disabled = false;
    }

    // Если редкость достигла максимума, показываем сообщение
    if (beetleStats.rareChance >= 0.5) {
        document.querySelector("#right-shop .shop-item:nth-child(1) .level").innerText = "MAX";
    }

    // ! сохраняем результат
    //saveGameState();
}
