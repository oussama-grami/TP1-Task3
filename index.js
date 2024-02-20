const name=document.querySelector(".name");
const content=document.querySelector('.content');
const addButton=document.querySelector("#addButton");
const list=document.querySelector(".list");
addButton.addEventListener('click',()=>{
    console.log("listened");
    if(name.value===''){
        alert("Le nom est vide");
    }
    else if(content.value===''){
        alert("Le contenue  est vide");
    }
    else{
        list.innerHTML+=`<li> ${name.value} : ${content.value} </li>`;
    }
})