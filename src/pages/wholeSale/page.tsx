import React, { useEffect, useState } from "react";
import { HoverableRows } from "../tables/BasicTables";
import { ModalLayout } from "../../components/HeadlessUI";
import AddWholeSale from "./_components/add-whole-sale";
import { FormInput, VerticalForm } from "../../components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { wholeSaleHook } from "./customHook";
import { APICore } from "../../helpers/api/apiCore";
import { Link } from "react-router-dom";
import ManualAddWholeSalee from "./_components/manual-add-whole-sale";

interface Props {}

function onSubmit(params?: any) {}
const schemaResolver = yupResolver(
  yup.object().shape({
    name: yup.string().required("Hard disk əlavə edin!"),
  })
);
const WholeSale: React.FC<Props> = ({}) => {
  const[isOpen, setisOpen]=useState(false)
  const api = new APICore();
  const { list, addHddProductManual,deleteHdd, modelList } = wholeSaleHook();
  console.log(list, "list");

  return (
    <div>
      <div className=" flex justify-end items-center">
      <Link
      onClick={()=>setisOpen(true)}
          to={"#"}
          className="btn border-primary text-primary mb-3  hover:bg-primary hover:text-white mr-7"
        >
          <span className="mgc_add_fill"></span>
          Yeni Hdd yarat
        </Link>
        <Link
          to={"/wholesale/hdd/create"}
          className="btn border-primary text-primary mb-3  hover:bg-primary hover:text-white"
        >
          <span className="mgc_add_fill"></span>
        </Link>
      </div>
      <div className="flex items-center gap-2 flex-wrap my-3 ">
         {modelList?.map((item)=>(
          <div className="p-2 bg-blue-400 text-white font-semibold rounded cursor-pointer hover:bg-blue-500 transition-colors ">{item.name} (140 ədəd)</div>
         ))}
      </div>
      <HoverableRows
        columns={[ "HDD Name", "Size", "FW", "Model", "Family", "Heads","HDD-Number", ]}
        list={list?.map((item: any) => ({ ...item }))}
        names={[ "hdd_name", "size", "fw", "model", "family", "heads", "Number",]}
        delete={deleteHdd}
      />

            <ModalLayout
        showModal={isOpen}
        children={<ManualAddWholeSalee  CB={addHddProductManual} />}
       
        toggleModal={() => setisOpen(!isOpen)}
        
      />
    </div>
  );
};

export default WholeSale;
