export default function likes(){
    const likeContainer = document.querySelector(".dashboard-text-quote-like");
    const likeButton = document.querySelector("#dashboard-text-quote-like-i");
    likeContainer.addEventListener("click", () => {
        if(likeButton.className.includes("fa-regular")){
            likeButton.className = "fa-solid fa-heart fa-2xl";
            likeButton.style.color = "red";
        }else{
            likeButton.className = "fa-regular fa-heart fa-2xl";
            likeButton.style.color = "white";
        }
    })
}