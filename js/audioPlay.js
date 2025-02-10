// Создаем объект Audio с указанием пути к музыкальному файлу
const backgroundMusic = new Audio('Audio/background_sound.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = currentUser.volume;


document.getElementById("volume").addEventListener("input", (event) => {
    // Устанавливаем громкость музыки в зависимости от ползунка
    currentUser.volume = event.target.value;
    backgroundMusic.volume = currentUser.volume;
});

// Обработчик для кнопки включения мзыки
document.getElementById("backgroundMusicButton").addEventListener("click", () => {
    if(musicPlay == true)
    {
        backgroundMusic.pause()
        backgroundMusic.currentTime = 0;
        musicPlay = false;
    }
    else
    {
        backgroundMusic.play().then(() => {
            musicPlay = true;
        });
    }
});

// Обработчик для кнопки отключения звука
document.getElementById("muteButton").addEventListener("click", () => {
    // Если звук включен, выключаем его
    if (currentUser.volume > 0) {
        currentUser.volume = 0;
        backgroundMusic.volume = 0;
        document.getElementById("muteButton").textContent = "Включить звук";
    }
    else {
        currentUser.volume = document.getElementById("volume").value;  // Включаем звук обратно
        backgroundMusic.volume = document.getElementById("volume").value;  // Включаем звук обратно
        document.getElementById("muteButton").textContent = "Отключить звук";
    }
});


//успешная покупка
function buyItemSound() {
    const sound = new Audio("Audio/buy_item_sound.mp3");
    sound.volume = currentUser.volume * 0.8;
    sound.play();
}
//неудачная покупка
function cantBuyItemSound() {
    const sound = new Audio("Audio/cant_buy_item_sound.mp3");
    sound.volume = currentUser.volume * 0.5;
    sound.play();
}
//тычка
function punchSound() {
    const sound = new Audio("Audio/punch_sound.mp3");
    sound.volume = currentUser.volume;
    sound.play();
}