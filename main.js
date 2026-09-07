const buttons= document.querySelectorAll("button");

buttons.forEach((button)=>{
    let showImg=true;
    button.addEventListener("click",()=>{
        const card=button.closest(".card");
        const image=card.querySelector(".card-img");
        const text=card.querySelector("p")
        
        if(showImg===true){
            image.hidden=true;
            text.style.display="block";
            button.innerText="\u{1F868}";
            button.classList.add("back-button");
            showImg=false;
        }
        else{
            button.classList.remove("back-button");
            image.hidden=false;
            text.style.display="none";
            button.innerText="Read more";
            showImg=true;
        }
    })
})
