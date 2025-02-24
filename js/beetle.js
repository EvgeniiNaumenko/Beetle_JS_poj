class Beetle {
    constructor(speed, life, price, isRare,size, y) {
        this.speed = speed;
        this.life = life;
        this.scoreCount = life;
        this.price = price;
        this.isRare = isRare;
        this.size = size;
        this.isDead = false;
        this.x = 0;
        this.y = y;
        this.centerX = this.size / 2;  // Центр жука по оси X
        this.centerY = this.size / 2;   // Центр жука по оси Y
        this.element = document.createElement("div");
        this.element.classList.add("beetle");
        // Устанавливаем размер и фон
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.backgroundImage = `url(Sprite/Bug/alive_bug.png)`;
        this.element.style.backgroundSize = "cover";
        if (this.isRare) {
            this.element.classList.add("rare");
            this.element.style.backgroundImage = `url(Sprite/Bug/alive_bug_rare.png)`;
        }
        this.element.innerText = this.life;
        document.getElementById("game-field").appendChild(this.element);
        this.updatePosition();
        this.element.addEventListener("click", () => this.takeDamage());
    }

    updatePosition() {
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.centerX = this.x + this.size / 2;   // Обновляем центр по оси X
        this.centerY = this.y + this.size / 2;   // Обновляем центр по оси Y

    }

    move() {
        this.x += this.speed;
        this.updatePosition();

        // Если центр жука пересекает правую границу
        if (this.centerX > document.getElementById("game-field").offsetWidth) {
            this.element.remove();
            // Удаляем жука из массива
            beetles = beetles.filter(b => b !== this); 
            // Генерация нового жука
            return false;
        }
        return true;
    } 
    takeDamage(damage = currentUser.attackPower) {
        this.life -= damage;
        punchSound();
        
        if (this.life <= 0) {
            this.isDead = true;
            this.speed = 0;
            this.element.style.pointerEvents = "none";
            this.element.classList.add("beetle-dead");
    
            if (this.isRare) {
                this.element.style.backgroundImage = `url('Sprite/Bug/dead_bug_rare.png')`;
                currentUser.diamond += this.price;
            } else {
                this.element.style.backgroundImage = `url('Sprite/Bug/dead_bug.png')`;
                currentUser.gold += this.price;
            }
            
            currentUser.score += this.scoreCount;
    
            setTimeout(() => {
                this.element.remove();
                checkBeetles();
            }, 1000);
    
            updateUI();
        } else {
            this.element.innerText = this.life;
        }
    }
}
