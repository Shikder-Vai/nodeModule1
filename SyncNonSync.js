console.log("hi i am learnig Node JS");

setTimeout(() => {
  const user = { id: 1 };
  setTimeout(() => {
    console.log(user.id);
  }, 500);
}, 1000);

setTimeout(() => {
  const data = [
    { name: "ns", age: "23" },
    { educaton: "takmil", passion: "programming" },
  ];
  setTimeout(() => {
    console.log(data);
  }, 400);
}, 500);
console.log("synconus and asynconus explaination");
