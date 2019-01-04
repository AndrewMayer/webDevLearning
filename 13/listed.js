window.setTimeout(function() {
  // put all of your JS code from the lecture here

  let todos = ["Make a todo app"];

  let input = prompt ("What would you like to do?");
  
  while (input !== "quit") {
    if (input === "list") {
      console.log(todos);
    } else if (input === "new") {
      let newTodo = prompt("Enter new todo")
      todos.push(newTodo);
    }
    input = prompt ("What would you like to do?");
  }

  console.log("You've quit the app");
  
}, 500);

