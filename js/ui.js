function updateUI() {
    document.getElementById("coins").innerText = currentUser.gold;
    document.getElementById("gems").innerText = currentUser.diamond;
    document.getElementById("left-shop-item-1").textContent = price * currentUser.shopItem1Lvl;
    document.getElementById("left-shop-item-2").textContent = price * currentUser.shopItem2Lvl;
}
