import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../public/Home";
import Footer from "./Footer";

const Public = () => {
  const content = (
    <div className="bg-gradient-to-br from-slate-900 from-25% via-teal-500 via-75% to-slate-100 to-1%">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
  return content;
};
export default Public;
