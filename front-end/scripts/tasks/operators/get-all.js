import { API } from "../../api/API.js";
/**
 * @typedef {Object} TaskData
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {int} status
 * @property {string} created_at
 *
 * @returns {Promise<TaskData[]>}
 */
export const getAll = async () => {
  const data = await fetch(API + "tasks/all", {
    method: "GET",
  });

  return await data.json();
};
