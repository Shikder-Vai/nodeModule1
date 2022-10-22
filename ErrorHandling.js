const { handleError, forTest } = require("./importExport.js");

async function getData() {
  try {
    // undefined.find();
    const emailError = new Error("email already existe");
    throw emailError;
  } catch (error) {
    //Methord 1
    // console.log(error);
    // Global Methord
    handleError(error);
  }
}
forTest();
getData();
console.log("done");
