import { FunctionComponent } from "react";
import { FormInput, VerticalForm } from "../../../components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { wholeSaleHook } from "../customHook";
import { createHddProductManual } from "../../../helpers/api/wholeSale";
import { toast } from "react-toastify";
interface ManualAddWholeSaleeProps {
CB:any
}

const ManualAddWholeSalee: FunctionComponent<ManualAddWholeSaleeProps> = ({CB}) => {


    function onSubmit(param: any) {
      CB(param)
    }
    const schemaResolver = yupResolver(
        yup.object().shape({
            hdd_name: yup.string().required("hdd_name əlavə edin!"),
            size: yup.string().required("size əlavə edin!"),
            fw: yup.string().required("fw  əlavə edin!"),
            model: yup.string().required("model  əlavə edin!"),
            family: yup.string().required("family  əlavə edin!"),
            date: yup.string().required("date  əlavə edin!"),
            heads: yup.string().required("heads  əlavə edin!"),
            hard_disk_id:yup.string().required("hard_disk_id  əlavə edin!"),
        })
    );
    const{modelList}=wholeSaleHook()

    return (<div className=" bg-white p-5 rounded-lg w-[550px]">
        <h4 className=" font-semibold text-xl my-4">Yeni Hdd yarat </h4>
        <VerticalForm<any>
            onSubmit={onSubmit}
            resolver={schemaResolver}
            formClass=" flex flex-col gap-y-4 "
        >
            <FormInput
                type="text"
                name="hdd_name"
                placeholder="Ad  əlavə edin"
                className="form-input"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
            />
            <FormInput
                type="text"
                name="size"
                placeholder="Size əlavə edin"
                className="form-input"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
            />
            <FormInput
                type="text"
                name="fw"
                placeholder="fw  əlavə edin"
                className="form-input"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
            />
            <FormInput
                type="text"
                name="model"
                placeholder="model  əlavə edin"
                className="form-input"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
            />
            <FormInput
                type="text"
                name="family"
                placeholder="family  əlavə edin"
                className="form-input"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
            />
            <FormInput
                type="text"
                name="date"
                placeholder="date  əlavə edin"
                className="form-input"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
            />
            <FormInput
                type="text"
                name="heads"
                placeholder="heads  əlavə edin"
                className="form-input"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
            />
            <FormInput
                type="select"
                name="hard_disk_id"
                placeholder="Rollar disk əlavə edin"
                className="form-input"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"

            >

                {modelList?.map((item: any) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
            </FormInput>





            <div className="flex justify-center mt-4">
                <button className="btn border-white bg-primary text-white mb-3  hover:bg-primary hover:text-white w-full">
                    <span className="mgc_add_fill mr-2"></span>
                    Elave et
                </button>
            </div>
        </VerticalForm>
    </div>);
}

export default ManualAddWholeSalee;