import { FunctionComponent, useState } from "react";
import EditOrder from "./_components/editOrder";
import clsx from "clsx";
import { useParams } from 'react-router-dom';
import ViewOrder from "./_components/viewOrder";
import Comments from "./_components/comments";
import { useSelector } from "react-redux";
interface ViewOrderProps {

}

const ViewEditOrder: FunctionComponent<ViewOrderProps> = () => {

    const [isView, setIsview] = useState(true)
    const { id } = useParams()
    const [isOpen, setIsOpen] = useState(false)
    const role = useSelector((state:any)=>state.Auth.user?.role)
    return (<div>

        <div className="h-full">
            <div className="flex justify-end items-center">
                <span className="mgc_comment_line font-bold text-4xl text-success cursor-pointer" onClick={() => setIsOpen(!isOpen)}></span> </div>

            <div className={clsx("h-full w-5/12 fixed  top-15  -z-10 transition-all  bg-white shadow-lg rounded border ", isOpen ? "right-1 opacity-100 z-30 " : "opacity-0 -right-96 ")}>
                <Comments />
            </div>
        </div>
        <div className=" flex justify-center gap-x-1">
            <button onClick={() => setIsview(true)} className={clsx(" rounded py-1 px-3", isView ? "bg-primary bg-opacity-70 text-white " : "border border-primary  text-primary ")}>
                sifaris haqqinda melumat
            </button>
            <button disabled={role==="Operator"} onClick={() => setIsview(false)} className={clsx(" rounded py-1 px-3", isView ? "border border-primary  text-primary " : "bg-primary bg-opacity-70 text-white")}>
                isler ve materiallar
            </button>
        </div>

        {
            isView ? <ViewOrder id={id} /> : <EditOrder id={id}/>
        }
    </div>);
}

export default ViewEditOrder;