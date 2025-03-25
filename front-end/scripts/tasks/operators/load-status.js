import { STATUS } from "../status/status-tag.js";
import { statusColor } from "./status-color.js";

export const loadStatus = () => {
  document.querySelectorAll(".load-status").forEach((element) => {
    Object.entries(STATUS).forEach((data) => {
      const option = document.createElement("option");
      option.value = data[0];
      option.innerHTML = data[1];
      option.style.setProperty(
        "--status-color",
        statusColor(data[0]).background
      );
      element.appendChild(option);
    });
  });
};
