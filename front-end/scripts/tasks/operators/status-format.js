const data = { 1: "COMPLETED", 2: "PROCEEDING...", 3: "NOT STARTED" };

/**
 * @param {number} status
 * @return {string}
 */
export const statusFormat = (status) => data[status];
