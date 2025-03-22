import { getAll } from "./get-all.js";
import { statusColor } from "./status-color.js";
import { statusFormat } from "./status-format.js";

(await getAll()).forEach((data) => {
  /** @type {HTMLDivElement} */
  const modal = document.querySelector(".modal-component").cloneNode(true);
  modal.style.setProperty("--background", statusColor(data.status).background);
  modal.children[0].children[0].innerHTML = data.title;

  modal.children[1].children[0].children[0].innerHTML = statusFormat(
    data.status
  );
  modal.children[1].children[1].children[0].innerHTML = data.created_at;
  modal.children[2].children[0].innerHTML = data.description;
  document.querySelector(".tasks-container").appendChild(modal);
});
