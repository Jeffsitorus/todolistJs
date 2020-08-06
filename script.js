// let newList = document.getElementById('newList');
// let ul = document.getElementById('list');

// newList.addEventListener("keypress", (e) => {
//   if (e.key === 'Enter') {
//     let text = newList.value;
//     let date = new Date();
//     let timestamp = date.getTime();
//     localStorage.setItem(timestamp, text);
//     tampilkanData(text);
//     newList.value = '';
//   }
// });

// function tampilkanData(value) {
//   let li = document.createElement("li");
//   li.appendChild(document.createTextNode(value));
//   ul.appendChild(li);
// }

// function dataLocalStorage() {
//   for (let [key, value] of Object.entries(localStorage)) {
//     tampilkanData(value);
//   }
// }

// dataLocalStorage();


const newList = document.getElementById('newList');
const ul = document.getElementById('list');

newList.addEventListener("keypress", (e) => {
  if (e.key === 'Enter') {
    const li = document.createElement("li");
    let text = newList.value;
    const liText = document.createTextNode(text);
    li.appendChild(liText);
    ul.appendChild(li);
    newList.value = '';
  }
});