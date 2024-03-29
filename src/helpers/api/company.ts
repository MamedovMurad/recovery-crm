import { ICompanyResponse } from "../dto/company";
import { APICore } from "./apiCore";
const api = new APICore();
async function getCompanyList() {
  const baseUrl = "/companies";
  const res: { data: ICompanyResponse } = await api.get(`${baseUrl}`, "");
  return res;
}
async function createCompany(param: any) {
  const res: { data: ICompanyResponse } = await api.create("/companies", param);
  return res;
}
async function updateCompany(param: any) {
  const res: { data: ICompanyResponse } = await api.update(
    "/companies/" + param.id,
    param
  );
  return res;
}

async function delCompany(id: number | string) {
  const res = await api.delete("/companies/" + id);
}
export { getCompanyList, createCompany, delCompany, updateCompany };
