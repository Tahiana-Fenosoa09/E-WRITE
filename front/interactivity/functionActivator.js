import navigation  from "./navigation.js";
import showLearnMore from "./learn-more.js";
import slideNavBar from "./slideNavigationBar.js";
import tutorials from "./tutorials.js";
import startGame from "./typinginteractivity.js";
import makeAuthSystem from "./auth.js";

function functionActivator(){
    navigation();
    showLearnMore();
    slideNavBar();
    tutorials();
    startGame();
    makeAuthSystem();
}

functionActivator();