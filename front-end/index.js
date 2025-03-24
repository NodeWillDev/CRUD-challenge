import "./scripts/grids-style.js";
import { getAll } from "./scripts/tasks/operators/get-all.js";
import "./scripts/tasks/operators/search-task.js";
import { updateTask } from "./scripts/tasks/operators/update-tasks.js";

updateTask(await getAll());
