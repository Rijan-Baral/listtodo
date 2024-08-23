const row = document.querySelector(".todo-row");
const container = document.querySelector(".container2");
const textbox = document.querySelector(".enterinput");
const datebox = document.querySelector(".enterdate");
const timebox = document.querySelector(".entertime");
const add = document.querySelector(".btn");
const del = document.querySelector(".delete");
const text = document.querySelector(".text");
const date = document.querySelector(".date");
const time = document.querySelector(".time");
let yourtask = document.querySelector(".yourtask");
row.remove();
let i = 0;
add.addEventListener("click", function () {
  if (
    textbox.value.trim() === "" ||
    datebox.value.trim() === "" ||
    timebox.value.trim() === ""
  ) {
    alert("All the boxes need to be filled");
  } else {
    let todo = [textbox.value, datebox.value, timebox.value];
    let string = ` <div class="todo-row">
            <div class="num size"><h5>Tasks.No<h5>${(i = i + 1)}</div>
            <div class="text size">${todo[0]}</div>
            <div class="date size"> ${todo[1]}</div>
            <div class="time size"> ${todo[2]}</div>
            <button class="delete size"><i class="fa-solid fa-trash"></i></button>
      </div>`;
    container.insertAdjacentHTML("afterbegin", string);
    yourtask.innerHTML = `<H3>YOUR TASKS👇<H3>`;
    textbox.value = "";
    datebox.value = "";
    timebox.value = "";
  }
});

container.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    const delRow = event.target.closest(".todo-row");
    if (delRow) {
      delRow.remove();
      if (container.childElementCount == 0) {
        yourtask.innerHTML = `<H3>NO TASKS🚫<H3>`;
      }
    }
  }
});
