let tasks = [{ id: 1, text: "task1", status: true }];

const parent = document.getElementById("parent");
const form = document.getElementById("form");
// it is basic ui
function showLIst(domElement) {
  let html = "";
  if (taskslength > 0) {
    tasks.forEach((task) => {
      html += `  <div
            class="text-box group flex justify-between content-center shadow hover:shadow-lg"
          >
            <div class="text flex items-center">
              <input
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
              <i class="fa-solid fa-trash"></i>
            </div>
          </div>`;
    });
    domElement.innerHTML = html;
  } else {
    domElement.innerHTML = `<p>no task found</p>`;
  }
}

function addTask() {
  const task = form.target.type.value;
  let taskList = [{ id: 1, text: task, status: true }];
  tasks.push(taskList);
}
