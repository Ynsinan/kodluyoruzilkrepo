'use strict'
const addButton = document.querySelector(".button");
var newTask = document.getElementById("task");
var todoList = document.querySelector("#list");
var listLi = document.querySelectorAll("#list > li");
let closeBtn = document.querySelectorAll("span.close");


function complete(event) {
    if (event.target.parentElement.parentElement.className === "checked") {
        event.target.parentElement.parentElement.className = "task-element";
    } else {
        event.target.parentElement.parentElement.className = "checked";
    }

}
function remove(event) {
    event.currentTarget.parentElement.remove();
}
function newElement() {
    if (newTask.value.trim(" ")) {
        let li = document.createElement("li");
        let ul = document.querySelector("ul");
        li.innerHTML = `
            <div>
                <p>${newTask.value}</p>
            </div>
                <span onclick="complete(event)">
                <i class="fas fa-check"></i>
                </span>
                <span class="close" type="submit" onclick="remove(event)">x</span>
        `;
        li.className = "task-element";
        ul.appendChild(li);
        newTask.value = "";
        $(".success").toast("show");
    }
    else {
        $(".error").toast("show");
        newTask.value = "";
    }
}
