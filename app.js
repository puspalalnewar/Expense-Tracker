const item = document.getElementById("item");
const amount = document.getElementById("amount");
const btnAdd = document.getElementById("btn-add");
const btnClear = document.getElementById("btn-clear");
const container = document.querySelector(".container");
const total = document.getElementById("total");
const listItems = document.querySelectorAll(".list-item");

if (item.value.length === 0) {
    btnAdd.disabled = true;
    btnAdd.style.cursor = "no-drop";
}
item.addEventListener("keyup", () => {
    btnAdd.disabled = false;
    btnAdd.style.cursor = "pointer";
});

btnAdd.addEventListener("click", () => {

    total.innerText = parseInt(total.innerText) + parseInt(amount.value) + "Rs";
    let newRec = document.createElement("p");
    newRec.classList.add("list-item");
    newRec.innerText = `${item.value} : ${amount.value} Rs`;
    const requestBody = {
        name: item.value,
        amount: amount.value,
        rupees: total.innerText,
    };
    const storeData = JSON.parse(localStorage.getItem("items")) || [];
    storeData.push(requestBody);
    localStorage.setItem("items", JSON.stringify(storeData));
    container.appendChild(newRec);
    item.value = "";
    amount.value = "";
    btnAdd.disabled = true;
    btnAdd.style.cursor = "no-drop";
});

btnClear.addEventListener("click", () => {
    localStorage.clear();
    total.innerText = "00";
    location.reload();
});

const fetchData = JSON.parse(localStorage.getItem("items"));
console.log(fetchData);

if (fetchData === null) {

} else {
    fetchData.forEach((e) => {

        total.innerText = `${e.rupees}`;
        let newRec = document.createElement("p");
        newRec.classList.add("list-item");
        newRec.innerText = `${e.name} : ${e.amount} Rs`;
        container.appendChild(newRec);
    });
}





