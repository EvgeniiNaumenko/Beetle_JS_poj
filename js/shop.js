const item1 = document.getElementById('left-shop-item-1');
const item2 = document.getElementById('left-shop-item-2');
const item3 = document.getElementById('right-shop-item-1');
const item4 = document.getElementById('right-shop-item-2');

item1.addEventListener('click', function(){
    if(currentUser.gold > price * currentUser.shopItem1Lvl)
    {
        currentUser.shopItem1Lvl += 1;
        currentUser.gold -= price * currentUser.shopItem1Lvl;
        updateUI();
        currentUser.beetlesCount+= 1;
    }
    else
    {
        console.log("no money no honey!")
        console.log(currentUser.shopItem1Lvl)
    }
})

item2.addEventListener('click', function(){
    if(currentUser.gold > price * currentUser.shopItem2Lvl)
    {
        beetleStats.life*=2;
        beetleStats.speed-=0.3;
        beetleStats.price*=1.2;
        beetleStats.rareChance+=0.01;
        currentUser.attackPower+=3;
        updateUI();
    }
    else
    {
        console.log("no money no honey!")
        console.log(currentUser.shopItem2Lvl)
    }
})