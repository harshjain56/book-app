import React, { useState, useEffect } from "react";
import "./style.css"
import Navbar from "./Components/Navbar"
import Books from "./Components/Books";



function App() {

  let [querry, setQuerry] = useState("")

 


  return (
    <div>
     
      <Navbar setQuerry={setQuerry} />
      <Books querry={querry} />
    </div>





  );
}

export default App;
