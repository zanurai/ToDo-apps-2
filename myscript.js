window.addEventListener("load", () => {
    const form = document.querySelector("#new-ToDo");
    const input = document.querySelector("#new-apps");
    const list = document.querySelector("#TODOS");


    console.log(form);

    form.addEventListener("submit", (r) => {
        r.preventDefault();


        const todo = input.value;
        if (!todo) {
            alert("this is my ToDo app");
        } else {
            console.log("success");
        }

        const todo_el = document.createElement("div");
        todo_el.classList.add("todo");

        const todo_content_el = document.createElement("div");
        todo_content_el.classList.add("content");

        todo_el.appendChild(todo_content_el);

        const todo_input_el = document.createElement("input");
        todo_input_el.classList.add("text");
        todo_input_el.type = "text";
        todo_input_el.value = todo;

        todo_content_el.appendChild(todo_input_el);
        todo_input_el.setAttribute("readonly", "readonly");

        const todo_action_el = document.createElement("div");
        todo_action_el.classList.add("action");

        const todo_edit_el = document.createElement("button");
        todo_edit_el.classList.add("edit");

        todo_edit_el.innerHTML = "Edit";

        const todo_delete_el = document.createElement("button");
        todo_delete_el.classList.add("delete");

        todo_delete_el.innerHTML = "Delete";

        todo_action_el.appendChild(todo_edit_el);
        todo_action_el.appendChild(todo_delete_el);

        todo_el.appendChild(todo_action_el);

        list.appendChild(todo_el);

        input.value = " ";

        todo_edit_el.addEventListener("click", () => {
            if (todo_edit_el.innerText.toLowerCase() == "edit") {
                todo_input_el.removeAttribute("readonly");
                todo_input_el.focus();
                todo_edit_el.innerText = "save"
            } else {

                todo_input_el.setAttribute("readonly", "readonly");

                todo_edit_el.innerText = "Edit"
            }
        })

        todo_delete_el.addEventListener("click", () => {
            list.removeChild(todo_el)
        })
    })
})