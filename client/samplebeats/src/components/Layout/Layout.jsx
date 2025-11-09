
import Navbar from "../Navbar/Navbar";
import BGIMG from "../../assets/bg-image.jpg";
import "./Layout.css";
const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="bg-image-below-header">
        <img src={BGIMG} alt="bg-image" />

      </div>
       <div className="bg-image-below-header">
        <img src={BGIMG} alt="bg-image" />

      </div>

      <main>

      </main>
      <footer></footer>
    </>
  );
};
export default Layout;
