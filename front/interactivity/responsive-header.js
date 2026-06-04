export default function responsiveHeader(){
    const responsiveButton = document.querySelector(".header-logo-responsive-i");
    const responsiveSHow = document.querySelector(".header-innerlist");
    responsiveButton.addEventListener("click", () => {
        responsiveSHow.classList.toggle("header-innerlist-responsive");
    });

    const responsiveButton2 = document.querySelector(".game-logo-responsive-i");
    const responsiveSHow2 = document.querySelector(".game-navigation-nonresponsive");
    responsiveButton2.addEventListener("click", () => {
        responsiveSHow2.classList.toggle("game-navigation-nonresponsive-screen");
    });
}