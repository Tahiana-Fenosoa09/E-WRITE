export default function showLearnMore(){
    const learnMoreButton = document.querySelector(".actions-learnmore");
    const modal = document.querySelector(".modal");
    const learnMore = document.querySelector(".learn-more");
    const learnMoreClose = document.querySelector(".learn-more-exit");

    learnMoreButton.addEventListener("click", () => {
        modal.classList.add("modal-show");
        learnMore.classList.add("learn-more-show");
    });

    learnMoreClose.addEventListener("click", () => {
        modal.classList.remove("modal-show");
        learnMore.classList.remove("learn-more-show");
    })
}