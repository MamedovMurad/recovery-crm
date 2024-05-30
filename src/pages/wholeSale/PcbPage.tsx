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
import AddPcb from "./_components/add-pcb";

interface Props {}

const schemaResolver = yupResolver(
  yup.object().shape({
    name: yup.string().required("Hard disk əlavə edin!"),
  })
);
const PcbPage: React.FC<Props> = ({}) => {

const [isopen, setisopen]=useState(false)
  const { pcbs,getPcbList , loading, deletePcb,addPcb } = wholeSaleHook();

  function onSubmit(params?: any) {
    createModel(params).then((data) => {
      toast.success("Uğurlu əməliyyat!");
      getPcbList();
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


            <div className="flex justify-center mb-6">
              <button onClick={()=>setisopen(true)} className="btn border-primary text-primary mb-3  hover:bg-primary hover:text-white">
                <span className="mgc_add_fill"></span>
              </button>
            </div>
         
        </div>
        <HoverableRows
          columns={[ "Id Number", 'Pcb Number',"Hdd Name"]}
          list={pcbs}
          names={[ "id_number", "pcb_number","hdd_name"]}
          delete={deletePcb}
        />
      </>

            <ModalLayout
        showModal={isopen}
        children={<AddPcb callBack ={addPcb}/>}
        toggleModal={() => setisopen(!isopen)}
      />
    </div>
  );
};

export default PcbPage;
