//const allColors = document.querySelectorAll(".color");
const main = document.querySelector(".main");
const addBtn = document.querySelector(".add")
addBtn.addEventListener("click", function(){
    if(isLocked==true){
        alert("first Unlock it");
        return;
    }
    handleCreation();
})
function deleteTicket(e){
    if (isDelete==true && isLocked==false){
        e.currentTarget.remove();
        console.log("clicked");
    }
   
}
function handleCreation(){
    
    isDelete = false;
    let id = shortid();
    createModal(id);
}
function createModal(id){
    let cColor = "black";
    let modal = document.createElement("div");
    modal.setAttribute("class","modal");
    modal.innerHTML = `
    <textarea class="contentarea" placeholder="Enter some task"></textarea>
                <div class="pallete_container">
                    <div class="colorpallete lightpink "></div>
                    <div class="colorpallete lightgreen"></div>
                    <div class="colorpallete lightblue"></div>
                    <div class="colorpallete black"></div>
                </div>`
     main.appendChild(modal);
     
     //select colors
     let allColors = modal.querySelectorAll(".colorpallete");

     for(let i =0; i<allColors.length; i++){
         allColors[i].addEventListener("click", function(e){
              cColor = allColors[i].classList[1];
         })
     }
     modal.addEventListener("keypress", function(e){
         let key = e.key;
         if(key == "Enter"){
             let textArea = modal.querySelector("textarea");
             let text = textArea.value;
             modal.remove();
             createTicket(id, cColor, text);
         }
     })

}

function createTicket(id, color, text){
   
     let ticket = document.createElement("div");
     ticket.setAttribute("class", "ticket");
     ticket.innerHTML = `<div class="ticket_header ${color}"></div>
     <div class="ticket_content">
         <div class="ticket_id}">
            #${id}
         </div>
         <textarea name="">${text}</textarea></div>
    </div>`
    main.appendChild(ticket);
    
    
    let header = ticket.querySelector(".ticket_header");
    header.addEventListener("click", changeColor);
    ticket.addEventListener("click", deleteTicket);
}
//change colors of headers
function changeColor(e){
    if(isLocked==true){
        alert("Unlock it first");
        return;
    }
    let header = e.currentTarget;
    let classes = header.classList;
   
    let cColor = classes[1];
   // alert(cColor);
    let cidx = 0;
    for(let i = 0; i<colors.length; i++){
        if(cColor==colors[i]){
           cidx=i;
           break;
        }
    }
        let nextIdx  = (cidx+1)%colors.length;
        let nextColor = colors[nextIdx];
        classes.remove(cColor);
        classes.add(nextColor);
    }

