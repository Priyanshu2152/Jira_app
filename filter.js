const colors = ["lightpink", "lightgreen", "lightblue","black"];
let colorBoxes = document.querySelectorAll(".color_boxes");
//..................change background color 0f option & locks boxes.............
let optiponBoxes = document.querySelectorAll(".box");
//.............loop then event listener...............
for(let i = 0; i<colorBoxes.length; i++){ 
colorBoxes[i].addEventListener("click", filterTickets); 
}
for(let i = 0; i<optiponBoxes.length; i++){
    optiponBoxes[i].addEventListener("click", selectOptions);
}

function filterTickets(e){
    if(isLocked==false){
        alert("First lock it")
        return;
    }
   let elem =  e.currentTarget;
   let elemChildArr = elem.children;
   let clickedColor = elemChildArr[0].classList[1];
   let secondClass = elem.classList[1];
   
//..................change background color 0f color_boxes......................
   if(secondClass=="clicked"){
       elem.classList.remove("clicked");
       showAll();
    
   }else{
       
       for(let i =0; i<colorBoxes.length; i++){
             colorBoxes[i].classList.remove("clicked");
       }
       elem.classList.add("clicked");
    
       showMyColor(clickedColor);
      
   }
}
function selectOptions(e){
    let elem = e.currentTarget;
    let secondClass = elem.classList[1];
    if(secondClass=="clicked"){
        elem.classList.remove("clicked");
    }else{
       
        for(let i =0; i<optiponBoxes.length; i++){
              optiponBoxes[i].classList.remove("clicked");
        }
        elem.classList.add("clicked");
    }
}

//..........filtered tickets basis on colors.............
function showMyColor(clickedColor){
    let allTickets = document.querySelectorAll(".ticket");
     for(let i =0; i<allTickets.length; i++){
         let header = allTickets[i].children[0];
         let headerColor = header.classList[1];
         if(headerColor==clickedColor){
             allTickets[i].style.display = "block";
         }else{
             allTickets[i].style.display = "none";
         }
     }
  
  }