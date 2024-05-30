
import { APICore } from "./apiCore";

const api = new APICore();

async function getOrders() {
    const res: { data: any } = await api.get("/order","");
    return res;
  }
  async function getComments(id:string) {
    const res: { data: any } = await api.get("/comments/"+id,"");
    return res;
  }
  async function createOrder(param: any) {
    const res: { data: any } = await api.create("/order", param);
    return res;
  }

  async function createComment(param: any) {
    const res: { data: any } = await api.create("/comment", param);
    return res;
  }
  async function showOrder(id:number|string){
    const res: { data: any } = await api.get("/order/"+id,"");
    return res;
  }
  async function setOrderKey(param:{order_id:string,engineer_note:string, key_values:{key:string, value:string}[]  }&any){
    const res: { data: any } = await api.create("/key-value", param);
    return res;
  }
  async function removeOrder(id:number|string){
    const res = await api.delete(
      "/order/" + id
    );
    return res;
  }
  export {
    getOrders,
    createOrder,
    getComments,
    createComment,
    showOrder,
    setOrderKey,
    removeOrder
  }