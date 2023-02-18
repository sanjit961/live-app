import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Add from "./component/Add";
import Update from "./component/Update";
import View from "./component/View";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Delete from "./component/Delete";
import NavMenu from "./component/NavMenu";
import PublicRoutes from "./Routes/publicRoutes";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/view" element={<View />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
