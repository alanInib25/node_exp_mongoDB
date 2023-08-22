//controla error de consulta a BD;
export const handleHttpError = (res, message = "Algo pasó", code = 403) => {
  res.status(code);
  res.send({ error: message });
};

export const defaultMessages = {
  user: {
    get: "ERROR_GET_USER",
    getAll: "ERROR_GET_USERS",
    update: "ERROR_UPDATE_USER",
    updatePassword: "ERROR_UPDATE_PASSWORD_USER",
    deleteAll: "ERROR_DELETE_USERS",
    delete: "ERROR_DELETE_USER",
    add: "ERROR_ADD_USER",
    login: "ERROR_USER_LOGIN"
  },
};
