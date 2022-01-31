let input = document.getElementById("userinput");
let button = document.getElementById("enter");
let ul = document.querySelector("ul");
let listItems = document.querySelectorAll("li");

function inputLength() {
    return input.value.length;
    }

    function createListItem () {
    if(inputLength() > 0) {
    
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
    

        let delButton = document.createElement("button");
        delButton.appendChild(document.createTextNode("Delete"));
        li.appendChild(delButton);
        input.value = "";
        delButton.addEventListener("click", removeParent);
    }
}

function createListItemAfterKeyPress () {
    if (inputLength() > 0 && event.keyCode=== 13) {
        createListItem();
    }
}

function taskDone(event) {
    let target = event.target;
    target.classList.toggle("done");
}

button.addEventListener("click", createListItem);
input.addEventListener("keypress", createListItemAfterKeyPress);
ul.addEventListener("click", taskDone);

function addButtons () {

    let button = document.createElement("button");
    button.appendChild(document.createTextNode("Delete"));
    listItems[i].appendChild(button);

    button.addEventListener("click", removeParent)
}

function listLength() {
    return listItems.length;
}

for (i = 0; i< listLength(); i++) {
    addButtons();
}

function removeParent() {
    event.target.parentNode.remove();
}