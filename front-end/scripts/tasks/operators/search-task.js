import { getAll } from "./get-all.js";

/** @type {HTMLInputElement} */
const input = document.querySelector(".search-container input");

/** @type {HTMLDivElement} */
const container = document.querySelector(".tasks-container");

const data = await getAll();

input.addEventListener("keydown", (event) => {});
