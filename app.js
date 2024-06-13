const item = document.getElementById("item");
const amount = document.getElementById("amount");
const btnAdd = document.getElementById("btn-add");
const btnClear = document.getElementById("btn-clear");
const container = document.querySelector(".container");
const total = document.getElementById("total");

if(item.value.length === 0){
    btnAdd.disabled = true;
}

item.addEventListener("keyup", ()=>{
    btnAdd.disabled = false;
});

// let count = 0;

btnAdd.addEventListener("click", ()=>{
    total.innerText =  parseInt(total.innerText) + parseInt(amount.value) + "Rs";
    let newRec = document.createElement("p");
    newRec.classList.add("list-item");
    newRec.innerText = `${item.value} : ${amount.value} Rs`;
    let value = `${item.value} : ${amount.value} Rs`;
    container.appendChild(newRec);
    item.value = "";
    amount.value = "";
    btnAdd.disabled = true;
})


