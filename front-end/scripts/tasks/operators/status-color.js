import { COLORS } from "../status/status-color.js";
/**
 *
 * @param {number} status
 * @returns {{background: string}}
 */
export const statusColor = (status) => COLORS[status];
