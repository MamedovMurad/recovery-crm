import { useEffect, useState } from "react";
import {
  createPcb,
  getHddList,
  getHddModels,
  getPcbs,
  removeModel,
  removePcb,
} from "../../helpers/api/wholeSale";
import { toast } from "react-toastify";

export const wholeSaleHook = () => {
  const [list, setlist] = useState<any>(null);
  const [pcbs, setpcbs] = useState<any>(null);
  const [loading, setloading] = useState(false);
  const [modelList, setModelList] = useState<
    { id: number; name: string }[] | null
  >(null);

  async function getList() {
    getHddList().then((data) => setlist(data?.data?.data));
  }
  async function getPcbList() {
    setloading(true)
    getPcbs().then((data) => setpcbs(data?.data?.data)).finally(()=>{
      setloading(false)
    });
  }
  async function getModelList() {
    setloading(true);
    getHddModels()
      .then((data) => setModelList(data?.data?.data))
      .finally(() => {
        setloading(false);
      });
  }
  async function deleteModel(id: number) {
    setloading(true);
    removeModel(id)
      .then((data) => {
        toast.success("Model Uğurla silindi! ");
        getModelList();
      })
      .finally(() => {
        setloading(false);
      });
  }

  async function deletePcb(id: number) {
    setloading(true);
    removePcb(id)
      .then((data) => {
        toast.success("PCB Uğurla silindi! ");
        getPcbList();
      })
      .finally(() => {
        setloading(false);
      });
  }



async function addPcb(params:{id_number:string, hdd_name:string, pcb_number:string}) {
  console.log('sdfasdfas');
  
  setloading(true)
  createPcb(params).then((data)=>{
    toast.success("PCB Uğurla Elave edildi")
    getPcbList()
  }).finally(()=>{
    setloading(false)
  })
}


  useEffect(() => {
    getList();
    getModelList();
    getPcbList()
  }, []);

  return {
    list,
    modelList,
    getModelList,
    loading,
    deleteModel,
    pcbs,
    getPcbList,
    addPcb,
    deletePcb
  };
};
