import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* Header  */}
      <Header />

      {/* Main  */}
      <main>
        <Outlet />
      </main>

      {/* Footer  */}
      <Footer />
    </>
  );
};

export default Layout;
