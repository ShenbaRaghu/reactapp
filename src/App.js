import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
//import Fav, { name1, language, myFunction } from "./Components/ImportExport";

const App = () => {
  return (
    <>
      <Header />

      <Main />

      <Footer />

      {/* <h1>Practice Import and Export</h1>
      <Fav />
      <h1>{`My name is ${name1}`}</h1>
      <h1>{`I am learning ${language}`}</h1>
      <h1>{myFunction("binary", "ternary")}</h1> */}
    </>
  );
};

export default App;
