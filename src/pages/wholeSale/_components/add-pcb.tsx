import { FunctionComponent } from "react";
import { FormInput, VerticalForm } from "../../../components";
import { wholeSaleHook } from "../customHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { createPcb } from "../../../helpers/api/wholeSale";
interface AddPcbProps {
callBack:(param:any)=>void
}

const AddPcb: FunctionComponent<AddPcbProps> = ({callBack}) => {
  
    const schemaResolver = yupResolver(
        yup.object().shape({
          id_number: yup.string().required("Hard disk əlavə edin!"),
          hdd_name :yup.string().required("Hard disk əlavə edin!"),
          pcb_number:yup.string().required("Hard disk əlavə edin!"),
        })
      );

   



    return (<div className=" bg-white w-96 p-5">
        <div className=" mb-4">
            <h4 className=" font-semibold text-2xl ">Yeni PCB Elave Et</h4>
        </div>
     <VerticalForm<any>
            onSubmit={callBack}
            resolver={schemaResolver}
            formClass=" flex flex-col gap-y-4 "
          >
            <FormInput
              type="text"
              name="id_number"
              placeholder="id number disk əlavə edin"
              className="form-input"
              labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
              required
            />
                   <FormInput
              type="text"
              name="pcb_number"
              placeholder="pcb  number disk əlavə edin"
              className="form-input"
              labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
              required
            />
              <FormInput
              type="text"
              name="hdd_name"
              placeholder="hdd  name disk əlavə edin"
              className="form-input"
              labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
              required
            />


            <div className="flex justify-center mt-4">
              <button className="btn border-white bg-primary text-white mb-3  hover:bg-primary hover:text-white w-full">
                <span className="mgc_add_fill mr-2"></span>
                Elave et
              </button>
            </div>
          </VerticalForm>
    </div>);
}

export default AddPcb;