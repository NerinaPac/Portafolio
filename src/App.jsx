import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import "./App.css";

function App () {
return(
  <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<Home />} />
          <Route />
          <Route />

      </Routes>
  </BrowserRouter>


      )
}


export default App;