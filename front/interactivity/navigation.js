export default function navigation(){
    const dashBoardButton = document.querySelector(".game-navigation-dashboard");
    const communityButton = document.querySelector(".game-navigation-community");
    const gameButton = document.querySelector(".game-navigation-game");
    const tutorialsButton = document.querySelector(".game-navigation-tutorials");
    const settingButton = document.querySelector(".game-navigation-setting");
    const logOutButton = document.querySelector(".game-navigation-logout");


    const getGameDashBoard = document.querySelector(".game-dashboard");
    const getCommunity = document.querySelector(".game-community");
    const getGame = document.querySelector(".game-board");
    const getTutorials = document.querySelector(".game-tutorials");
    const getSettings = document.querySelector(".game-settings")

    
    const allPages = [getGameDashBoard,getCommunity,getGame,getTutorials,getSettings];
    let currentPageLocation;

    function openGame(){
        const getBeginButton = document.querySelector(".actions-createaccount");
        const getOpeningPage = document.querySelector(".opening");
        const getGameSection = document.querySelector(".section-game");
        
        getBeginButton.addEventListener("click", () => {
            currentPageLocation = allPages[0];
            getOpeningPage.classList.add("main-hide");
            getGameSection.classList.add("section-game-show");
            getGameDashBoard.style.display = "flex"
        });
    }

    function navigateBetweenPages(currentPage,pageclicked){
            currentPage.style.display = "none"
            pageclicked.style.display = "flex";
    }

    dashBoardButton.addEventListener("click", () => {
        if (currentPageLocation != allPages[0]){
            const previousPage = currentPageLocation;
            currentPageLocation = allPages[0];
            navigateBetweenPages(previousPage,getGameDashBoard);
        }
    });

    communityButton.addEventListener("click", () => {
        if( currentPageLocation != allPages[1]){
            const previousPage = currentPageLocation;
            currentPageLocation = allPages[1];
            navigateBetweenPages(previousPage,getCommunity);
        }
    });

    gameButton.addEventListener("click", () => {
        if( currentPageLocation != allPages[2]){
            const previousPage = currentPageLocation;
            currentPageLocation = allPages[2];
            navigateBetweenPages(previousPage,dashBoardButton);

        }
    });

    tutorialsButton.addEventListener("click", () => {
        if (currentPageLocation != allPages[3]){
            const previousPage = currentPageLocation;
            currentPageLocation = allPages[3];
            navigateBetweenPages(previousPage,getTutorials);
        }
    });

    settingButton.addEventListener("click", () => {
        if (currentPageLocation != allPages[4]){
            const previousPage = currentPageLocation;
            currentPageLocation = allPages[4];
            navigateBetweenPages(previousPage,getSettings);
        }
    });

    openGame();
}