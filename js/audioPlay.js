// фоновая музыка
const backgroundMusic = new Audio('Audio/background_sound.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = currentUser.volume;

// ползунок
document.getElementById("volume").addEventListener("input", (event) => {
    currentUser.volume = event.target.value;
    backgroundMusic.volume = currentUser.volume;
});

const musicOnImg = "Sprite/icon/music-alt.png";   // SVG картинка для включенной музыки
const musicOffImg = "Sprite/icon/music-slash.png"; // SVG картинка для выключенной музыки
const soundOnImg = "Sprite/icon/volume.png";   // SVG картинка для включенного звука
const soundOffImg = "Sprite/icon/volume-mute.png"; // SVG картинка для выключенного звука

const backgroundMusicButton = document.getElementById("backgroundMusicButton");
const muteButton = document.getElementById("muteButton");

// Устанавливаем начальные изображения
backgroundMusicButton.src = musicOffImg;
muteButton.src = soundOnImg;

// Обработчик для кнопки фоновой музыки
backgroundMusicButton.addEventListener("click", () => {
    if (musicPlay) {
        backgroundMusic.pause();
        musicPlay = false;
        backgroundMusicButton.src = musicOffImg; // Меняем картинку на выключенную музыку
    } else {
        backgroundMusic.play()
            .then(() => {
                musicPlay = true;
                backgroundMusicButton.src = musicOnImg; // Меняем картинку на включенную музыку
            })
            .catch(error => {
                console.error("Ошибка при воспроизведении музыки:", error);
            });
    }
});

// Обработчик для кнопки отключения звука
muteButton.addEventListener("click", () => {
    if (currentUser.volume > 0) {
        currentUser.volume = 0;
        backgroundMusic.volume = 0;
        muteButton.src = soundOffImg; // Меняем картинку на выключенный звук
    } else {
        currentUser.volume = document.getElementById("volume").value;  
        backgroundMusic.volume = document.getElementById("volume").value;  
        muteButton.src = soundOnImg; // Меняем картинку на включенный звук
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
//спрей
function spraySound() {
    const sound = new Audio("Audio/gas_sound.mp3");
    sound.volume = currentUser.volume;
    sound.play();
}