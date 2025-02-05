class Beetle {
    constructor(speed, life, price, isRare, x, y) {
        this.speed = speed;
        this.life = life;
        this.price = price;
        this.isRare = isRare;
        this.x = x;
        this.y = y;
        this.centerX = this.x + 15;  // Центр жука по оси X
        this.centerY = this.y + 15;  // Центр жука по оси Y
        this.element = document.createElement("div");
        this.element.classList.add("beetle");
        if (this.isRare) {
            this.element.classList.add("rare");
        }
        this.element.innerText = this.life;
        document.getElementById("game-field").appendChild(this.element);
        this.updatePosition();
        this.element.addEventListener("click", () => this.takeDamage());
    }

    updatePosition() {
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.centerX = this.x + 15;  // Обновляем центр по оси X
        this.centerY = this.y + 15;  // Обновляем центр по оси Y
    }

    move() {
        this.x += this.speed;
        this.updatePosition();

        // Если центр жука пересекает правую границу
        if (this.centerX > 500) {
            this.element.remove();
            // Удаляем жука из массива
            beetles = beetles.filter(b => b !== this); 
            // Генерация нового жука
            return false;
        }
        return true;
    }

    takeDamage() {
        // Уменьшаем жизнь на значение attackPower пользователя
        this.life -= currentUser.attackPower;
        if (this.life <= 0) {
            this.element.remove();
            if (this.isRare) {
                currentUser.diamond += this.price;
            } else {
                currentUser.gold += this.price;
            }
            updateUI();
            // ! сохраняем результат
            //saveGameState();

        } else {
            this.element.innerText = this.life;
        }
    }
}
