import { useEffect, useState } from "react"
import { getRoles } from "../../helpers/api/role"

export const useRoleHook = ()=>{

    const [list, setlist] = useState<any>(null)
    const [loading, setloading] = useState(false)

function getListRole (){
    setloading(true)
    getRoles().then((data)=>{
        setlist(data.data?.data)
        
    }).finally(()=>setloading(false))
}

useEffect(() => {
    getListRole()
}, []);

return{
    list,
    loading
}
}

