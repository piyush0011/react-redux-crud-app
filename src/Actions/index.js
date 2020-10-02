import { ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT } from "../ActionType";

export const updateProject = (payload) => {
  return {
    type: "UPDATE_PROJECT",
    payload: payload,
  };
};

export const deleteProject = (payload) => {
  return {
    type: DELETE_PROJECT,
    payload: payload,
  };
};

export const addProject = (payload) => {
  return {
    type: ADD_PROJECT,
    payload,
  };
};
