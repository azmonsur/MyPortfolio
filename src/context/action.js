import * as ATS from "./actionTypes";

export const getProjects = () => async (dispatch) => {
  let projects = await fetch("/../../data/projects.json");
  projects = await projects.json();

  dispatch({
    type: ATS.GET_PROJECTS,
    payload: projects,
  });

  return projects;
};

export const getServices = () => async (dispatch) => {
  let services = await fetch("/../../data/services.json");
  services = await services.json();

  dispatch({
    type: ATS.GET_SERVICES,
    payload: services,
  });

  return services;
};

export const getExperience = () => async (dispatch) => {
  let experience = await fetch("/../../data/experience.json");
  experience = await experience.json();

  dispatch({
    type: ATS.GET_EXPERIENCE,
    payload: experience,
  });

  return experience;
};

export const getContacts = () => async (dispatch) => {
  let contacts = await fetch("/../../data/contacts.json");
  contacts = await contacts.json();

  dispatch({
    type: ATS.GET_CONTACTS,
    payload: contacts,
  });

  return contacts;
};

export const toggleLoading = () => (dispatch) => {
  dispatch({
    type: ATS.TOGGLE_LOADING,
  });
};
