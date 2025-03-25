import { deleteTask } from "../../api/API.js";
import { TaskContext } from "./context/TaskContext.js";

export const openDeleteContainer = (event, id = -1) => {
  console.log(
    event?.target.parentNode.parentNode.parentNode.getAttribute("task-id") ?? id
  );
  TaskContext.setTaskid(
    event?.target.parentNode.parentNode.parentNode.getAttribute("task-id") ?? id
  );
  document.querySelector(".delete-container").classList.toggle("active");
};

document
  .querySelector(".delete-container .contents .buttons button:nth-child(1)")
  .addEventListener("click", async (event) => {
    console.log(TaskContext.getTaskId());
    openDeleteContainer(event, TaskContext.getTaskId());
    await deleteTask(TaskContext.getTaskId());
    document.querySelector(`[task-id="${TaskContext.getTaskId()}"]`).remove();
  });

document
  .querySelector(".delete-container .contents .buttons button:nth-child(2)")
  .addEventListener("click", (event) => {
    openDeleteContainer(event);
  });
