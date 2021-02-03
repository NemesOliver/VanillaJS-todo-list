(function () {
  // 1.get user input
  const addBtn = document.querySelector(".add");
  const inputField = document.querySelector(".input");
  //event handlers
  addBtn.addEventListener("click", () => {
    const userInput = inputField.value;
    inputField.value = "";

    //check if input isnt empty
    if (userInput !== "") {
      //Create todo div with user input
      const todo = document.createElement("div");
      todo.classList.add("todo");
      todo.innerHTML = `<p>${userInput}</p>
  <svg
   width="40"
   height="40"
   viewBox="0 0 40 40"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
 >
   <path
     d="M20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 8.955 31.045 0 20 0ZM27.6617 29.9233L20.01 22.34L12.4183 30L10.0767 27.6583L17.655 20.005L10 12.4183L12.3417 10.0767L19.9883 17.6483L27.5633 10L29.9233 12.3383L22.3467 19.9833L30 27.5633L27.6617 29.9233Z"
     fill="black"
   />
 </svg>`;
      // append to this div
      const container = document.querySelector(".todo-container");
      container.appendChild(todo);
      //give delete button a class .delete
      todo.childNodes[2].classList.add("delete");
      console.log(todo.childNodes[2]);
    }
    //delete todos
    const delBtns = document.querySelectorAll(".delete");
    delBtns.forEach((del) => {
      del.addEventListener("click", (e) => {
        console.log(e);
      });
    });
  });
})();
