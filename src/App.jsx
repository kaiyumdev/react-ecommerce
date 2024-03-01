import { Outlet } from "react-router-dom";
import "./App.css";
import NavItems from "./components/NavItems";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavItems></NavItems>
      <div className="min-vh-100">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
