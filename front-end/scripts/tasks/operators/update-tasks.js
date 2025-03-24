import "../../../index.d.js";
import { editModal } from "./edit-modal.js";
import { openDeleteContainer } from "./open-delete-container.js";
import { openEditContainer } from "./open-edit-container.js";
import { statusColor } from "./status-color.js";
import { statusFormat } from "./status-format.js";
/**
 * @param {TaskData[]} tasks
 */
export const updateTask = (tasks) => {
  const container = document.querySelector(".tasks-container");
  Array.from(container.children)
    .slice(1)
    .forEach((element) => {
      if (!element.classList.contains("not-found-container")) element.remove();
    });
  if (tasks.length < 1)
    document.querySelector(".not-found-container").style.display = "initial";
  else document.querySelector(".not-found-container").style.display = "none";

  tasks.forEach((data) => {
    /** @type {HTMLDivElement} */
    const modal = document.querySelector(".modal-component").cloneNode(true);
    modal.setAttribute("task-id", data.id);
    /** @type {HTMLPreElement} */
    const description = modal.children[2].children[0];
    modal.style.setProperty(
      "--background",
      statusColor(data.status).background
    );

    modal.children[0].children[0].innerHTML =
      data.title.length > 17 ? data.title.slice(0, 17) + "..." : data.title;

    modal.children[1].children[0].children[0].innerHTML = statusFormat(
      data.status
    );
    modal.children[1].children[1].children[0].innerHTML = Intl.DateTimeFormat(
      "pt-br",
      {
        day: "2-digit",
        year: "2-digit",
        month: "2-digit",
      }
    ).format(new Date(data.created_at));
    description.innerHTML =
      data.description.length > 355
        ? data.description.slice(0, 355) + "..."
        : data.description;
    if (data.description.length > 355) {
      console.log("maior poha");
      const more = document.createElement("button");
      more.textContent = "See More";

      let expanded = false;

      more.addEventListener("click", () => {
        expanded = !expanded;
        more.textContent = expanded ? "To Hide" : "See More";
        description.textContent = expanded
          ? data.description
          : data.description.slice(0, 355) + "...";
        // modal.style.height = expanded ? "auto" : ;
      });
      description.parentNode.insertBefore(more, description.nextSibling);
    }
    modal.children[3].children[0].children[0].addEventListener(
      "click",
      async () => {
        /** @type {HTMLDivElement} */
        const check = modal.children[3].children[0].children[0];
        await editModal(
          {
            color: check.classList.contains("active")
              ? statusColor(2).background
              : statusColor(1).background,
            id: data.id,
            status: check.classList.contains("active") ? 2 : 1,
          },
          true
        );
        check.classList.toggle("active");
      }
    );
    modal.children[3].children[1].children[0].addEventListener(
      "click",
      openEditContainer
    );
    modal.children[3].children[1].children[1].addEventListener(
      "click",
      openDeleteContainer
    );
    modal.style.display = "flex";
    container.appendChild(modal);
  });
};
