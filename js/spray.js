
function activateSpray() {
    if (sprayActive) return;
    console.log(sprayActive);
    sprayActive = true;
    let elapsed = 0;

    // анимация
    const sprayEffect = document.createElement("div");
    sprayEffect.classList.add("spray-effect");
    document.getElementById("game-field").appendChild(sprayEffect);

    const sprayInterval = setInterval(() => {
        elapsed += sprayStats.tickRate;

        beetles.forEach(beetle => {
            if (!beetle.isDead) {
                let damage = Math.ceil(beetle.scoreCount * sprayStats.damagePercent);
                beetle.life -= damage;
                beetle.element.innerText = beetle.life;

                if (beetle.life <= 0) {
                    beetle.takeDamage();
                }
            }
        });

        if (elapsed >= sprayStats.duration) {
            clearInterval(sprayInterval);
            sprayActive = false;
            sprayEffect.remove();
        }
    }, sprayStats.tickRate * 1000);
}
