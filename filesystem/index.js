// TODO: tampilkan teks pada notes.txt pada console.
const fs = require("fs");

const fileReadCallBack = (error, data) => {
  if (error) {
    console.log("Failed to read file");
    return;
  }
  console.log(data);
};

fs.readFile("notes.txt", "utf-8", fileReadCallBack);
