
export default function redirect(){
    const logInButton = document.querySelector("#login");
    const signUpButton = document.querySelector("#signup");
    const logIn = document.querySelector(".auth-form");
    const signUp = document.querySelector(".auth-signingup");
    const toPage = document.querySelector(".section-redirecting");
    const backtoLandingPage = document.querySelector(".redirecting-guest");
    const getOpeningPage = document.querySelector(".opening");
    const authSection = document.querySelector(".section-auth");

    logInButton.addEventListener("click", (e) => {
        e.preventDefault();
        toPage.classList.add("section-redirecting-show");
        logIn.classList.remove("auth-form-show");

    });

    signUpButton.addEventListener("click", (e) => {
        e.preventDefault();
        toPage.classList.add("section-redirecting-show");
        signUp.classList.remove("auth-signingup-show");
    });


    backtoLandingPage.addEventListener("click", () => {
       toPage.classList.remove("section-redirecting-show");
       getOpeningPage.classList.remove("main-hide");
       authSection.classList.remove("section-auth-show");
    })   
 
}