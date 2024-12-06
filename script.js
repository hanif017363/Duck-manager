let tasks = [{ id: 1, text: "task1", status: "false" }];

const parent = document.getElementById("parent");
const form = document.getElementById("form");
// it is basic ui
function showLIst(domElement) {
  let html = "";
  if (tasks.length > 0) {
    tasks.forEach((task) => {
      html += `  <div
            class="text-box group flex justify-between content-center shadow hover:shadow-lg"
          >
            <div class="text flex items-center">
              <input
              onclick ="changeStatus(${task.id})"
                type="checkbox"
                class="size-5 mx-5 cursor-pointer"
                name="check-box"
                ${task.status === "true" && "checked=true"}
                id=""
              />
              <div class="px-5 text-xl font-semibold">${task.id}</div>
              <div class="text-xl p-1 capitalize font-semibold">${
                task.text
              }</div>
            </div>
            <div
              class="icon size-6 text-center m-4 invisible group-hover:visible transition-transform transform group-hover:scale-150 cursor-pointer"
            >
              <i onclick="removeTask(${task.id})" class="fa-solid fa-trash"></i>
            </div>
          </div>`;
    });
    domElement.innerHTML = html;
  } else {
    domElement.innerHTML = `<p class ="text-xl font-bold uppercase mx-4">no task found</p>`;
  }
}

function addTask(event) {
  const task = event.target.type.value;
  let taskList = { id: idGenerate(tasks), text: task, status: "false" };
  tasks.push(taskList);
}

function idGenerate(taskArray) {
  let init = 0;
  taskArray.map((task) => {
    if (task.id > init) {
      init = task.id;
    }
  });
  return init + 1;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const output = event.target.type.value;
  if (!output) {
    window.alert("no input");
  }
  addTask(event);
  showLIst(parent);
  console.log(tasks);
  event.target.reset();
});

showLIst(parent);

function removeTask(taskId) {
  tasks = tasks.filter((task) => {
    return task.id !== taskId;
  });
  showLIst(parent);
}

function changeStatus(id) {
  let newTask = tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        status: task.status === "true" ? "false" : "true",
      };
    } else {
      return task;
    }
  });
  tasks = newTask;
  console.log(tasks);
}
