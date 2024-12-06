let tasks = [
  {
    id: 1,
    task: "Todo",
    status: "false",
  },
];
console.log(tasks);
const parentBox = document.getElementById("parent");
const formDom = document.getElementById("form");
const counttask = document.getElementById("counttask");

let statusName = "all";

// event listener

function showTask(domElement) {
  let html = "";
  let filterTaskstatus = filterTask(statusName);
  if (filterTaskstatus.length > 0) {
    filterTaskstatus.forEach((task) => {
      html += `<div
                    class="shadow p-4 m-2 flex gap-3 cursor-pointer hover:shadow-xl relative group/item"
                  >
                    <div>
                      <input
                      onClick= "changeStatus(${task.id})"
                        type="checkbox"
                        ${task.status === "true" && "checked=true"};
           
                        
                        class="w-4 h-4 accent-teal-500 rounded-lg cursor-pointer"
                      />
                    </div>
                    <div class="px-4">${task.id}</div>
                    <div class="px-4" mx-4>${task.task}</div>
                    <div
                      class="flex gap-7 text-xl absolute right-10 invisible group-hover/item:visible"
                    >
                      <i onclick="removeTask(${
                        task.id
                      })" class="fa-solid fa-trash"></i>
                    </div>
                  </div>`;
    });
    domElement.innerHTML = html;
  } else {
    domElement.innerHTML = "<p>no task found</p>";
  }
  counttask.innerText = `count=${filterTaskstatus.length}`;
}
function addTask(event) {
  const task = event.target.inputText.value;
  const taskList = {
    id: idGenerate(tasks),
    task: task,
    status: "false",
  };
  tasks.push(taskList);
}

function idGenerate(taskArray) {
  let initial = 0;
  taskArray.forEach((task) => {
    if (task.id > initial) {
      initial = task.id;
    }
  });
  return initial + 1;
}

formDom.addEventListener("submit", function (event) {
  event.preventDefault();
  const output = event.target.inputText.value;
  if (!output) {
    window.alert("input must be include");
  } // if dont hve output then no output
  addTask(event);
  showTask(parentBox);
  console.log(tasks);
  event.target.reset();
});
function removeTask(taskId) {
  const remainingRealtask = tasks.filter((task) => task.id !== taskId);
  tasks = remainingRealtask;
  showTask(parentBox);
  console.log(`Task with ID ${taskId} removed`);
}
``;
// change status

function changeStatus(id) {
  const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        status: task.status === "true" ? "false" : "true",
      };
    } else {
      return task;
    }
  });
  tasks = updatedTasks;
  console.log(tasks);
}

function sort(name, status) {
  const previousactivElement = document.querySelector("#activeBar .active");
  statusName = name;
  previousactivElement.classList.remove("active");
  status.classList.add("active");
  status.style.userSelect = "none";
  showTask(parentBox);
}
function filterTask(status) {
  if (status === "all") return tasks;
  if (status === "complete")
    return tasks.filter((task) => task.status === "true");
  if (status === "incomplete")
    return tasks.filter((task) => task.status === "false");
}
showTask(parentBox);
