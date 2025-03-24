import { TaskContext } from "./context/TaskContext.js";
import { updateContainers } from "./update-containers.js";

document
  .querySelector(".edit-container .close")
  .addEventListener("click", () => {
    document.querySelector(".edit-container").classList.toggle("active");
  });

export const openEditContainer = async (element) => {
  TaskContext.setTaskid(
    element.target.parentNode.parentNode.parentNode.getAttribute("task-id") ??
      -1
  );
  await updateContainers();
  document.querySelector(".edit-container").classList.toggle("active");
};
