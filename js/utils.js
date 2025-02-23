
function saveGameState() {
    const gameState = {
        lvl: currentUser.lvl,
        gold: currentUser.gold,
        diamond: currentUser.diamond,
        attackPower: currentUser.attackPower,
        beetlesCount: currentUser.beetlesCount,
    };

    localStorage.setItem('gameState', JSON.stringify(gameState));
}

function loadGameState() {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
        const gameState = JSON.parse(savedState);
        currentUser.lvl = gameState.lvl;
        currentUser.gold = gameState.gold;
        currentUser.diamond = gameState.diamond;
        currentUser.attackPower = gameState.attackPower;
        currentUser.beetlesCount = gameState.beetlesCount;
    }
}