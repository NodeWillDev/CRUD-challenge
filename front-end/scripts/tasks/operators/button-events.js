import { allTasks, createTask } from "../../api/API.js";
import { TaskContext } from "./context/TaskContext.js";
import { editModal } from "./edit-modal.js";
import { openDeleteContainer } from "./open-delete-container.js";
import { statusColor } from "./status-color.js";
import { updateTask } from "./update-tasks.js";

document
  .getElementById("edit-container-button-save")
  .addEventListener("click", async () => {
    document.querySelector(".edit-container").classList.toggle("active");
    await editModal(
      {
        id: TaskContext.id,
        title: document.getElementById("edit-input-title").value,
        description: document.getElementById("edit-text-area-description")
          .value,
        status: document.getElementById("edit-select-status").value,
        color: statusColor(document.getElementById("edit-select-status").value)
          .background,
      },
      true
    );
  });
document
  .getElementById("edit-container-button-delete")
  .addEventListener("click", async () => {
    document.querySelector(".edit-container").classList.toggle("active");
    openDeleteContainer(null, TaskContext.getTaskId());
  });

document
  .getElementById("create-task-button-create")
  .addEventListener("click", async () => {
    document.querySelector(".create-task-container").classList.toggle("active");
    await createTask({
      description: document.getElementById("create-task-textarea-description")
        .value,
      status: document.getElementById("create-task-select-status").value,
      title: document.getElementById("create-task-input-title").value,
    });
    updateTask(await allTasks());
  });
document
  .querySelector(".create-task-container .close")
  .addEventListener("click", () =>
    document.querySelector(".create-task-container").classList.toggle("active")
  );
document
  .querySelector(".create-task button")
  .addEventListener("click", () =>
    document.querySelector(".create-task-container").classList.toggle("active")
  );
