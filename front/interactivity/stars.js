export default function stars(){
    const starContainer = document.querySelectorAll(".footer-stars");
    const starButton = document.querySelectorAll("#footer-stars-i");
    starButton.forEach((e) => {
        e.addEventListener("click", () => {
            if(e.className.includes("fa-regular")){
                e.className = "fa-solid fa-star fa-2xl";
                e.style.color = "yellow";
            }else{
                e.className = "fa-regular fa-star fa-2xl";
                e.style.color = "white";
            }
        })
    })
}