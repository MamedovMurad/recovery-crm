import React, { useEffect, useState } from "react";
import { HoverableRows } from "../tables/BasicTables";
import { ModalLayout } from "../../components/HeadlessUI";
import AddWholeSale from "./_components/add-whole-sale";
import { FormInput, VerticalForm } from "../../components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { wholeSaleHook } from "./customHook";
import { APICore } from "../../helpers/api/apiCore";
import { Link } from "react-router-dom";

interface Props {}

function onSubmit(params?: any) {}
const schemaResolver = yupResolver(
  yup.object().shape({
    name: yup.string().required("Hard disk əlavə edin!"),
  })
);
const WholeSale: React.FC<Props> = ({}) => {
  const api = new APICore();
  const { list } = wholeSaleHook();
  console.log(list, "list");

  return (
    <div>
      <div className=" flex justify-end items-center">
        <Link
          to={"/wholesale/hdd/create"}
          className="btn border-primary text-primary mb-3  hover:bg-primary hover:text-white"
        >
          <span className="mgc_add_fill"></span>
        </Link>
      </div>
      <HoverableRows
        columns={["Id", "HDD Name", "Size", "FW", "Model", "Family", "Heads"]}
        list={list?.map((item: any) => ({ ...item }))}
        names={["id", "hdd_name", "size", "fw", "model", "family", "heads"]}
      />

      {/*       <ModalLayout
        showModal={isOpen}
        children={<AddWholeSale />}
        toggleModal={() => setisOpen(!isOpen)}
      /> */}
    </div>
  );
};

export default WholeSale;
