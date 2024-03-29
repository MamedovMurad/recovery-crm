import { useEffect, useState } from "react";
import {
  getHddList,
  getHddModels,
  removeModel,
} from "../../helpers/api/wholeSale";
import { toast } from "react-toastify";

export const wholeSaleHook = () => {
  const [list, setlist] = useState<any>(null);
  const [loading, setloading] = useState(false);
  const [modelList, setModelList] = useState<
    { id: number; name: string }[] | null
  >(null);

  async function getList() {
    getHddList().then((data) => setlist(data?.data?.data));
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
  useEffect(() => {
    getList();
    getModelList();
  }, []);

  return {
    list,
    modelList,
    getModelList,
    loading,
    deleteModel,
  };
};
