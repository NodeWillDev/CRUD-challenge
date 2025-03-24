export class TaskContext {
  /** @type {number} */
  static id = -1;

  /**
   *
   * @param {number} id
   */
  static setTaskid(id) {
    TaskContext.id = id;
  }

  /**
   *
   * @returns {number}
   */
  static getTaskId() {
    return TaskContext.id;
  }
}
