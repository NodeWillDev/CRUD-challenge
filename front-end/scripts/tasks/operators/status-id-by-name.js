import { STATUS } from "../status/status-tag.js";
/**
 *
 * @param {string} data
 */
export const getIdStatusByName = (data) =>
  Object.entries(STATUS).find(([_, value]) =>
    value.toLowerCase().includes(data.toLowerCase())
  )?.[0] ?? null;
