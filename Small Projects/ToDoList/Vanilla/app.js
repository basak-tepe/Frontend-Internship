//overline done items

const addbtn = document.querySelector("#btn");
const toDoList = document.querySelector("#lst");
const txt = document.querySelector("#inp");
const checkbuttons = document.querySelector("#chklst");
const clearbutton = document.querySelector("#clear");


addbtn.addEventListener('click',() =>{
    const item = document.createElement("li"); 
    item.textContent = txt.value;
    toDoList.append(item);


    const newDiv = document.createElement("div");
    const checkbutton = document.createElement("input");
    checkbutton.type = "radio";
    newDiv.append(checkbutton);
    checkbuttons.append(newDiv);
});


clearbutton.addEventListener('click',()=>{
    toDoList.textContent ="";
    toDoList.textContent = "Things to do";
    checkbuttons.textContent ="";
    checkbuttons.textContent="Done";

});