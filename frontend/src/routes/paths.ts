const path = (root: string, sublink: string) => `${root}${sublink}`;

// ----------------------------------------------------------------------

const PATH_MAIN = "/";
const ROOTS_USER = "/user";
const ROOTS_QUESTION = "/question";

// ----------------------------------------------------------------------

export const PATH_USER = {
  root: ROOTS_USER,
  login: path(ROOTS_USER, "/login"),
  signup: path(ROOTS_USER, "/signup"),
};
export const PATH_QUESTION = {
  add: path(ROOTS_QUESTION, "/add"),
};

export default PATH_MAIN;
