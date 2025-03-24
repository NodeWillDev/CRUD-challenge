import { STATUS } from "../status/status.js";

/**
 * @param {number} value
 * @return {string}
 */
export const statusFormat = (value) => STATUS[value];
