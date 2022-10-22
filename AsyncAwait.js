const myPromiss = new Promise((Resolve, Rejected) => {
  setTimeout(() => {
    Resolve("success");
  }, 1000);
});

async function userData() {
  const res = await myPromiss;
  console.log(res);
}
userData();

//Normal fetch
fetch()
  .then((res) => res.json())
  .then((data) => console.log(data));

//AsyncAwait Fetch system
//Note* Node dosn't support directly fetch but we can use this by packeges.
const getData = async () => {
  const res = await fetch("");
  const users = await res.json();
  console.log(users);

  //finding spacific data
  const res1 = await fetch(`http://www.example.com/${users.id}`);
  const user = await res1.json();
  console.log(user);
};
