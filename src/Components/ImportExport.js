import React from "react";

const Fav = () => {
  return <h1>My Favourite color is White</h1>;
};

const name1 = "Shenba";
const language = "Reactjs";

const myFunction = (data1, data2) => {
  let completeData = `My data1 is ${data1} and my data2 is ${data2}`;
  return completeData;
};

export default Fav;
export { name1, language, myFunction };
