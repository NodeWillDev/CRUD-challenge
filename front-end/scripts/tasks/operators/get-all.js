import { API } from "../../api/API.js";

export const getAll = async () => {
  const data = await fetch(API + "tasks/all", {
    method: "GET",
  });

  return await data.json();
};
