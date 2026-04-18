import Navbar from "../components/shared/navbar";
import Footer from "../components/shared/footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;