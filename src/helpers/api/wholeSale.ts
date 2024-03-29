import { ICameraForm, ICameraResponse } from "../dto/camera";
import { APICore } from "./apiCore";

const api = new APICore();

async function getHddList() {
  const res: { data: any } = await api.get("/hdd-product", "");
  return res;
}
async function getHddModels() {
  const res: { data: { data: { id: number; name: string }[] } } = await api.get(
    "/hard-disk",
    ""
  );
  return res;
}

async function createModel(param: { name: string }) {
  const res: { data: any } = await api.create("/hard-disk", param);
  return res;
}
async function updateCamera(param: ICameraForm, id: number) {
  const res: { data: ICameraResponse } = await api.update(
    "/cameras/" + id,
    param
  );
  return res;
}

async function removeModel(param: number) {
  const res = await api.delete("/hard-disk/" + param);
  return res;
}

async function createHDDProduct(params: any) {
  const res: { data: any } = await api.create("/excel-import", params);
  return res;
}
async function takePhoto(id: number | string) {
  const res: { data: ICameraResponse } = await api.create(
    "/cameras/" + id + "/photo",
    id
  );
  return res;
}
export {
  getHddList,
  createModel,
  removeModel,
  takePhoto,
  updateCamera,
  getHddModels,
  createHDDProduct,
};
