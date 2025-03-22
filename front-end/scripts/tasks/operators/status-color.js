const data = {
  1: {
    background: "#46e274",
  },
  2: {
    background: "#5c14ff",
  },
  3: {
    background: "#ff3434",
  },
};
/**
 *
 * @param {number} status
 * @returns {{background: string}}
 */
export const statusColor = (status) => data[status];

console.log(statusColor(2));
