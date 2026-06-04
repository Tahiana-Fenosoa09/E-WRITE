export default function tutorials(){
    const getGameVideoButton = document.querySelector(".game-tutorials-video");
    const getGameSheetButton = document.querySelector(".game-tutorials-sheets");
    const getGameVideoSection = document.querySelector(".game-tutorials-video-youtube");
    const getGameSheetSection = document.querySelector(".game-tutorials-documentation");
    const getGameExitSheetSection = document.querySelector(".game-exit-documentation");
    const getGameExitVideoSection = document.querySelector(".game-exit-youtube");
    const getGameFirstGlance = document.querySelector(".game-tutorials-firstglance");

    getGameSheetButton.addEventListener("click" , () => {
        getGameSheetSection.classList.add("game-tutorials-documentation-show");
        getGameFirstGlance.classList.add("game-tutorials-firstglance-hide");
    })

    getGameVideoButton.addEventListener("click", () => {
        getGameVideoSection.classList.add("game-tutorials-video-youtube-show");
        getGameFirstGlance.classList.add("game-tutorials-firstglance-hide");
    })

    
    getGameExitSheetSection.addEventListener("click" , () => {
        getGameSheetSection.classList.remove("game-tutorials-documentation-show");
        getGameFirstGlance.classList.remove("game-tutorials-firstglance-hide");

    })

    getGameExitVideoSection.addEventListener("click", () => {
        getGameVideoSection.classList.remove("game-tutorials-video-youtube-show");
        getGameFirstGlance.classList.remove("game-tutorials-firstglance-hide");
    })
    
}
