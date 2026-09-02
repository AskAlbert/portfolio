const buttons= document.querySelectorAll("button");

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const card=button.closest(".card");
        const image=card.querySelector(".card-img");
        const text=card.querySelector("p")
        image.hidden=true;
        text.style.display="block";
        button.style.display="none"
    })
})
