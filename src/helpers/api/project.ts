import { IPrjoectWithCompanyResponse } from "../dto/prjoect";
import { APICore } from "./apiCore";
const api = new APICore();
async function getProjectsByCompanyId(param?: number | string) {
  const baseUrl = "/projects?companyId=" + param;
  const res: { data: IPrjoectWithCompanyResponse } = await api.get(
    `${baseUrl}`,
    ""
  );
  return res;
}

async function getCameraByProjectId(param?: number | string) {
  const baseUrl = `/projects/${param}/cameras`;
  const res: { data: { data: { id: number; name: string }[] } } = await api.get(
    `${baseUrl}`,
    ""
  );
  return res;
}
async function getFilesbyCameraProjectId(
  camera?: number | string,
  project?: string | number,
  page?: number
) {
  const baseUrl = `projects/${project}/cameras/${camera}/files?limit=10&offset=${page}`;
  const res: { data: { data: { entities: { id: number; url: string }[] } } } =
    await api.get(`${baseUrl}`, "");
  return res;
}

async function createProject(param: any) {
  const res: { data: IPrjoectWithCompanyResponse } = await api.create(
    "/projects",
    param
  );
  return res;
}

async function delProject(param: number | string) {
  const res: { data: IPrjoectWithCompanyResponse } = await api.delete(
    "/projects/" + param
  );
  return res;
}
export {
  getProjectsByCompanyId,
  createProject,
  delProject,
  getCameraByProjectId,
  getFilesbyCameraProjectId,
};
