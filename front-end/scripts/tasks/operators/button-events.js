import { TaskContext } from "./context/TaskContext.js";
import { editModal } from "./edit-modal.js";
import { statusColor } from "./status-color.js";

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
