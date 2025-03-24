import { STATUS } from "../status/status-tag.js";

/**
 * @param {number} value
 * @return {string}
 */
export const statusFormat = (value) => STATUS[value];
