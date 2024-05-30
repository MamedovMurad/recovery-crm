import React from "react";
import readXlsxFile from "read-excel-file";
import { createHDDProduct } from "../../../helpers/api/wholeSale";
import { toast } from "react-toastify";
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
          .filter((item, index) => index > 1)
          .map((item) => (item.ID_Num ? item : { ...item, ID_Num: "0" }))
      ).then((data) => {
       toast.success('Mulamatlar uqurla elave edildi')
      }).catch(()=>{
        toast.error("Xeta bash verdi!!!")
      });
    });
  }
  return <input type="file" id="input" onChange={handleChange} />;
};

export default ExcelReaderField;
