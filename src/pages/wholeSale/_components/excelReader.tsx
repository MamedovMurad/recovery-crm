import React from "react";
import readXlsxFile from "read-excel-file";
import { createHDDProduct } from "../../../helpers/api/wholeSale";
interface Props {}

const ExcelReaderField: React.FC<Props> = ({}) => {
  //['Brend', 'Size', 'Firmware', 'Model', 'Family', 'Heads', 'ID_Num']
  const customArr = [
    "Brend",
    "Size",
    "Firmware",
    "Model",
    "Family",
    "Heads",
    "ID_Num",
  ];
  function handleChange(params: any) {
    readXlsxFile(params.target.files[0]).then((rows) => {
      const res = rows?.map((item) => {
        var result: any = {};
        customArr.forEach((key, i) => (result[key] = item[i]));

        return result;
      });
      console.log(res);

      createHDDProduct(
        res
          .filter((item, index) => index > 0)
          .map((item) => (item.ID_Num ? item : { ...item, ID_Num: "0" }))
      ).then((data) => {
        console.log(data);
      });
    });
  }
  return <input type="file" id="input" onChange={handleChange} />;
};

export default ExcelReaderField;
