const toggle = document.querySelector("#checkbox");
console.log(toggle);

toggle.addEventListener("change",()=>{
    if(toggle.checked){
        document.body.classList.add("testing");
    }else{
        document.body.classList.remove("testing");
    }
})