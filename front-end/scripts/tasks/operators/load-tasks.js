import { getAll } from "./get-all.js";
import { statusColor } from "./status-color.js";
import { statusFormat } from "./status-format.js";

(await getAll()).forEach((data) => {
  /** @type {HTMLDivElement} */
  const modal = document.querySelector(".modal-component").cloneNode(true);

  /** @type {HTMLPreElement} */
  const description = modal.children[2].children[0];
  modal.style.setProperty("--background", statusColor(data.status).background);
  modal.children[0].children[0].innerHTML = data.title;

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
        : data.description.slice(0, 355) + "...";
      modal.style.height = expanded ? "auto" : "42rem";
    });

    description.parentNode.insertBefore(more, description.nextSibling);
  }

  document.querySelector(".tasks-container").appendChild(modal);
});
document.querySelectorAll(".modal-component")[0].remove();
