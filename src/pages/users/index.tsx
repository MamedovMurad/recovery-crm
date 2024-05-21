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
import { useUsersHook } from "./usUsersHook";
import AddUser from "./_components/addUser";



interface Props {}

const schemaResolver = yupResolver(
  yup.object().shape({
    name: yup.string().required("Hard disk əlavə edin!"),
  })
);
const UsersPage: React.FC<Props> = ({}) => {

const [isopen, setisopen]=useState(false)
  const { list , loading,removeUser, addUser } = useUsersHook();

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
        <div className="flex justify-center mb-6">
              <button onClick={()=>setisopen(true)} className="btn border-primary text-primary mb-3  hover:bg-primary hover:text-white">
                <span className="mgc_add_fill"></span>
              </button>
            </div>

      
         
        </div>
        <HoverableRows
          columns={["id", "Name", 'Vezife','Email']}
          list={list}
          names={["id", "name",'role', "email"]}
            delete={removeUser}
        />
                  <ModalLayout
        showModal={isopen}
        children={<AddUser callBack ={addUser}/>}
        toggleModal={() => setisopen(!isopen)}
      />
      </>


    </div>
  );
};

export default UsersPage;
