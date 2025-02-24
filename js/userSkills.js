//общая функция для активных скилов
function activateAbility(abilityId, activeTime, cooldownTime, onActivateStart, onActivateEnd) {
    let abilityContainer = document.getElementById(abilityId);
    let abilityImage = abilityContainer.querySelector("img"); // Получаем картинку
    let cooldownText = document.getElementById(`cooldown-${abilityId}`);

    // Отключаем кнопку
    abilityContainer.style.pointerEvents = "none";

    // Устанавливаем активное состояние (синяя обводка)
    abilityImage.classList.add("active");
    cooldownText.style.display = "block";

    let timeLeft = activeTime;

    // Логика начала активации способности
    if (onActivateStart) onActivateStart();

    let activeInterval = setInterval(() => {
        timeLeft--;
        cooldownText.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(activeInterval);

            // Завершаем активное состояние, начинаем колдаун
            abilityImage.classList.remove("active");
            abilityImage.classList.add("cooldown"); // Переключаем класс на cooldown
            timeLeft = cooldownTime;

            // Логика завершения активации способности
            if (onActivateEnd) onActivateEnd();

            let cooldownInterval = setInterval(() => {
                timeLeft--;
                cooldownText.textContent = timeLeft;

                if (timeLeft <= 0) {
                    clearInterval(cooldownInterval);

                    // Завершаем кулдаун и включаем кнопку снова
                    abilityImage.classList.remove("cooldown");
                    cooldownText.style.display = "none";
                    abilityContainer.style.pointerEvents = "auto";
                }
            }, 1000);
        }
    }, 1000);
}


//обработка первого скила
document.getElementById("ability-1").addEventListener("click", () => {
    activateAbility(
        "ability-1",              // ID способности
        currentUser.onePunchDuration,                        // Время активности (сек.)
        currentUser.onePunchCooldown,                        // Время колдауна (сек.)
        function() {
            currentUser.attackPower *= currentUser.onePunchBonus;
            updateUI();
        },
        function() {
            currentUser.attackPower = Math.ceil(currentUser.attackPower/currentUser.onePunchBonus);
            updateUI();
        },
    );
});

// Нажатие на способность (активируем режим ожидания клика)
document.getElementById("ability-2").addEventListener("click", () => {
    let abilityContainer = document.getElementById("ability-2");
    
    // Проверяем, не в кулдауне ли способность
    if (abilityContainer.classList.contains("cooldown")) return;

    currentUser.sprayAttackIsActive = true; // Активируем флаг

});

document.getElementById("game-field").addEventListener("click", (event) => {
    if (!currentUser.sprayAttackIsActive) return; 

    currentUser.sprayAttackIsActive = false;

    // Активируем способность
    activateAbility("ability-2", currentUser.sprayAttackDuration, currentUser.sprayAttackCooldown, function() {

        let gameField = document.getElementById("game-field");
        let fieldRect = gameField.getBoundingClientRect(); // Получаем границы игрового поля

        // Вычисляем координаты внутри поля
        let abilityX = event.clientX - fieldRect.left;
        let abilityY = event.clientY - fieldRect.top;

        // Создаем зону урона
        let abilityArea = document.createElement("div");
        abilityArea.classList.add("spray-effect");
        abilityArea.style.width = `${currentUser.sprayAttackRange}px`;
        abilityArea.style.height = `${currentUser.sprayAttackRange}px`;
        abilityArea.style.position = "absolute";
        abilityArea.style.borderRadius = "50%";
        abilityArea.style.pointerEvents = "none";
        abilityArea.style.left = `${abilityX - currentUser.sprayAttackRange/2}px`; // Центрируем по X
        abilityArea.style.top = `${abilityY - currentUser.sprayAttackRange/2}px`;  // Центрируем по Y

        spraySound();
        gameField.appendChild(abilityArea);
        activeAbilityArea = abilityArea;
        setTimeout(() => {
            abilityArea.remove();
            activeAbilityArea = null;
        }, currentUser.sprayAttackDuration*1000);
    });
});
