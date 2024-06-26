import { APICore } from "./apiCore";

const api = new APICore();

// account
function login(params: { email: string; password: string }) {
  const baseUrl = "/login";
  return api.create(`${baseUrl}`, {
    email: params.email,
    password: params.password,
  });
}

function loginAdmin(params: { email: string; password: string }) {
  const baseUrl = "/login";
  return api.create(`${baseUrl}`, {
    email: params.email,
    password: params.password,
  });
}

function logout() {
  const baseUrl = "/logout/";
  return api.create(`${baseUrl}`, {});
}

function signup(params: { fullname: string; email: string; password: string }) {
  const baseUrl = "/register/";
  return api.create(`${baseUrl}`, params);
}

function forgotPassword(params: { username: string }) {
  const baseUrl = "/forgot-password/";
  return api.create(`${baseUrl}`, params);
}

async function getMe() {
  const res: { data: any } = await api.get("/users/me?full=true", "");
  return res;
}
export { login, logout, signup, forgotPassword, getMe , loginAdmin};
