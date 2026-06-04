export default function makeAuthSystem(){
    const logInButton = document.querySelector(".header-login");
    const signUpButton = document.querySelector(".actions-createaccount");
    const logIn = document.querySelector(".auth-form");
    const signUp = document.querySelector(".auth-signingup");
    const displaySection = document.querySelector(".section-auth")
    
    const getBeginButton = document.querySelector(".header-guest");
    const getOpeningPage = document.querySelector(".opening");

    
    
    logInButton.addEventListener("click" , () => {
        getOpeningPage.classList.add("main-hide");
        logIn.classList.add("auth-form-show");
        displaySection.classList.add("section-auth-show");
    })
    
    signUpButton.addEventListener("click" , () => {
        displaySection.classList.add("section-auth-show");
        getOpeningPage.classList.add("main-hide");
        signUp.classList.add("auth-signingup-show");
    });

}