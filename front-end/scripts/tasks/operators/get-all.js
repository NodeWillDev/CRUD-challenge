import { API } from "../../api/API.js";
/**
 * @returns {Promise<TaskData[]>}
 */
export const getAll = async () => {
  const data = await fetch(API + "tasks/all", {
    method: "GET",
  });

  return data.status == "200" ? await data.json() : [];
};
