import { IUserForm, IUserResponse } from "../dto/user";
import { APICore } from "./apiCore";
const api = new APICore();

async function login(params: { email: string; password: string }) {
  const baseUrl = "/auth/login";
  const res = await api.create(`${baseUrl}`, params);
  console.log(res.data.data.token);

  api.setLoggedInUser(res.data.data.token);
}

async function getMe() {
  const baseUrl = "/users/me?full=true";
  const res = await api.get(`${baseUrl}`, "");
  return res;
}

async function getUserList() {
  const baseUrl = "/users";
  const res: { data: IUserResponse } = await api.get(`${baseUrl}`, "");
  return res;
}

async function createUser(param: any) {
  const res: { data: IUserResponse } = await api.create("/users", param);
  return res;
}

async function deleteUser(id: number | string) {
  api.delete("/users/" + id);
}

export { login as apiLogin, getMe, getUserList, createUser, deleteUser };
