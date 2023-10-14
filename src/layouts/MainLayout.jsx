import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1536px] mx-auto bg-[#FAFBFC]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
