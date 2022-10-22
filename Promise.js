//Promise have 3 condition.
/**
 * Pandding...
 * Resolve.
 * Rejected.
 */

const dataPromise = new Promise((resolve, rejected) => {
  //   const user = { name: "ns", age: 23 };
  const user = undefined;
  if (!user) {
    rejected("sorry user not found");
  } else {
    resolve("congratulation!! we got user");
  }
}, 1000);

dataPromise
  .then((res) => console.log("In then: ", res))
  .catch((res) => console.log("In catch: ", res));

console.log("done");
const total = [];
const number = (fast, last) => {
  if (fast <= last) {
    number(fast + 1, last);
    total.push(fast);
  }
};
number(1, 100);
console.log(total);
