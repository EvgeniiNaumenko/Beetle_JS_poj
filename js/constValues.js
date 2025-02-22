let beetles = [];

let superFingerActive = false;
let superFingerPrice = 5000;
let originalAttackPower = 0;

const price = 10;

const beetleStats = {
    size : 40,
    speed : 1,
    life: 1,
    price: 100,
    rareChance: 0.02
}

const currentUser = {
    score: 0,
    gold: 0,
    diamond: 0,
    attackPower: 1,
    beetlesCount: 2,
    volume: 0.5,
    leftShopItem1Lvl: 1,
    leftShopItem2Lvl: 1,
    leftShopItem3Lvl: 1,
    rightShopItem1Lvl: 1,
    rightShopItem2Lvl: 1,
    rightShopItem3Lvl: 1
};

let sprayActive = false;

const sprayStats = {
    duration: 5,    // длительность в секундах
    tickRate: 0.5,  // как часто наносится урон (в секундах)
    damagePercent: 0.3, // урон в процентах от макс. здоровья жука
    price: 5000,      // начальная цена
};
