export default function startGame(){
    const typingInputs = document.querySelector(".typing-input");
    const typingStats = document.querySelector(".typing-stats");
    const startTheGame = document.querySelector(".typing-startgame");
    const pauseButton = document.querySelector(".typing-actions-button1");
    const resumeButton = document.querySelector(".typing-actions-button2");
    const typingModal = document.querySelector(".typing-modal");

    startTheGame.addEventListener("click", () => {
        typingInputs.classList.add("typing-input-show");
        startTheGame.classList.add("typing-startgame-hide");
    });

    pauseButton.addEventListener("click", (e) => {
        e.preventDefault();
        typingModal.classList.add("typing-modal-show");
    });

    resumeButton.addEventListener("click", (e) => {
        e.preventDefault();
        typingModal.classList.remove("typing-modal-show");
    })
}
