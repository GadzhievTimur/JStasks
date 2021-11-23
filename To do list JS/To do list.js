const textEdit = document.getElementById("textInput");
const btnAdd = document.getElementById("add");
const listToDo = document.getElementById("list");
const clear = document.getElementById("clear");
const allFilter = document.getElementById("all");
const doneFilter = document.getElementById("completed");
const processFilter = document.getElementById("inProcess");

btnAdd.onclick = () => {
  const todo = {};
  const temp = document.createElement("li");
  const delBtn = document.createElement("button");

  if (!textEdit.value.trim()) {
    alert("Type something! ");
  } else {
    todo.need = textEdit.value;
    todo.check = false;
    temp.textContent = todo.need;
    delBtn.innerHTML = "❌";
    temp.onclick = () => {
      todo.check = !todo.check;
      if (todo.check === true) {
        temp.style = "text-decotation : line-through; color: gray";
      } else {
        temp.style = "text-decoration: none";
      }

      if (temp.classList.contains("false")) {
        temp.classList.contains.remove("false");
        temp.classList.add("true");
      } else {
        temp.classList.remove("true");
        temp.classList.add("false");
      }
    };

    delBtn.onclick = () => {
      const parent = delBtn.closest(".need");
      parent.remove();
    };

    temp.appendChild(delBtn);
    temp.className = "need";
    listToDo.append(temp);
    textEdit.value = "";
  }
};

allFilter.onclick = () => {
  const tempCollection = document.getElementsByClassName("need");
  for (let i = 0; i < tempCollection.length; i++) {
    tempCollection[i].style.display = "flex";
  }
};

doneFilter.onclick = () => {
  tempCollection = document.getElementsByClassName("need");
  for (let i = 0; i < tempCollection.length; i++) {
    if (tempCollection[i].classList.contains("false")) {
      tempCollection[i].style.display = "flex";
    } else {
      tempCollection[i].style.display = "none";
    }
  }
};

processFilter.onclick = function () {
  for (let i = 0; i < tempCollection.length; i++) {
    if (tempCollection[i].classList.contains("false"))
      tempCollection[i].style.display = "none";
    else tempCollection[i].style.display = "flex";
  }
};

clear.onclick = () => {
  while (listToDo.firstChild) {
    listToDo.removeChild(listToDo.firstChild);
  }
};
