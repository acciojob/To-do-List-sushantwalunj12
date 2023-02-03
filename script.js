let btn=document.getElementById("addTodoBtn")
btn.addEventListener("click",funcall)
function funcall(){
	if(document.getElementById("newTodoInput").value!=""){
	    let store=document.createElement("li")
	    store.innerText=document.getElementById("newTodoInput").value
        todoList.appendChild(store)
	}
    else alert("write something")
	document.getElementById("newTodoInput").value=""
}

