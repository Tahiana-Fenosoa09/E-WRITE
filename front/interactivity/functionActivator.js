import navigation  from "./navigation.js";
import showLearnMore from "./learn-more.js";
import slideNavBar from "./slideNavigationBar.js";
import tutorials from "./tutorials.js";
import makeAuthSystem from "./auth.js";
import responsiveHeader from "./responsive-header.js";
import redirect from "./rederecting.js";

function functionActivator(){
    navigation();
    showLearnMore();
    slideNavBar();
    tutorials();
    makeAuthSystem();
    responsiveHeader();
    redirect();
}

functionActivator();