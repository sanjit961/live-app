import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./Routes/publicRoutes";
import Footer from "./component/Footer";
import ProtectedRoutes from "./Routes/protectedRoutes";
import PublicNav from "./Navigation/PublicNav";
function App() {
  return (
    <>
      <BrowserRouter>
        <PublicNav />
        <PublicRoutes />
        <ProtectedRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
