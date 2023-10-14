import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1536px] mx-auto bg-[#FAFBFC]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
