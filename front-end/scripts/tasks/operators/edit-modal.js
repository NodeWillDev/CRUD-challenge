import { getSpecify, updateTask } from "../../api/API.js";
import { TaskContext } from "./context/TaskContext.js";
import { openDeleteContainer } from "./open-delete-container.js";
import { openEditContainer } from "./open-edit-container.js";
import { statusColor } from "./status-color.js";
import { statusFormat } from "./status-format.js";

/**
 *
 * @param {Partial<Omit<TaskData, 'created_at'>> & {color: string, created_at?: string}} data
 * @param {boolean} [update]
 * @return {Promise<HTMLDivElement|null>}
 */
export const editModal = async (data, update) => {
  const recovery = await getSpecify(data.id);

  data = {
    color: data?.color ?? statusColor(recovery.status).background,
    description: data?.description ?? recovery.description,
    created_at: data?.created_at ?? recovery.created_at,
    status: data?.status ?? recovery.status,
    title: data?.title ?? recovery.title,
  };
  /** @type {HTMLDivElement} */
  const modal = document.querySelector(`[task-id="1"]`);
  if (!modal) return;
  modal.style.setProperty("--background", data.color);
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
  /** @type {HTMLPreElement} */
  const description = modal.children[2].children[0];
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
        : data.description.slice(0, 355) + "...";
    });
    console.log(modal.children[2].children[1].remove());
    description.parentNode.insertBefore(more, description.nextSibling);
  }
  if (update) await updateTask({ ...data, id: TaskContext.id });
};
