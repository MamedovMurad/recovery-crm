
import { APICore } from "./apiCore";

const api = new APICore();

async function getRoles() {
    const res: { data: any } = await api.get("/role", "");
    return res;
  }

  export {
    getRoles
  }