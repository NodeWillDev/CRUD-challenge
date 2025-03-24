import { STATUS } from "../status/status-tag.js";
import { statusColor } from "./status-color.js";

export const loadStatus = () => {
  Object.entries(STATUS).forEach((data) => {
    const option = document.createElement("option");
    option.value = data[0];
    option.innerHTML = data[1];
    option.style.setProperty("--status-color", statusColor(data[0]).background);
    document.getElementById("status-id").appendChild(option);
  });
};

console.log(loadStatus());
