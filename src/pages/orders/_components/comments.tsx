import { FunctionComponent, useEffect, useState } from "react";
import { createComment, getComments } from "../../../helpers/api/order";
import { useParams } from "react-router-dom";
import { ORDER_STATUS } from "../../../helpers/data";
import { FormInput, VerticalForm } from "../../../components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
interface CommentsProps {

}

const Comments: FunctionComponent<CommentsProps> = () => {
    const [list, setlist] = useState<any>(null)
    const [loading, setloading] = useState(false)
    let params = useParams();
    const schemaResolver = yupResolver(
        yup.object().shape({
          comment: yup.string().required("Rey bildirin!"),
            
        })
      );


    useEffect(() => {
        params.id && getComments(params.id).then((data)=>{
            setlist(data?.data?.data)
        })
    }, [params.id]);

    function onsubmit (val:any){
        createComment({...val, order_id:params?.id||0}).then((data)=>{
            getComments(params?.id||'0').then((data)=>{
                setlist(data?.data?.data)
            })

            toast.success("Elave edildi !")
        })
    }
    return (<div className=" h-full">

        <div className=" p-5 overflow-y-scroll h-2/3">
            <ul className=" h-full">
           
                {
                 [1,2,3,4,5,6,7].map(i=>(
                    list?.filter((item: any) => item.status === i)?.length > 0 && <li> {
                        <p className={" text-center p-2 rounded font-semibold my-3 bg-"+ORDER_STATUS[i].color+'-100'}>{ORDER_STATUS[i].name}</p>
                    }
    
                        <ul>{list?.filter((item: any) => item.status === i).map((item: any) => (
                            <li className=" bg-gray-50  mt-2 px-1"> 
                           <div className="flex items-center gap-x-1"> <span className="mgc_comment_fill"></span><p>{item.comment}</p></div>
                           <div className=" flex justify-end ">
                            <span>{item.from}</span>
                           </div>
                            </li>
                        ))}</ul>
    
                    </li>
                 ))
               }

            


            </ul>
        </div>


        <div className=" p-5 shadow-lg">
        <VerticalForm<any>
        onSubmit={onsubmit}
        resolver={schemaResolver}
        formClass=" flex flex-col gap-y-4 "
      >

          <FormInput
          type="textarea"
          name="comment"
          placeholder="Rey  əlavə edin"
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
        </div>
    </div>);
}

export default Comments;