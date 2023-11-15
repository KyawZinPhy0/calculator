
const navBtn = document.querySelector("#navBtn")  ;
const barBtn = document.querySelector("#barBtn") ;






const barBtnHandler = () => {
    navBtn.classList.toggle ("hidden");
   
}



barBtn.addEventListener("click" , barBtnHandler)