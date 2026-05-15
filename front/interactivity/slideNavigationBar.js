export default function slideNavBar(){
    const slideButon = document.querySelector(".game-navigation-showhide");
    const navigation = document.querySelector(".game-navigation");
    const navDescription =  document.querySelectorAll(".span-game");
    const mainLogo = document.querySelector(".main-logo");

    let clicked = false;

    slideButon.addEventListener("click", () =>{
        if(clicked){
            navigation.style.width = "1%";
            mainLogo.classList.add("game-mainlogo-hide");
            navDescription.forEach((span) => {
            span.style.display = "none";
        })
        }
        else{
        navigation.style.width = "15%";
        mainLogo.classList.remove("game-mainlogo-hide");
        navDescription.forEach((span) => {
            span.style.display = "block";
        })
        }
        clicked = !clicked;
    })
}