
document.addEventListener("DOMContentLoaded", () => {
    // ! загружаем рзультат
    //loadGameState();
    checkBeetles();
    animateBeetles(); 
});

//генерация жука
function generateNewBeetle() {
    const speed = Math.random() + beetleStats.speed;
    const life = Math.floor(Math.random() * 5) + beetleStats.life;
    const price = Math.floor(Math.random() * 5) * beetleStats.price;
    const isRare = Math.random() < 0.1 + beetleStats.rareChance;
    const y = Math.random() * 470;
    const beetle = new Beetle(speed, life, price, isRare, 0, y);
    beetles.push(beetle);
}

// Анимация движения жуков
function animateBeetles() {
    function step() {
        beetles = beetles.filter(beetle => beetle.move());
        if (beetles.length < currentUser.beetlesCount) {
            checkBeetles();  // Проверка и генерация недостающих жуков
        }
        if (beetles.length > 0) {
            requestAnimationFrame(step);
        }
    }
    step();
}

function checkBeetles() {
    if (beetles.length < currentUser.beetlesCount) {
        generateNewBeetle();  // Генерация недостающих жуков
    }
}
