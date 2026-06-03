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

const pauseButton = document.querySelector(".typing-actions-button1");
const resumeButton = document.querySelector(".typing-actions-button2");
const stopButton = document.querySelector(".typing-actions-button-stop");

const typingModal = document.querySelector(".typing-modal");

const finalWpm = document.getElementById("final-wpm");
const finalAccuracy = document.getElementById("final-accuracy");
const finalMessage = document.getElementById("final-message");

const typingStats = document.querySelector(".typing-stats");

const timeSelect = document.getElementById("time-mode");

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
    isPaused = false;

    timeLeft = parseInt(timeSelect.value || 60);

    correctChars = 0;
    typedChars = 0;
    currentWordIndex = 0;

    results.textContent = `Time Left : ${timeLeft}s`;

    inputField.disabled = false;
    inputField.focus();
    inputField.value = "";

    finalWpm.textContent = "-";
    finalAccuracy.textContent = "-";
    finalMessage.textContent = "Typing...";

    typingStats.style.display = "none";

    document.querySelector(".typing-input").classList.add("typing-input-show");
    document.querySelector(".typing-startgame").classList.add("typing-startgame-hide");

    generateWords();
}

function startTimer() {
    if (testStarted) return;

    testStarted = true;

    timer = setInterval(() => {
        if (isPaused) return;

        timeLeft--;
        results.textContent = `Time Left : ${timeLeft}s`;

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

    document.querySelector(".typing-input")
        .classList.remove("typing-input-show");

    typingStats.classList.add("typing-stats-show");

    lastResult = {
        speed: wpm,
        accuracy: accuracy
    };
}

function getData(wpm,accuracy){
    return {
        speed : wpm,
        yourAccurary : accuracy
    }
}

function playGuest() {

    document.querySelector("#save-session")
        .addEventListener("click", () => {

            if (!lastResult) return;

            const today = new Date();

            const formattedDate =
                today.toLocaleDateString();

            const session = {
                date: formattedDate,
                speed: lastResult.speed,
                accuracy: lastResult.accuracy
            };

            
            userSession.push(session);
            
            addNewSessionCard(session);
            stopGame();
        });
}

playGuest();

let userSession = [];
let lastResult = null;

function createSessionCard(date, accuracy, speed) {
    const container = document.createElement("div");
    const dateContainer = document.createElement("h3");
    const scoreContainer = document.createElement("h3");
    const wordContainer = document.createElement("h3");

    container.className = "dashboard-gamehistory";

    dateContainer.textContent = date;
    scoreContainer.textContent = `Accuracy : ${accuracy}%`;
    wordContainer.textContent = `Speed : ${speed} WPM`;

    container.appendChild(dateContainer);
    container.appendChild(scoreContainer);
    container.appendChild(wordContainer);

    return container;
}

function addNewSessionCard(session) {
    const grid = document.querySelector(".dashboard-gamehistory-grid");

    const card = createSessionCard(
        session.date,
        session.accuracy,
        session.speed
    );

    grid.appendChild(card);
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

inputField.addEventListener("input", () => {
    const spans = wordDisplay.children;
    const typed = inputField.value;
    const currentWord = wordsToType[currentWordIndex];

    if (!spans[currentWordIndex]) return;

    let wordHTML = "";

    for (let i = 0; i < currentWord.length; i++) {
        if (i < typed.length) {
            if (typed[i] === currentWord[i]) {
                wordHTML += `<span class="correct-letter">${currentWord[i]}</span>`;
            } else {
                wordHTML += `<span class="wrong-letter">${currentWord[i]}</span>`;
            }
        } else {
            wordHTML += currentWord[i];
        }
    }

    spans[currentWordIndex].innerHTML = wordHTML + " ";
});

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
    inputField.focus();
});

function stopGame() {
    clearInterval(timer);

    testStarted = false;
    isPaused = false;

    timeLeft = parseInt(timeSelect.value || 60);
    correctChars = 0;
    typedChars = 0;
    currentWordIndex = 0;

    inputField.value = "";
    
    // inputField.disabled = true;

    typingStats.classList.remove("typing-stats-show");
    document.querySelector(".typing-input").classList.remove("typing-input-show");
    document.querySelector(".typing-startgame").classList.remove("typing-startgame-hide");

    results.textContent = `Time Left : ${timeLeft}s`;
}

stopButton.addEventListener("click", stopGame);

startButton.addEventListener("click", () => {
    document.querySelector(".typing-input")
        .classList.add("typing-input-show");

    document.querySelector(".typing-startgame")
        .classList.add("typing-startgame-hide");

    startGame();
    inputField.focus();
});

window.addEventListener("keydown", () => {
    inputField.focus();
});

playAgainButton.addEventListener("click", startGame);
modeSelect.addEventListener("change", startGame);