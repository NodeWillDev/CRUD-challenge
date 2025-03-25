import { TaskContext } from "./context/TaskContext.js";
import { updateContainers } from "./update-containers.js";

document
  .querySelector(".edit-container .close")
  .addEventListener("click", () => {
    document.querySelector(".edit-container").classList.toggle("active");
  });

export const openEditContainer = async (event) => {
  TaskContext.setTaskid(
    event.target.parentNode.parentNode.parentNode.getAttribute("task-id") ?? -1
  );
  await updateContainers();
  document.querySelector(".edit-container").classList.toggle("active");
};
