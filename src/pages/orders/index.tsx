import { FunctionComponent } from "react";
import { useOrderHook } from "./useOrderHook";
import { ORDER_STATUS } from "../../helpers/data";
import clsx from 'clsx';
import { Link } from "react-router-dom";

const ManageTickets = (params:{list:any}) => {

  function ticketColor(params:number) {
   return `inline-flex items-center gap-1.5 py-1 px-3 rounded text-xs  font-medium bg-${ORDER_STATUS[params].color}-100`
  }
    return (
      <div className="mt-6">
        <div className="card">
          <div className="flex flex-wrap justify-between items-center gap-2 p-6 bg-blue-100 ">
            <Link to={'/orders/create'} className="btn bg-danger/20 text-sm font-medium text-danger hover:text-white hover:bg-danger"><i className="mgc_add_circle_line me-3"></i> Yeni Sifaris Elave Et</Link>
            <div className="flex flex-wrap gap-2">
              <button type="button" className="btn bg-success/25 text-lg font-medium text-success hover:text-white hover:bg-success"><i className="mgc_settings_3_line"></i></button>
              <button type="button" className="btn bg-dark/25 text-sm font-medium text-slate-900 dark:text-slate-200/70 hover:text-white hover:bg-dark/90">Import</button>
              <button type="button" className="btn bg-dark/25 text-sm font-medium text-slate-900 dark:text-slate-200/70 hover:text-white hover:bg-dark/90">Export</button>
            </div>
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full divide-y divide-gray-300 dark:divide-gray-700">
              <thead className="bg-slate-300 bg-opacity-20 border-t dark:bg-slate-800 divide-gray-300 dark:border-gray-700">
                <tr>
                  <th scope="col" className="py-3.5 ps-4 pe-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">ID</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Sifaris novu</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Musteri</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Operator</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Status</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Brend</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Created Date</th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 dark:text-gray-200">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700 ">
                {(params.list || []).map((ticket:any, idx:number) => {
                  return (
                    <tr key={idx}>
                      <td className="whitespace-nowrap py-4 ps-4 pe-3 text-sm font-medium text-gray-900 dark:text-gray-200"><b>{ticket.id}</b></td>
                      <td className="whitespace-nowrap py-4 pe-3 text-sm">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            {/* <img className="h-10 w-10 rounded-full" src={} alt="" /> */}
                          </div>
                          <div className="font-medium text-gray-900 dark:text-gray-200 ms-4">{ticket.order_type}</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 px-3 text-sm ">
                     <div className=" flex items-center text-info">
                     <span className="mgc_user_3_fill font-semibold text-2xl"></span>
                      <div className="font-medium text-gray-900 dark:text-gray-200 ms-4">{ticket.customer}</div>
                     </div>
                        {/* <img className="h-10 w-10 rounded-full" src={ticket.operator} alt="" /> */}
                      </td>
                      <td className="whitespace-nowrap py-4 px-3 text-sm ">
                      <div className=" flex items-center text-primary">
                     <span className="mgc_user_3_fill font-semibold text-2xl"></span>
                      <div className="font-medium text-gray-900 dark:text-gray-200 ms-4">{ticket.operator}</div>
                     </div>
                        {/* <img className="h-10 w-10 rounded-full" src={ticket.operator} alt="" /> */}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className={ ticketColor(ticket.status)}>
                          {ORDER_STATUS[ticket.status].name}
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 px-3 text-sm">
                      <div className="font-medium text-gray-900 dark:text-gray-200 ms-4">{ticket.device}</div>
                        {/* <img className="h-10 w-10 rounded-full" src={ticket.operator} alt="" /> */}
                      </td>
                      <td className="whitespace-nowrap py-4 pe-3 text-sm font-medium text-gray-900 dark:text-gray-200">{ticket.created_at}</td>
 
                      <td className="whitespace-nowrap py-4 px-3 text-center text-sm font-medium">
                        <Link to={'/orders/edit/'+ticket.id} className="me-0.5"> <i className="mgc_eye_line text-lg"></i> </Link>&nbsp;
                        <button className="ms-0.5"> <i className="mgc_delete_line text-xl"></i> </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }


  interface OrderPageProps {
    
  }
   

  const OrderPage: FunctionComponent<OrderPageProps> = () => {
    const {list}=useOrderHook()
   
    
    return ( <div>
        <ManageTickets list={list}/>
    </div> );
  }
   
  export default OrderPage;
