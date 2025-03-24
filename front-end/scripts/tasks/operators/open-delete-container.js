document
  .querySelector(".delete-container .contents .buttons button:nth-child(1)")
  .addEventListener("click", (/** @type {MouseEvent}*/ event) =>
    openDeleteContainer()
  );

document
  .querySelector(".delete-container .contents .buttons button:nth-child(2)")
  .addEventListener("click", (/** @type {MouseEvent}*/ event) =>
    openDeleteContainer()
  );
export const openDeleteContainer = (id) => {
  document.querySelector(".delete-container").classList.toggle("active");
};
