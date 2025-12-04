import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
Footer;
export default function sample() {
  return (
    <>
      <Navbar className="fixed" />
      <div className="pt-20  flex flex-col items-center justify-center">
        <h1 className="text-black text-5xl ">Find the best sample</h1>
        <div className=" relative w-90 mt-5">
          <input
            className="border rounded border-blue-500 w-full h-12 px-4  pr-20 text-lg"
            placeholder="Try to search like 808 kick"
          />
          <button className=" absolute right-1 top-1/2 -translate-y-1/2 bg-yellow-400  px-4 py-2 rounded-xl text-lg">
            Search
          </button>
        </div>
      </div>
       <h2 className="flex items-center justify-center mt-4"> Browse Genres</h2>
      <div className="flex items-center justify-center mt-4">
       
        <ul className=" flex flex-wrap gap-4">
          <a className=" bg-yellow-400 border border-black rounded-xl p-3" href="#">Hip/hop</a>
          <a className=" bg-yellow-400 border border-black rounded-xl p-3" href="#">POP</a>
          <a className=" bg-yellow-400 border border-black rounded-xl p-3" href="#">Clasical</a>
          <a className=" bg-yellow-400 border border-black rounded-xl p-3" href="#">RnB</a>
          <a className=" bg-yellow-400 border border-black rounded-xl p-3" href="#">Hip/hop</a>
          <a className=" bg-yellow-400 border border-black rounded-xl p-3" href="#">POP</a>
          <a className=" bg-yellow-400 border border-black rounded-xl p-3" href="#">Clasical</a>
          <a className=" bg-yellow-400 border border-black rounded-xl p-3" href="#">RnB</a>
        </ul>
      </div>
          <h2 className="flex items-center justify-center mt-4"> Browse Instrument</h2>
        <div className="flex items-center justify-center mt-4" >
        
        <ul className=" flex flex-wrap gap-3">
          <a className=" bg-yellow-400 border border-black rounded-xl p-3" href="#">Hip/hop</a>
          <a className=" bg-yellow-400 border border-black rounded-xl p-3" href="#">POP</a>
          <a className=" bg-yellow-400 border border-black rounded-xl p-3"href="#">Clasical</a>
          <a className=" bg-yellow-400 border border-black rounded-xl p-3" href="#">RnB</a>
          <a className=" bg-yellow-400 border border-black rounded-xl p-3" href="#">Hip/hop</a>
          <a className=" bg-yellow-400 border border-black rounded-xl p-3" href="#">POP</a>
          <a className=" bg-yellow-400 border border-black rounded-xl p-3" href="#">Clasical</a>
          <a className=" bg-yellow-400 border border-black rounded-xl p-3" href="#">RnB</a>
        </ul>
      </div>

      <div>
        
      </div>
      <Footer className="fixed" />
    </>
  );
}
