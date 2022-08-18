const writeXlsxFile = require("write-excel-file/node");
const missingZh = require("./zh_missing_file");
const misisngPt = require("./pt_missing_file");

const headerRowZh = [
  { value: "Key" },
  { value: "English" },
  { value: "Chinese" },
];

const headerRowPt = [
  { value: "Key" },
  { value: "English" },
  { value: "Portugese" },
];

const dataToWriteZh = [];
const dataToWritePt = [];

dataToWriteZh.push(headerRowZh);
dataToWritePt.push(headerRowPt);

Object.entries(missingZh).forEach(([key, value]) => {
  dataToWriteZh.push([
    { type: String, value: key },
    { type: String, value: value },
  ]);
});

Object.entries(misisngPt).forEach(([key, value]) => {
  dataToWritePt.push([
    { type: String, value: key },
    { type: String, value: value },
  ]);
});

writeXlsxFile(dataToWriteZh, { filePath: "./zh_missing_file2.xlsx" });
writeXlsxFile(dataToWritePt, { filePath: "./pt_missing_file2.xlsx" });
