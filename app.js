const deleteBtn = document.querySelector(".delete");
const lock = document.querySelector(".lock");
const unlock = document.querySelector(".unlock");

let isLocked = false;
let isDelete = false;

deleteBtn.addEventListener("click", deleteHelper);
//click on lock unlock here
lock.addEventListener("click", lockHelper);
unlock.addEventListener("click", unlockHelper);

function deleteHelper(){
    if(isLocked==true){
        alert("unlock first");
        return;
    }
    if(isDelete==false){
        isDelete = true;
        
    }else{
        isDelete=false;
       
    }
}
function lockHelper(e){
    isLocked = true;
    disableEdit();

}
function unlockHelper(e){
   isLocked = false;
   showAll();
   enableEdit();
}   
// code can edit
function enableEdit(){
   let allTickets = document.querySelectorAll(".ticket");

   for(let i = 0; i<allTickets.length; i++){
       let textarea = allTickets[i].querySelector("textarea");
       textarea.removeAttribute("readonly", "");
   }
}
// code cannot edit
function disableEdit(){
    let allTickets = document.querySelectorAll(".ticket");

    for(let i = 0; i<allTickets.length; i++){
        let textarea = allTickets[i].querySelector("textarea");
        textarea.setAttribute("readonly", "");
    }
}
function showAll(){
    let allTickets = document.querySelectorAll(".ticket");
   for(let i =0; i<allTickets.length; i++){
     allTickets[i].style.display = "block";
    }
    for(let i =0; i<colorBoxes.length; i++){
        colorBoxes[i].classList.remove("clicked");
  }
    
    
}

