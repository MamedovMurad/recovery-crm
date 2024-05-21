import clsx from "clsx";
import { FunctionComponent, useEffect, useState } from "react";
import Comments from "./comments";
import { setOrderKey, showOrder } from "../../../helpers/api/order";
import { FormInput, VerticalForm } from "../../../components";

interface EditOderProps {
    id?: number | string
}

const EditOrder: FunctionComponent<EditOderProps> = ({ id }) => {
    const [detail, setdetail] = useState<any>(null)
    const [keyVal, setKeyVal] = useState([{id:0,"key":'',"value":''}])
    useEffect(() => {
        id && showOrder(id).then((data) => {
            setdetail(data)

            if (data?.data.key_values.length>0) {
                return setKeyVal(data?.data.key_values)
            }
     
            
        })
    }, [id]);

    function onSubmit(param:any){
        setOrderKey({order_id:id,engineer_note:param.device_note,key_values:keyVal })

    }
    function addItem(){
        setKeyVal([...keyVal,{id:keyVal.length,"key":'',"value":''}])
    }
    function removeItem(id:number){
        setKeyVal(keyVal.filter(item=>item.id!==id))
    }
    function editItem (id:number,arg:string, param:string){
        setKeyVal(keyVal.map(item=>{
            if (id==item.id) {
             return    {...item,[arg]:param}
            }
            return item
        }))
    }

    console.log(keyVal,'keyval');
    
    return (
        <div>
            <div className="flex gap-x-10">
                <h4 className=" text-white font-semibold my-3 bg-primary bg-opacity-50 p-2 rounded">Sifaris Novu</h4>
                <h4 className=" text-white font-semibold my-3 bg-primary bg-opacity-50  p-2 rounded">Nº{detail?.data?.id} { new Date(detail?.data?.created_at).toDateString()}</h4>
            </div>
            <div className="flex gap-x-10 mt-2">
                <h4 className=" text-white font-semibold my-3 bg-primary bg-opacity-50 p-2 rounded w-full">Muhendis</h4>
                <h4 className=" text-white font-semibold my-3 bg-primary bg-opacity-50  p-2 rounded w-full">{detail.data?.engineer}</h4>
            </div>

            <div>
            <VerticalForm<any>
                onSubmit={onSubmit

                }
                // resolver={schemaResolver}
                formClass=" flex flex-col gap-y-4 "
            >
                       <FormInput
                    type="textarea"
                    name="device_note"
                    placeholder="Mezmun"
                    className="form-input"
                    labelClassName="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                    required
                    value={detail.data.engineer_note}
                />
              {
                keyVal.map(item=>(
                    <div className=" flex gap-x-3">
                                    <input className=" w-full" name="key[]" onChange={(e)=>editItem(item.id,'key',e.target.value)} value={item['key']} type="text" placeholder=" Mallarin ve xidmetlerin adi" />
                                    <input className=" w-full" name="val[]" value={item['value']} onChange={(e)=>editItem(item.id,'value',e.target.value)} type="text" placeholder=" Qiymet" />
                                    <button type="button" onClick={()=>removeItem(item.id)} className=" bg-danger bg-opacity-50 text-white p-2 rounded px-5">sil</button>
                    </div>
                )) }

<div>
                    <button type="button" onClick={addItem} className=" bg-success bg-opacity-50 text-white p-2 w-20">Artir</button>
                </div>

                <button className=" p-2 bg-primary text-white">Elave et</button>
            </VerticalForm>
            </div>
        </div>
    )
}

export default EditOrder;