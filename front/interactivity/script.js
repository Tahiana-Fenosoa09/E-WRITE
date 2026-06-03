let timer = null;
let timeLeft = 60;
let isPaused = false;
let testStarted = false;

let correctChars = 0;
let typedChars = 0;
let currentWordIndex = 0;

const wordsToType = [];

const modeSelect = document.getElementById("mode");
const wordDisplay = document.getElementById("word-display");
const inputField = document.getElementById("input-field");
const results = document.getElementById("results");

const startButton = document.getElementById("start-btn");
const playAgainButton = document.getElementById("play-again");

const pauseButton =
    document.querySelector(".typing-actions-button1");

const resumeButton =
    document.querySelector(".typing-actions-button2");

const typingModal =
    document.querySelector(".typing-modal");

const finalWpm =
    document.getElementById("final-wpm");

const finalAccuracy =
    document.getElementById("final-accuracy");

const finalMessage =
    document.getElementById("final-message");

const typingStats =
    document.querySelector(".typing-stats");

const words = {
    easy: ["apple", "banana", "grape", "orange", "cherry"],
    medium: ["keyboard", "monitor", "printer", "charger", "battery"],
    hard: ["synchronize", "complicated", "development", "extravagant", "misconception"]
};

function getRandomWord(mode) {
    const list = words[mode];
    return list[Math.floor(Math.random() * list.length)];
}

function generateWords() {
    wordsToType.length = 0;
    wordDisplay.innerHTML = "";

    for (let i = 0; i < 150; i++) {
        wordsToType.push(getRandomWord(modeSelect.value));
    }

    wordsToType.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word + " ";

        if (index === 0) {
            span.style.color = "#10288C";
        }

        wordDisplay.appendChild(span);
    });
}

function startGame() {
    clearInterval(timer);

    testStarted = false;
    timeLeft = 60;
    isPaused = false;

    correctChars = 0;
    typedChars = 0;
    currentWordIndex = 0;

    results.textContent = `Time Left : ${timeLeft}s`;

    inputField.disabled = false;
    inputField.value = "";

    finalWpm.textContent = "-";
    finalAccuracy.textContent = "-";
    finalMessage.textContent = "Typing...";

    typingStats.style.display = "none"; // hide stats at start

    generateWords();
}

function startTimer() {
    if (testStarted) return;

    testStarted = true;

    timer = setInterval(() => {

        if (isPaused) return;

        timeLeft--;

        results.textContent = `Time Left : ${timeLeft}s`;

        // ✅ THIS is where finishGame MUST be called
        if (timeLeft <= 0) {
            finishGame();
        }

    }, 1000);
}

function finishGame() {
    clearInterval(timer);

    inputField.disabled = true;

    const accuracy =
        typedChars === 0
            ? 0
            : ((correctChars / typedChars) * 100).toFixed(2);

    const wpm =
        ((correctChars / 5)).toFixed(2);

    finalWpm.textContent = `${wpm} WPM`;
    finalAccuracy.textContent = `${accuracy}%`;

    if (wpm < 20) {
        finalMessage.textContent = "Keep Practicing";
    }
    else if (wpm < 40) {
        finalMessage.textContent = "Good Job";
    }
    else {
        finalMessage.textContent = "Excellent";
    }

    // ✅ SHOW RESULTS SCREEN (IMPORTANT)
    typingStats.style.display = "block";
}

function highlightCurrentWord() {
    const spans = wordDisplay.children;

    for (let span of spans) {
        span.style.color = "black";
    }

    if (spans[currentWordIndex]) {
        spans[currentWordIndex].style.color = "#10288C";
    }
}

inputField.addEventListener("keydown", (event) => {

    startTimer();

    if (event.key === " ") {

        const typedWord = inputField.value.trim();
        const targetWord = wordsToType[currentWordIndex];

        typedChars += typedWord.length;

        for (
            let i = 0;
            i < Math.min(typedWord.length, targetWord.length);
            i++
        ) {
            if (typedWord[i] === targetWord[i]) {
                correctChars++;
            }
        }

        currentWordIndex++;

        highlightCurrentWord();

        inputField.value = "";

        event.preventDefault();
    }
});

pauseButton.addEventListener("click", () => {
    isPaused = true;
    typingModal.classList.add("typing-modal-show");
});

resumeButton.addEventListener("click", () => {
    isPaused = false;
    typingModal.classList.remove("typing-modal-show");
});

startButton.addEventListener("click", () => {

    document.querySelector(".typing-input")
        .classList.add("typing-input-show");

    document.querySelector(".typing-startgame")
        .classList.add("typing-startgame-hide");

    startGame();
    inputField.focus();
});

playAgainButton.addEventListener("click", startGame);

modeSelect.addEventListener("change", startGame);