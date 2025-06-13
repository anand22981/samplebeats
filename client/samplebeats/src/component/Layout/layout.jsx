import react from "react";
import Navbar from "../Navbar/navbar";

const layout = (props) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{props.children}
      </main>
      <footer></footer>
    </>
  );
};
export default layout;
