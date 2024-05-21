import { useEffect, useState } from "react"
import { getRoles } from "../../helpers/api/role"
import { createUser, deleteUser, getUserList } from "../../helpers/api/user"
import { toast } from "react-toastify"

export const useUsersHook = ()=>{

    const [list, setlist] = useState<any>(null)
    const [loading, setloading] = useState(false)

function getListUsers (){
    setloading(true)
    getUserList().then((data)=>{
        setlist(data.data?.data)
        
    }).finally(()=>setloading(false))
}

function removeUser (id:number){
    console.log(id);
    
    setloading(true)
    deleteUser(id).then((data)=>{
        toast.success("Istifadeci uqurla silindi")
        getListUsers()
    }).finally(()=>setloading(false))
}

async function addUser(params:{id_number:string, hdd_name:string, pcb_number:string}) {

    
    setloading(true)
    createUser(params).then((data)=>{
      toast.success("Istifadeci Uğurla Elave edildi")
      getListUsers()
    }).finally(()=>{
      setloading(false)
    })
  }

useEffect(() => {
    getListUsers()
}, []);

return{
    list,
    loading,
    removeUser,
    addUser
}
}

