import React, { useState } from "react";
import * as XLSX from "xlsx";
import Ouput from "./Ouput";

function Body() {
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);
  const [excelData, setExcelData] = useState(null);
  const [fieldName, setFieldName] = useState("");

  const fileType = ["application/vnd.ms-excel", "text/csv"];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        };
      } else {
        setExcelFileError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("plz select your file");
    }
  };

  //   ..............

  const [excelFile2, setExcelFile2] = useState(null);
  const [excelFileError2, setExcelFileError2] = useState(null);
  const [excelData2, setExcelData2] = useState(null);

  const fileType2 = ["application/vnd.ms-excel"];
  const handleFile2 = (e) => {
    let selectedFile2 = e.target.files[0];
    if (selectedFile2) {
      if (selectedFile2 && fileType2.includes(selectedFile2.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile2);
        reader.onload = (e) => {
          setExcelFileError2(null);
          setExcelFile2(e.target.result);
        };
      } else {
        setExcelFileError2("Please select only excel file types");
        setExcelFile2(null);
      }
    } else {
      console.log("plz select your file");
    }
  };

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
    } else {
      setExcelData(null);
    }

    if (excelFile2 !== null) {
      const workbook = XLSX.read(excelFile2, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData2(data);
    } else {
      setExcelData2(null);
    }
  };
  console.log(excelData);
  console.log(excelData2);

  const checkAbsent = () => {
    const arr1 = [];
    const arr2 = [];
    for (let i = 0; i < excelData.length; i++) {
      arr1[i] = excelData[i][fieldName];
    }
    for (let i = 0; i < excelData2.length; i++) {
      arr2[i] = excelData2[i][fieldName];
    }

    let intersection1 = arr1.filter((x) => arr2.includes(x));
    console.log("Array1 :", arr1);
    console.log("Array2 :", arr2);

    let difference1 = arr1
      .filter((x) => !arr2.includes(x))
      .concat(arr2.filter((x) => !arr1.includes(x)));
    console.log("Present Student:", intersection1);
    console.log("Absent Student:", difference1);

    document.getElementById("output").innerText = difference1;
  };

  return (
    <div className=" bg-white md:h-screen py-10 my-10 px-1 md:px-5 h-full w-full flex flex-col md:flex-row items-center">
      <div className="w-[70%] ">
        <h1 className="text-xl w-full flex flex-col">
          <span className=" bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent text-3xl md:text-6xl uppercase">
            Student attendence <span className="text-2xl">(Excel Sheet)</span>
          </span>
        </h1>
        <img src="/img/check.svg" className=" my-10" alt="" />
      </div>
      <div className="w-full my-5 mx-10 md:w-[600px] md:h-[550px]  h-[650px] flex-col bg-gray-50 rounded-lg shadow-xl flex md:items-center justify-start md:justify-center ">
        <p className="text-lg font-bold m-2">Enter the First excel Sheet</p>
        <input
          type="file"
          className="m-2 bg-blue-500 w-[80%] text-white p-2 text-xs"
          onChange={handleFile}
          required
          accept=".csv,.xlsx,.xls"
        />
        <p className="text-lg font-bold m-2 ">Enter the Second excel Sheet</p>
        <input
          type="file"
          className="m-2 bg-blue-500  w-[80%] text-white p-2 text-xs"
          onChange={handleFile2}
          required
          accept=".csv,.xlsx,.xls"
        />
        <p className="text-xs p-2 font-bold">
          * Please try to type the exact field that you want to check
        </p>
        <input
          className="px-4 py-2 m-2 outline-none shadow-xl rounded-lg"
          type="text"
          value={fieldName}
          placeholder="Enter the field "
          onChange={(e) => setFieldName(e.target.value)}
        />
        <div className="space-x-4 p-2">
          <button
            className="bg-red-500 p-2 text-xs font-bold text-white shadow-xl rounded-xl"
            onClick={handleSubmit}
          >
            Submit
          </button>

          <button
            type="submit"
            className="bg-red-500 my-4 p-2 text-xs font-bold text-white shadow-xl rounded-xl"
            onClick={checkAbsent}
          >
            Check The Absent
          </button>
        </div>
        <div className="flex justify-center py-2 px-4 items-center w-full">
          <p className="text-xs flex justify-center items-center font-bold w-[200px]">
            Absent Student:{" "}
          </p>
          <p
            id="output"
            className=" overflow-y-scroll w-[300px] scrollbar-hide text-sm font-thin italic"
          ></p>
        </div>
      </div>
    </div>
  );
}

export default Body;
