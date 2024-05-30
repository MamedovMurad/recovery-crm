import { useEffect, useState } from "react"
import { getRoles } from "../../helpers/api/role"
import { createOrder, getOrders, removeOrder } from "../../helpers/api/order"
import { toast } from "react-toastify"
import {  useNavigate } from "react-router-dom"


export const useOrderHook = ()=>{
    const navigate = useNavigate();
    const [list, setlist] = useState<any>(null)
    const [loading, setloading] = useState(false)

function getListRole (){
    setloading(true)
    getOrders().then((data)=>{
        setlist(data.data?.data)
        
    }).finally(()=>setloading(false))
}

useEffect(() => {
    getListRole()
}, []);

function addOrder (param:any){
    createOrder(param).then((data)=>{
        window.open(data?.data+'', '_blank');
        navigate("/orders/list");
        toast.success("Sifaris elave edildi !")

        
    }).finally(()=>setloading(false))
}
function deleteorder(id:string|number){
    removeOrder(id).then((data)=>{
        toast.success('uqurla silindi!')
        getListRole()
    })
}
return{
    list,
    loading,
    addOrder,
    deleteorder
}
}

