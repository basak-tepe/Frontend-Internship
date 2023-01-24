//overline done items
const app = Vue.createApp({
    data(){
        return{
        }
    },

    methods:{
        addTask(){  
            txt= document.querySelector("#inp"),
            toDoList = document.querySelector("#lst"),
            addbtn = document.querySelector("#btn"),
            checkbuttons = document.querySelector("#chklst"),
            clearbutton = document.querySelector("#clear"),
            item = document.createElement("li"),

            item.textContent = txt.value;
            toDoList.append(item);


            const newDiv = document.createElement("div");
            const checkbutton = document.createElement("input");
            checkbutton.type = "radio";
            newDiv.append(checkbutton);
            checkbuttons.append(newDiv);
        },

        clearTasks(){
            txt= document.querySelector("#inp"),
            toDoList = document.querySelector("#lst"),
            addbtn = document.querySelector("#btn"),
            checkbuttons = document.querySelector("#chklst"),
            clearbutton = document.querySelector("#clear"),
            item = document.createElement("li"),


            toDoList.textContent ="";
            toDoList.textContent = "Things to do";
            checkbuttons.textContent ="";
            checkbuttons.textContent="Done";

        }
    }
}).mount("#app");

