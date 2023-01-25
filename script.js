let orderedList = document.getElementById("todoList")
let list = document.getElementById("newTodoInput")


function adding(){
	if(list.value != ""){
		let newList = document.createElement("li");
		newList.innerHTML = list.value
		orderedList.appendChild(newList)
		list.value = "";
	}
	
}