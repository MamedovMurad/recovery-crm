import React, { useEffect, useState } from "react";
import { HoverableRows } from "../tables/BasicTables";
import { ModalLayout } from "../../components/HeadlessUI";
import { FormInput, VerticalForm } from "../../components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { APICore } from "../../helpers/api/apiCore";
import { createModel } from "../../helpers/api/wholeSale";
import { BasicSpinner } from "../ui/Spinners";
import { toast } from "react-toastify";

import AddRole from "./_components/addRole";
import { useRoleHook } from "./useRoleHook";

interface Props {}

const schemaResolver = yupResolver(
  yup.object().shape({
    name: yup.string().required("Hard disk əlavə edin!"),
  })
);
const RolesPage: React.FC<Props> = ({}) => {

const [isopen, setisopen]=useState(false)
  const { list , loading, } = useRoleHook();

//   function onSubmit(params?: any) {
//     createModel(params).then((data) => {
//       toast.success("Uğurlu əməliyyat!");
//       getPcbList();
//     });
//   }

  return (
    <div>
      {loading && (
        <div className=" w-2/3 h-1/2 flex justify-center items-center fixed bg-white bg-opacity-30">
          <BasicSpinner />
        </div>
      )}
      <>
        <div className=" flex justify-end">


      
         
        </div>
        <HoverableRows
          columns={["id", "Title", 'Gurad Name']}
          list={list}
          names={["id", "name", "guard_name"]}
        
        />
      </>


    </div>
  );
};

export default RolesPage;
