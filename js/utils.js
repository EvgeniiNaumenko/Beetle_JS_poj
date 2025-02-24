function saveGameState() {
    const gameState = {
        currentUser: { ...currentUser },
        beetleStats: { ...beetleStats }
    };
    localStorage.setItem('gameState', JSON.stringify(gameState));
}

function loadGameState() {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
        const gameState = JSON.parse(savedState);
        Object.assign(currentUser, gameState.currentUser);
        Object.assign(beetleStats, gameState.beetleStats);
    }
}
