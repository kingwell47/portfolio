import Footer from "../Footer";
import Meta from "../Meta";
import NavBar from "../Navbar";
import styles from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <>
      <Meta />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
