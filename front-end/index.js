import "./scripts/grids-style.js";
import "./scripts/tasks/operators/search-task.js";
import "./scripts/tasks/operators/open-delete-container.js";
import { updateTask } from "./scripts/tasks/operators/update-tasks.js";
import { loadStatus } from "./scripts/tasks/operators/load-status.js";
import { allTasks } from "./scripts/api/API.js";
import "./scripts/tasks/operators/button-events.js";

updateTask(await allTasks());
loadStatus();
