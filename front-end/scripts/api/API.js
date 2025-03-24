const API = "http://127.0.0.1:8000/api/";

/**
 * @param {number} id
 * @returns {Promise<TaskData>}
 */
export const getSpecify = async (id) => {
  const data = await fetch(API + `tasks/get/${id}`, {
    method: "GET",
  });
  return data.status == 200 ? await data.json() : [];
};
/**
 *
 * @param {number} id
 * @returns {TaskData}
 */
export const deleteTask = async (id) => {
  const data = await fetch(API + `tasks/delete/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  return data.status == 200 ? await data.json() : [];
};

/**
 * @param {{id: number} & Partial<Omit<TaskData, 'created_at'|'id'>>} task
 * @returns {Promise<TaskData>}
 */
export const updateTask = async (task) => {
  const data = await fetch(API + `tasks/update/${task.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return data.status == 200 ? await data.json() : [];
};

/**
 *
 * @param {Omit<TaskData, 'created_at'|'id'} task
 * @returns {Promise<TaskData>}
 */
export const createTask = async (task) => {
  const data = await fetch(API + `tasks/update/${task.id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: task,
  });
  return data.status == 200 ? await data.json() : [];
};
/**
 *
 * @returns {Promise<TaskData[]>}
 */
export const allTasks = async () => {
  const data = await fetch(API + `tasks/all`, {
    method: "GET",
  });
  return data.status == 200 ? await data.json() : [];
};

// console.log
//   await updateTask({
//     id: 1,
//     description: "2",
//     status: 2,
//     title: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//   })
// );
