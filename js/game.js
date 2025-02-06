
document.addEventListener("DOMContentLoaded", () => {
    // ! загружаем рзультат
    //loadGameState();
    updateUI();
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
    const size = beetleStats.size
    const beetle = new Beetle(speed, life, price, isRare, size, y);
    beetles.push(beetle);
}
// Анимация движения жуков
function animateBeetles() {
    function step() {
        beetles.forEach((beetle, index) => {
            if (!beetle.isDead) { // Если жук жив, он двигается
                beetle.move();
            }
        });
        // Удаляем мертвых жуков
        beetles = beetles.filter(beetle => !beetle.isDead);

        checkBeetles(); // Проверяем и создаем новых жуков

        requestAnimationFrame(step); // Анимация продолжается всегда
    }
    step();
}

function checkBeetles() {
    if (beetles.length < currentUser.beetlesCount) {
        generateNewBeetle();  // Генерация недостающих жуков
    }
}
