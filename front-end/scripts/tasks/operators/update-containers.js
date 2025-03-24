import { getSpecify } from "../../api/API.js";
import { TaskContext } from "./context/TaskContext.js";

export const updateContainers = async () => {
  const data = await getSpecify(TaskContext.id);
  if (!data) return;
  document.getElementById("edit-input-title").value = data.title;
  document.getElementById("edit-select-status").value = data.status;
  document.getElementById("edit-text-area-description").value =
    data.description;
};
