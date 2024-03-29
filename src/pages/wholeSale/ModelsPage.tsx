import React, { useEffect, useState } from "react";
import { HoverableRows } from "../tables/BasicTables";
import { ModalLayout } from "../../components/HeadlessUI";
import AddWholeSale from "./_components/add-whole-sale";
import { FormInput, VerticalForm } from "../../components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { wholeSaleHook } from "./customHook";
import { APICore } from "../../helpers/api/apiCore";
import { createModel } from "../../helpers/api/wholeSale";
import { BasicSpinner } from "../ui/Spinners";
import { toast } from "react-toastify";

interface Props {}

const schemaResolver = yupResolver(
  yup.object().shape({
    name: yup.string().required("Hard disk əlavə edin!"),
  })
);
const ModelsPage: React.FC<Props> = ({}) => {
  const api = new APICore();
  const { modelList, getModelList, loading, deleteModel } = wholeSaleHook();

  function onSubmit(params?: any) {
    createModel(params).then((data) => {
      toast.success("Uğurlu əməliyyat!");
      getModelList();
    });
  }

  return (
    <div>
      {loading && (
        <div className=" w-2/3 h-1/2 flex justify-center items-center fixed bg-white bg-opacity-30">
          <BasicSpinner />
        </div>
      )}
      <>
        <div className=" flex justify-end">
          <VerticalForm<any>
            onSubmit={onSubmit}
            resolver={schemaResolver}
            formClass=" flex gap-2"
          >
            <FormInput
              type="text"
              name="name"
              placeholder="Hard disk əlavə edin"
              className="form-input"
              labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
              required
            />

            <div className="flex justify-center mb-6">
              <button className="btn border-primary text-primary mb-3  hover:bg-primary hover:text-white">
                <span className="mgc_add_fill"></span>
              </button>
            </div>
          </VerticalForm>
        </div>
        <HoverableRows
          columns={["id", "Model"]}
          list={modelList?.map((item) => ({ id: item.id, name: item.name }))}
          names={["id", "name"]}
          delete={deleteModel}
        />
      </>

      {/*       <ModalLayout
        showModal={isOpen}
        children={<AddWholeSale />}
        toggleModal={() => setisOpen(!isOpen)}
      /> */}
    </div>
  );
};

export default ModelsPage;
