import { getSpecify, updateTask } from "../../api/API.js";
import { statusColor } from "./status-color.js";
import { statusFormat } from "./status-format.js";

/**
 *
 * @param {Partial<Omit<TaskData, 'created_at'>> & {color: string, created_at?: string}} data
 * @param {boolean} [update]
 * @return {Promise<HTMLDivElement|null>}
 */
export const editModal = async (data) => {
  const recovery = await getSpecify(data.id);

  data = {
    color: data?.color ?? statusColor(recovery.status).background,
    description: data?.description ?? recovery.description,
    created_at: data?.created_at ?? recovery.created_at,
    status: data?.status ?? recovery.status,
    title: data?.title ?? recovery.title,
    id: data.id,
  };
  /** @type {HTMLDivElement} */
  const modal = document.querySelector(`[task-id="${data.id}"]`);
  const [title, status, description, date, check] = [
    modal.children[0].children[0],
    modal.children[1].children[0].children[0],
    modal.children[2].children[0],
    modal.children[1].children[1].children[0],
    modal.children[3].children[0].children[0],
  ];
  if (!modal) return;
  modal.setAttribute("task-id", data.id);
  modal.style.setProperty("--background", data.color);
  title.innerHTML =
    data.title.length > 17 ? `${data.title.slice(0, 17)}...` : data.title;
  status.innerHTML = statusFormat(data.status);
  date.innerHTML = Intl.DateTimeFormat("pt-br", {
    day: "2-digit",
    year: "2-digit",
    month: "2-digit",
  }).format(new Date(data.created_at));
  /** @type {HTMLPreElement} */
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
    if (modal.children[2].children[1]) modal.children[2].children[1].remove();
    description.parentNode.insertBefore(more, description.nextSibling);
  }
  check.classList.toggle("active", data.status == 1);

  modal.style.display = "flex";

  await updateTask({ ...data, id: data.id });
};
