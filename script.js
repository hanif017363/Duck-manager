let tasks = [
  { id: 1, text: "welcome", status: "false" },
  { id: 2, text: "type and add", status: "false" },
  { id: 3, text: "press <- left ", status: "false" },
  { id: 4, text: "press -> right ", status: "false" },
  { id: 5, text: "click bottom btns ", status: "false" },
];

const parent = document.getElementById("parent");
const form = document.getElementById("form");
const countnum = document.getElementById("countNum");
let statusName = "all";
// it is basic ui
function showLIst(domElement) {
  let html = "";
  let filterTaskstatus = countStatus(statusName);
  if (filterTaskstatus.length > 0) {
    filterTaskstatus.forEach((task) => {
      html += `  <div
            class="text-box group flex justify-between content-center shadow hover:shadow-lg"
          >
            <div class="text flex items-center">
              <input
              onclick ="changeStatus(${task.id})"
                type="checkbox"
                class=" size-5 mx-3 md:mx-5 cursor-pointer"
                name="check-box"
                ${task.status === "true" && "checked=true"}
                id=""
              />
              <div class="md:px-5 md:text-xl text-base font-semibold">${
                task.id
              }</div>
              <div class="md:text-xl text-base p-1 capitalize mx-2 font-semibold">${
                task.text
              }</div>
            </div>
            <div
              class="icon size-3 md:size-6 text-center m-1 md:m-4 md:invisible md:group-hover:visible md:transition-transform md:transform md:group-hover:scale-150 cursor-pointer"
            >
              <i onclick="removeTask(${task.id})" class="fa-solid fa-trash"></i>
            </div>
          </div>`;
    });
    domElement.innerHTML = html;
  } else {
    domElement.innerHTML = `<p class ="text-xl font-bold uppercase mx-4">no task found</p>`;
  }
  countnum.innerText = `Tasks:${filterTaskstatus.length} `;
}

function addTask(event) {
  const task = event.target.type.value;
  if (!task) return;
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
    return;
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

function active(name, status) {
  const all = document.getElementById("all");
  const complete = document.getElementById("complete");
  const incomplete = document.getElementById("incomplete");
  const para = document.getElementById("para");
  const author = document.getElementById("author");

  statusName = name;
  document.querySelector("#activeBar .activebtn").classList.remove("activebtn");
  if (name === "all" && status === true) {
    all.classList.add("activebtn");
  }
  if (name === "complete" && status === true) {
    complete.classList.add("activebtn");
  }
  if (name === "incomplete" && status === true) {
    incomplete.classList.add("activebtn");
  }
  if (name === "author" && status === true) {
    author.classList.add("hidden");
    para.classList.add("hidden");
  }
  showLIst(parent);
}

function countStatus(status) {
  if (status === "all") {
    return tasks;
  }
  if (status === "complete") {
    return tasks.filter((task) => task.status === "true");
  }
  if (status === "incomplete") {
    return tasks.filter((task) => task.status === "false");
  }
  showLIst(parent);
}
function remove(name, status) {
  const para = document.getElementById("para");
  const author = document.getElementById("author");

  if (name === "author" && status === true) {
    author.classList.add("hidden");
    para.classList.add("hidden");
  }
  showLIst(parent);
}
