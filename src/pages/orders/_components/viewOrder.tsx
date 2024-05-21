import { FunctionComponent, useEffect, useState } from "react";
import { showOrder } from "../../../helpers/api/order";
import { FormInput } from "../../../components";

interface ViewOrderProps {
    id?: number | string
}

const ViewOrder: FunctionComponent<ViewOrderProps> = ({ id }) => {
    const [detail, setdetail] = useState<any>(null)
    console.log(detail);

    useEffect(() => {
        id && showOrder(id).then((data) => {
            setdetail(data)
        })
    }, [id]);
    return (<div>
        <div className="flex gap-x-10">
            <h4 className=" text-white font-semibold my-3 bg-primary bg-opacity-50 p-2 rounded">Sifaris Novu</h4>
            <h4 className=" text-white font-semibold my-3 bg-primary bg-opacity-50  p-2 rounded">Nº {detail?.data?.id} { new Date(detail?.data?.created_at).toDateString()}</h4>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-2">
            <FormInput

                disabled
                type="text"
                name="device_view"
                placeholder="Sifaris novu"
                className="form-input bg-slate-500 bg-opacity-20"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
                value={detail?.data?.order_type}
            />
        </div>
        <h4 className=" text-white font-semibold my-3 bg-primary bg-opacity-50 p-2 rounded">Musteri Melumatlari</h4>

        <div className=" flex flex-col  gap-y-3">
            <FormInput
                label="Ad Soyad"
                disabled
                type="text"
                name="device_view"
                placeholder="Ad Soyad"
                className="form-input bg-slate-500 bg-opacity-20"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
                value={detail?.data?.customer}
            />
            <FormInput
                label="S/V FIN"
                disabled
                type="text"
                name="device_view"
                placeholder="S/V FIN"
                className="form-input bg-slate-500 bg-opacity-20"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
                value={detail?.data?.id_card}
            />
            <FormInput
                label="Telefon"
                disabled
                type="text"
                name="device_view"
                placeholder="Telefon"
                className="form-input bg-slate-500 bg-opacity-20"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
                value={detail?.data?.phone}
            />
            <FormInput
                label="Unvan"
                disabled
                type="text"
                name="device_view"
                placeholder="Telefon"
                className="form-input bg-slate-500 bg-opacity-20"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
                value={detail?.data?.address}
            />
        </div>
        <h4 className=" text-white font-semibold my-3 bg-primary bg-opacity-50 p-2 rounded">Cihaz Melumatlari</h4>

        <div className="flex flex-col gap-y-2">
            <FormInput
                label="Cihaz Brendi"
                disabled
                type="text"
                name="device_view"
                placeholder="Ad Soyad"
                className="form-input bg-slate-500 bg-opacity-20"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
                value={detail?.data?.device}
            />
            <FormInput
                label="Cihaz Modeli"
                disabled
                type="text"
                name="device_view"
                placeholder="Ad Soyad"
                className="form-input bg-slate-500 bg-opacity-20"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
                value={detail?.data?.device_model}
            />
            <FormInput
                label="Seriya Nomresi"
                disabled
                type="text"
                name="device_view"
                placeholder="Ad Soyad"
                className="form-input bg-slate-500 bg-opacity-20"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
                value={detail?.data?.device_serie}
            />
            <FormInput
                label="Cihaz Gorunusu"
                disabled
                type="text"
                name="device_view"
                placeholder="Ad Soyad"
                className="form-input bg-slate-500 bg-opacity-20"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
                value={detail?.data?.device_view}
            />

            <FormInput
                label="Qeyd"
                disabled
                type="textarea"
                name="device_view"
                placeholder="Ad Soyad"
                className="form-input bg-slate-500 bg-opacity-20"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
                value={detail?.data?.device_note}
            />
        </div>
        <h4 className=" text-white font-semibold my-3 bg-primary bg-opacity-50 p-2 rounded">operator Melumatlari</h4>

        <div className="flex flex-col gap-y-2">
            <FormInput
                label="Operator"
                disabled
                type="text"
                name="device_view"
                placeholder="Ad Soyad"
                className="form-input bg-slate-500 bg-opacity-20"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
                value={detail?.data?.operator}
            />
            <FormInput
                label="Muhendis"
                disabled
                type="text"
                name="device_view"
                placeholder="Ad Soyad"
                className="form-input bg-slate-500 bg-opacity-20"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
                value={detail?.data?.engineer}
            />
{/* 
            <FormInput
                label="Texniki Muayine"
                disabled
                type="text"
                name="device_view"
                placeholder="Ad Soyad"
                className="form-input bg-slate-500 bg-opacity-20"
                labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                required
                value={detail?.data?.data?.engineer}
            /> */}

        </div>

        <div className="flex justify-end ">
            <a href={detail?.data?.pdf} target="_blank" className="bg-primary flex gap-x-1 items-center text-white font-semibold px-4 py-1 rounded">
                <i className="mgc_print_line"></i> Çap et
            </a>
        </div>
    </div>);
}

export default ViewOrder;