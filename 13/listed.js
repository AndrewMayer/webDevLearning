window.setTimeout(function() {
  // put all of your JS code from the lecture here
  
  let todos = ["Make a todo app"];
  
  let input = prompt ("What would you like to do?");
  
  while (input !== "quit") {
    if (input === "list") {
      listTodos ();
    } else if (input === "add") {
      addTodo ();
    } else if (input === "delete") {
      deleteTodo();
    }
    input = prompt ("What would you like to do?");
  }
  
  console.log("You've quit the app ;_;");
  
  function listTodos() {
    console.log("-----------");
    todos.forEach(function(todo, index){
      console.log((index+1) + ":", todo);
    });
    console.log("-----------");
  }
  function addTodo() {
    let newTodo = prompt("Enter new todo")
    todos.push(newTodo);
    console.log("Item #" + todos.length + " added");
  }
  
  function deleteTodo() {
    let toDelete = prompt("Enter an index number");
    todos.splice((toDelete-1),1);
    console.log("Item #" + (toDelete) + " Deleted");
  }
  
}, 500);



