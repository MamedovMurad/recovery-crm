import { FunctionComponent, useEffect, useState } from "react";
import { FormInput, VerticalForm } from "../../../components";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import { getRoles } from "../../../helpers/api/role";
import { Order_types, Period_Order } from "../../../helpers/data";
import { getUserList } from "../../../helpers/api/user";
import { Link } from "react-router-dom";
import { useOrderHook } from "../useOrderHook";


const AddOrderPage: FunctionComponent = () => {
    const { addOrder, loading } = useOrderHook()
    const [engineers, setEngineers] = useState<any>(null)
    function fetchRoles() {
        getUserList('Mühəndis').then((data: any) => {
            setEngineers(data?.data?.data)
        })
    }
    useEffect(() => {
        fetchRoles()
    }, []);
    // const schemaResolver = yupResolver(
    //     yup.object().shape({
    //         name: yup.string().required("Ad əlavə edin!"),
    //         email: yup.string().required("Email əlavə edin!"),
    //         password: yup.string().required("Shifre  əlavə edin!"),
    //         roles: yup.string().required("Rollar  əlavə edin!"),
    //     })
    // );





    return (<div className=" bg-white w-full p-5">
        <div className=" mb-4 flex justify-between items-center">
            <h4 className=" font-semibold text-2xl ">Yeni Sifaris Elave Et</h4>
            <Link to={'/orders/list'}><span className="mgc_exit_line font-semibold text-4xl"></span></Link>
        </div>
        {
            engineers && <VerticalForm<any>
                onSubmit={addOrder}
                // resolver={schemaResolver}
                formClass=" flex flex-col gap-y-4 "
            >
                <h4 className=" text-center p-3 bg-primary bg-opacity-60 text-white">Musteri Melumatlari</h4>
                <FormInput
                    type="text"
                    name="full_name"
                    placeholder="Ad soyad  əlavə edin"
                    className="form-input"
                    labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                    required
                />
                <FormInput
                    type="text"
                    name="id_card"
                    placeholder="Ş/V  əlavə edin"
                    className="form-input"
                    labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                    required
                />

                <FormInput
                    type="text"
                    name="address"
                    placeholder="Unvan  əlavə edin"
                    className="form-input"
                    labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                    required
                />
                <FormInput
                    type="text"
                    name="phone"
                    placeholder="Tel  əlavə edin"
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

                <h4 className=" text-center p-3 bg-primary bg-opacity-60 text-white">Cihaz Melumatlari</h4>
                <FormInput
                    type="text"
                    name="device_brend"
                    placeholder="Brend  əlavə edin"
                    className="form-input"
                    labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                    required
                />

                <FormInput
                    type="text"
                    name="device_model"
                    placeholder="Brendin modelini  əlavə edin"
                    className="form-input"
                    labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                    required
                />
                <FormInput
                    type="text"
                    name="device_serie"
                    placeholder="Brendin seriasini  əlavə edin"
                    className="form-input"
                    labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                    required
                />
                <FormInput
                    type="textarea"
                    name="device_note"
                    placeholder="Brend ucun not  əlavə edin"
                    className="form-input"
                    labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                    required
                />
                <FormInput
                    type="select"
                    name="order_type"
                    placeholder="Muhendis əlavə edin"
                    className="form-input"
                    labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                    required
                >
                    <option value={""}>
                        Sifaris tipi
                    </option>
                    {Order_types?.map((item: any) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </FormInput>

                <h4 className=" text-center p-3 bg-primary bg-opacity-60 text-white">Operator Melumatlari</h4>
                <FormInput
                    type="select"
                    name="engineer_id"
                    placeholder="Muhendis əlavə edin"
                    className="form-input"
                    labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                    required
                >
                    <option value={""}>
                        Muhendis
                    </option>
                    {engineers?.map((item: any) => (

                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </FormInput>






                <FormInput
                    type="text"
                    name="device_view"
                    placeholder="Brendin gorunusunu  əlavə edin"
                    className="form-input"
                    labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                    required
                />

                <FormInput
                    type="select"
                    name="diagnostic_period"
                    placeholder="Diqnostika əlavə edin"
                    className="form-input"
                    labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                    required
                >
                    <option value={""}>
                        Texniki Muayine
                    </option>
                    {Period_Order?.map((item: any) => (
                        <option key={item} value={item}>{item}</option>
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

export default AddOrderPage;;