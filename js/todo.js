let button = document.querySelector(".add");
let input = document.querySelector(".message");
let wrapper = document.querySelector(".wrapper");

button.addEventListener("click", function () {
  let addListItems = document.createElement("div");
  if (input.value) {
    wrapper.prepend(addListItems);
    addListItems.classList.add("addListItems");
    let text = document.createElement("p");
    addListItems.prepend(text);
    text.classList.add("wrapper");
    text.innerText = input.value;
    let del = document.createElement("button");
    addListItems.append(del);
    del.classList.add("del");
    del.innerText = "X";
    input.value = "";
  }

  let remove = document.querySelectorAll(".del");
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
});

input.addEventListener('keyup', function(e){
  if(e.keyCode ===13){
    e.preventDefault()
    button.click()
  }
})