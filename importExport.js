function handleError(error) {
  const { name, message, stack } = error;

  console.log(name, message);
  //in the case of profassional usege we need to store our error in our server for future research and fixing.
  // logger.error({
  //   name,
  //   message,
  //   stack,
  //   // route. req,
  // });
  console.log("ami error handler");
}

function forTest() {
  console.log("this funtion is only for test");
}

// import export have few methods
//1st default export.
// module.exports = handleError;
//2nd name exprots
/**
 *module.exports.handleError = handleError;
module.exports.forTest = forTest; 
 * 
 */

// 3rd object exports
module.exports = {
  handleError,
  forTest,
};
