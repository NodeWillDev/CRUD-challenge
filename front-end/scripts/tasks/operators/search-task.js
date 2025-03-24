import { getAll } from "./get-all.js";
import { updateTask } from "./update-tasks.js";
import { getIdStatusByName } from "./status-id-by-name.js";

/** @type {HTMLInputElement} */
const input = document.querySelector(".search-container input");

/** @type {HTMLSelectElement} */
const field = document.querySelector('[name="search-by"]');
const data = await getAll();

input.addEventListener("input", (event) => {
  updateTask(
    event.target.value.length < 1
      ? data
      : data.filter((task) => {
          if (field.options[field.selectedIndex].value == "title")
            return task.title
              .toLowerCase()
              .includes(event.target.value.toLowerCase());
          if (field.options[field.selectedIndex].value == "status")
            return task.status == getIdStatusByName(event.target.value);

          if (field.options[field.selectedIndex].value == "description")
            return task.description
              .toLowerCase()
              .includes(event.target.value.toLowerCase());
        })
  );
});
