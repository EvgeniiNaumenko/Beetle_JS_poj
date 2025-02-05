// //генерация жука
// function generateNewBeetle() {
//     const speed = Math.random() * 2 + 1;
//     const life = Math.floor(Math.random() * 5) + 1;
//     const price = Math.floor(Math.random() * 10) + 1;
//     const isRare = Math.random() < 0.2;
//     const y = Math.random() * 470;
//     new Beetle(speed, life, price, isRare, 0, y);
//     beetles.push(beetle);
// }

// // Анимация движения жуков
// function animateBeetles() {
//     function step() {
//         beetles = beetles.filter(beetle => beetle.move());
//         if (beetles.length < currentUser.beetlesCount) {
//             checkBeetles();  // Проверка и генерация недостающих жуков
//         }
//         if (beetles.length > 0) {
//             requestAnimationFrame(step);
//         }
//     }
//     step();
// }

function saveGameState() {
    const gameState = {
        lvl: currentUser.lvl,
        gold: currentUser.gold,
        diamond: currentUser.diamond,
        attackPower: currentUser.attackPower,
        beetlesCount: currentUser.beetlesCount,
    };

    // Сохраняем данные в localStorage
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