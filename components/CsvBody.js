import React, { useRef, useState } from "react";
import { useCSVReader } from "react-papaparse";

function CsvBody() {
  const [fieldIndex, setFieldIndex] = useState("");
  const { CSVReader } = useCSVReader();
  const [csvData, setCsvData] = useState([]);
  const [csvData1, setCsvData1] = useState([]);

  const CheckAbsent = () => {
    const array1 = [];
    const array2 = [];
    for (let i = 0; i < csvData.length; i++) {
      array1[i] = csvData[i][fieldIndex];
    }
    for (let i = 0; i < csvData1.length; i++) {
      array2[i] = csvData1[i][fieldIndex];
    }
    let intersection = array1.filter((x) => array2.includes(x));
    console.log("Array1 :", array1);
    console.log("Array2 :", array2);
    let difference = array1
      .filter((x) => !array2.includes(x))
      .concat(array2.filter((x) => !array1.includes(x)));
    console.log("Present Student:", intersection);
    console.log("Absent Student:", difference);
    document.getElementById("output1").innerHTML = difference;
  };

  return (
    <div className=" my-20 md:my-5 border-t w-full">
      <div className=" bg-white md:h-screen  my-14 px-1 md:px-5 h-full w-full flex flex-col md:flex-row items-center ">
        <div className="w-[60%] ">
          <h1 className="text-xl w-full flex flex-col">
            <span className=" bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent text-3xl md:text-6xl uppercase">
              Student attendence <span className="text-2xl">(Csv Sheet)</span>
            </span>
          </h1>
          <img src="/img/pic1.svg" className="mx-4 my-10" alt="" />
        </div>
        <div className="w-full  md:w-[600px] md:h-[550px]  h-[650px] flex-col bg-gray-50 rounded-lg shadow-xl flex md:items-center justify-start md:justify-center ">
          <CSVReader
            onUploadAccepted={(results) => {
              setCsvData(results.data);
            }}
          >
            {({ getRootProps, acceptedFile, getRemoveFileProps }) => (
              <>
                <div className="w-full my-2 justify-center flex-col flex items-center">
                  <h1 className="p-2 text-xl font-thin italic">
                    Enter the First CSV fIle
                  </h1>
                  <div className="flex space-x-3 items-center">
                    <div className="text-xs font-semibold">
                      {acceptedFile && acceptedFile.name}
                    </div>

                    <button
                      className="bg-blue-500 text-sm text-white p-3 shadow-xl rounded-lg"
                      type="button"
                      {...getRootProps()}
                    >
                      Browse file
                    </button>
                    <button
                      className="bg-red-500 p-3 text-sm rounded-lg text-white"
                      {...getRemoveFileProps()}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </>
            )}
          </CSVReader>
          <CSVReader
            onUploadAccepted={(results) => {
              setCsvData1(results.data);
              console.log(results);
            }}
          >
            {({ getRootProps, acceptedFile, getRemoveFileProps }) => (
              <>
                <div className=" w-full my-5 justify-center flex-col flex items-center">
                  <h1 className="p-2 text-lg font-thin italic">
                    Enter the Second Csv File
                  </h1>
                  <div className="flex space-x-3 items-center">
                    <div className="text-xs font-semibold">
                      {acceptedFile && acceptedFile.name}
                    </div>

                    <button
                      className="bg-blue-500 text-sm text-white p-3 shadow-xl rounded-lg"
                      type="button"
                      {...getRootProps()}
                    >
                      Browse file
                    </button>
                    <button
                      className="bg-red-500 p-3 text-sm rounded-lg text-white"
                      {...getRemoveFileProps()}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </>
            )}
          </CSVReader>
          <input
            className="px-4 mx-10 py-2 m-2 outline-none shadow-xl rounded-lg"
            type="text"
            value={fieldIndex}
            placeholder="Enter the Index "
            onChange={(e) => setFieldIndex(e.target.value)}
          />
          <button
            onClick={CheckAbsent}
            className="p-1 my-4 mx-10 bg-purple-500 text-white rounded-lg"
          >
            Check Attendence
          </button>
          <div className="flex justify-center py-2 px-4 items-center w-full">
            <p className="text-xs flex justify-center items-center font-bold w-[200px]">
              Absent Student:{" "}
            </p>
            <p
              id="output1"
              className=" overflow-y-scroll w-[300px] scrollbar-hide text-sm font-thin italic"
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CsvBody;
