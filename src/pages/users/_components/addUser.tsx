import { FunctionComponent, useEffect, useState } from "react";
import { FormInput, VerticalForm } from "../../../components";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { createPcb } from "../../../helpers/api/wholeSale";
import { getUserList } from "../../../helpers/api/user";
import { getRoles } from "../../../helpers/api/role";
interface AddPcbProps {
callBack:(param:any)=>void
}

const AddUser: FunctionComponent<AddPcbProps> = ({callBack}) => {
  const [roles, setRoles]= useState<any>(null)
  function fetchRoles (){
    getRoles().then((data:any)=>{
     setRoles(data?.data?.data)
    })
  }
  useEffect(() => {
    fetchRoles()
  }, []);
    const schemaResolver = yupResolver(
        yup.object().shape({
          name: yup.string().required("Ad əlavə edin!"),
          email :yup.string().required("Email əlavə edin!"),
          password:yup.string().required("Shifre  əlavə edin!"),
          role:yup.string().required("Rollar  əlavə edin!"),
        })
      );

   



    return (<div className=" bg-white w-96 p-5">
        <div className=" mb-4">
            <h4 className=" font-semibold text-2xl ">Yeni User Elave Et</h4>
        </div>
    {
        roles&& <VerticalForm<any>
        onSubmit={callBack}
        resolver={schemaResolver}
        formClass=" flex flex-col gap-y-4 "
      >
        <FormInput
          type="text"
          name="name"
          placeholder="Ad  əlavə edin"
          className="form-input"
          labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
          required
        />
               <FormInput
          type="text"
          name="email"
          placeholder="Email əlavə edin"
          className="form-input"
          labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
          required
        />
          <FormInput
          type="password"
          name="password"
          placeholder="Shifre  əlavə edin"
          className="form-input"
          labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
          required
        />
      <FormInput
            type="select"
            name="role"
            placeholder="Rollar disk əlavə edin"
            className="form-input"
            labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
            
          >
           
           {roles?.map((item:any)=>(
            <option key={ item.name} value={item.name}>{item.name}</option>
           ))}
          </FormInput>
        
            



        <div className="flex justify-center mt-4">
          <button className="btn border-white bg-primary text-white mb-3  hover:bg-primary hover:text-white w-full">
            <span className="mgc_add_fill mr-2"></span>
            Elave et
          </button>
        </div>
      </VerticalForm>
    }
    </div>);
}

export default AddUser;