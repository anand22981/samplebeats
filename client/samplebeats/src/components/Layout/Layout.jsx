import Navbar from "../Navbar/Navbar";
import Homepage from "../../pages/homepage";
import "./Layout.css";
const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
          <Homepage/>
      </main>
      <footer>
         <h1></h1>
      </footer>
    </>
  );
};
export default Layout;
