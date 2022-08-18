const xlsxFile = require("read-excel-file/node");
const translationFile = require("./translations");
const fs = require("fs");

const map = {};
xlsxFile("./pt_file.xlsx").then((rows) => {
  rows.forEach((row) => {
    map[row[1].toLowerCase()] = row[2];
  });
  const newData = {};
  const missingData = {};
  let i = 0;
  let j = 0;
  Object.entries(translationFile).forEach(([key, value]) => {
    if (map[value.toLowerCase()]) {
      newData[key] = map[value.toLowerCase()];
      i++;
    } else {
      newData[key] = value;
      missingData[key] = value;
      j++;
    }
  });
    fs.writeFileSync("./data.json", JSON.stringify(newData, null, 2), "utf-8");
    fs.writeFileSync(
      "./missingData.json",
      JSON.stringify(missingData, null, 2),
      "utf-8"
    );
    console.log("lines changed:", i);
    console.log("lines missing:", j);
});
