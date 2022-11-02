import { useIsAuth } from "app/IsAuth/IsAuth";
import { Navbar } from "app/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const auth = useIsAuth();

  return (
    <>
      {auth ? (
        <>
          <Outlet />
          <Navbar />
        </>
      ) : (
        false
      )}
    </>
  );
};
