function updateUI() {

    //для пользователя
    document.getElementById("coins").innerText = `${Math.floor(currentUser.gold)}`;
    document.getElementById("gems").innerText = `${Math.floor(currentUser.diamond)}`;;

    // магазин
    //левый первый
    document.querySelector("#left-shop .shop-item:nth-child(1) .level").innerText = currentUser.leftShopItem1Lvl;
    document.querySelector("#left-shop .shop-item:nth-child(1) .price").innerText = price * currentUser.leftShopItem1Lvl;
    //левый второй
    document.querySelector("#left-shop .shop-item:nth-child(2) .level").innerText = currentUser.leftShopItem2Lvl;
    document.querySelector("#left-shop .shop-item:nth-child(2) .price").innerText = price * currentUser.leftShopItem2Lvl * 2;
    //левый третий
    document.querySelector("#left-shop .shop-item:nth-child(3) .level").innerText = currentUser.leftShopItem3Lvl;
    document.querySelector("#left-shop .shop-item:nth-child(3) .price").innerText = price * currentUser.leftShopItem3Lvl * 3;

    // ! сохраняем результат
    //saveGameState();
}
