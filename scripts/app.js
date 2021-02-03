(function () {
  // 1.get user input
  const addBtn = document.querySelector(".add");
  const inputField = document.querySelector(".input");
  //event handlers
  addBtn.addEventListener("click", () => {
    const userInput = inputField.value;
    //console.log(userInput);
  });
})();
