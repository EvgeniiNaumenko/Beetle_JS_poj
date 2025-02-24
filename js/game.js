
document.addEventListener("DOMContentLoaded", () => {
    // ! загружаем рзультат
    loadGameState();
    //backgroundMusic.play();
    updateUI();
    checkBeetles();
    animateBeetles(); 
});

//генерация жука
function generateNewBeetle() {
    const speed = Math.random() + beetleStats.speed;
    const life = Math.floor(Math.random() * 5) + beetleStats.life;
    const isRare = Math.random() < 0.05 + beetleStats.rareChance;
    let price;
    if(isRare){
        price = life/2;
    }
    else{
        price = life;
    }
    const y = Math.random() * (document.getElementById("game-field").offsetHeight-beetleStats.size);
    const size = beetleStats.size
    const beetle = new Beetle(speed, life, price, isRare, size, y);
    beetles.push(beetle);
}
// Анимация движения жуков
function animateBeetles() {
    function step() {
        beetles.forEach((beetle) => {
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

let activeAbilityArea = null;

function damageBeetlesInArea() {
    if (!activeAbilityArea) return;

    beetles.forEach(beetle => {
        if (isBeetleInAbilityArea(beetle)) {
            beetle.takeDamage(currentUser.sprayAttackPower); 
        }
    });
}

// Проверяем, находится ли жук в зоне урона
function isBeetleInAbilityArea(beetle) {
    if (!activeAbilityArea) return false;

    let beetleRect = beetle.element.getBoundingClientRect();
    let areaRect = activeAbilityArea.getBoundingClientRect();

    return (
        beetleRect.left < areaRect.right &&
        beetleRect.right > areaRect.left &&
        beetleRect.top < areaRect.bottom &&
        beetleRect.bottom > areaRect.top
    );
}

// Запускаем интервал урона раз в с
setInterval(damageBeetlesInArea, currentUser.sprayAttackSpeed);

