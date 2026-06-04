import navigation  from "./navigation.js";
import showLearnMore from "./learn-more.js";
import slideNavBar from "./slideNavigationBar.js";
import tutorials from "./tutorials.js";
import makeAuthSystem from "./auth.js";
import responsiveHeader from "./responsive-header.js";
import redirect from "./rederecting.js";
import likes from "./likes.js";
import stars from "./stars.js";
import communityData from "./communityData.js";


function functionActivator(){
    navigation();
    showLearnMore();
    slideNavBar();
    tutorials();
    makeAuthSystem();
    responsiveHeader();
    redirect();
    likes();
    stars();
    communityData();
}

functionActivator();