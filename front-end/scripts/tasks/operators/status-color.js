const data = {
  1: {
    background: "#46e274",
  },
  2: {
    background: "#fbff00",
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
