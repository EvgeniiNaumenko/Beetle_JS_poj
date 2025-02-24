
function saveGameState() {
    const gameState = { ...currentUser };
    localStorage.setItem('gameState', JSON.stringify(gameState));
}

function loadGameState() {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
        Object.assign(currentUser, JSON.parse(savedState));
    }
}