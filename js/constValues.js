//массив тараканов
let beetles = []; 
//цены на товары
let price = 25;
//флаг музыки
let musicPlay = false;

//стандартные статы тараканов
const beetleStats = {
    size : 30,
    speed : 1,
    life: 1,
    price: 2,
    rareChance: 0.02
}
//ограничитель магазина
const shopMaxLVLs ={
    leftShop1: 10,
    leftShop2: 20,
    leftShop3: 20,
    rightShop1: 20,
    rightShop2: 10,
    rightShop3: 10,
}

//пользователь
const currentUser = {
    score: 0,
    gold: 0,
    diamond: 0,
    attackPower: 1,
    beetlesCount: 2,
    volume: 0.5,

    onePunchDuration: 5,
    onePunchCooldown: 30,
    onePunchBonus: 2,

    sprayAttackIsActive: false,
    sprayAttackPower: 5,
    sprayAttackDuration: 5,
    sprayAttackCooldown: 60,
    sprayAttackRange: 100,
    sprayAttackSpeed: 1000,

    leftShopItem1Lvl: 1,
    leftShopItem2Lvl: 1,
    leftShopItem3Lvl: 1,
    rightShopItem1Lvl: 1,
    rightShopItem2Lvl: 1,
    rightShopItem3Lvl: 1,
};

let sprayActive = false;

const sprayStats = {
    duration: 5,    // длительность в секундах
    tickRate: 0.5,  // как часто наносится урон (в секундах)
    damagePercent: 0.3, // урон в процентах от макс. здоровья жука
    price: 5000,      // начальная цена
};
