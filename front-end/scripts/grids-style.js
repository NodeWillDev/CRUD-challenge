import { getAll } from "./tasks/operators/get-all.js";

/** @type {HTMLDivElement} */
const element = document.querySelector(".grid-style");

const lines = 48;
for (let i = 0; i < lines; i++) {
  const children = document.createElement("div");
  children.className = "grid-child";
  children.style.setProperty(
    "--delay",
    `${Math.random() * (3 - 0.03) + 0.03}s`
  );
  children.appendChild(document.createElement("span"));
  element.appendChild(children);
}
