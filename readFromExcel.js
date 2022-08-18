const xlsxFile = require("read-excel-file/node");
const fs = require("fs");

const zhData = {};
const ptData = {};

xlsxFile("./zh_file.xlsx").then((rows) => {
  rows.forEach((row) => {
    zhData[row?.[0]] = row?.[2];
  });
  fs.writeFileSync(
    "./zh_translated.json",
    JSON.stringify(zhData, null, 2),
    "utf-8"
  );
});

xlsxFile("./pt_file.xlsx").then((rows) => {
  rows.forEach((row) => {
    ptData[row?.[0]] = row?.[2];
  });

  fs.writeFileSync(
    "./pt_translated.json",
    JSON.stringify(ptData, null, 2),
    "utf-8"
  );
});
