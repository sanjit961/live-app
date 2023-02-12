import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Add from "./component/Add";
import Update from "./component/Update";
import View from "./component/View";
import Delete from "./component/Delete";
import NavMenu from "./component/NavMenu";
import PublicRoutes from "./Routes/publicRoutes";
function App() {
  return (
    <>
      <PublicRoutes>
        <NavMenu />
        <Home/>
      </PublicRoutes>
    </>
  );
}

export default App;
