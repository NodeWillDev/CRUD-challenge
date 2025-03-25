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
  const placeholder = document.querySelector(".not-found-container");

  [...document.querySelector(".tasks-container").children]
    .slice(1)
    .forEach((element) => {
      if (element !== placeholder) element.remove();
    });

  placeholder.style.display = tasks.length ? "none" : "initial";

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
      const more = document.createElement("button");
      more.textContent = "See More";
      let expanded = false;
      more.addEventListener("click", () => {
        expanded = !expanded;
        more.textContent = expanded ? "To Hide" : "See More";

        description.textContent = expanded
          ? data.description
          : `${data.description.slice(0, 355)}...`;
      });

      description.parentNode.insertBefore(more, description.nextSibling);
    }
    const check = modal.children[3].children[0].children[0];
    check.addEventListener("click", async () => {
      data.status = check.classList.contains("active") ? 2 : 1;
      console.log(data.status);
      await editModal({
        color: statusColor(data.status).background,
        id: data.id,
        status: data.status,
      });
    });
    check.classList.toggle("active", data.status == 1);
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
