import { Navbar } from "components/layout";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
};
