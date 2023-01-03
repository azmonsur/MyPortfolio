import * as ATS from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case ATS.GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };

    case ATS.GET_SERVICES:
      return {
        ...state,
        services: action.payload,
      };

    case ATS.GET_EXPERIENCE:
      return {
        ...state,
        experience: action.payload,
      };

    case ATS.GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };

    case ATS.GET_SOCIALS:
      return {
        ...state,
        socials: action.payload,
      };

    case ATS.TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    default:
      return state;
  }
};

export default reducer;
