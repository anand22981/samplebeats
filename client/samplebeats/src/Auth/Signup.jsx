import logo from "../assets/FullLogo_Transparent_NoBuffer.png";
import { useNavigate } from "react-router";

export default function Signup() {

    let navigate = useNavigate();
  return (
    <section>
      <div className="bg-black h-screen w-full">
        <header className="text-center">
          <div>
            <img
              className="h-20 sm:h-32  mx-auto"
              src={logo}
              alt="samplebeatslogo"
            />
            <h1 className=" mt-10 font-semibold  sm:text-2xl sm:mt-10   text-white">
              Create your free Account
            </h1>
          </div>
        </header>
        <div className="flex justify-center mt-8">
          <form className="bg-white p-6 rounded-md w-full max-w-sm sm:max-w-md space-y-4">
            <input
              className="w-full px-3 py-2 border border-black rounded-md text-black focus:outline-none "
              type="email"
              placeholder="email address"
            />
            <input
              className="w-full px-3 py-2 rounded-md border border-black text-black  focus:outline-none"
              type="password"
              placeholder="password"
            />
            <a href="#">forgot password ?</a>
            <button
              type="submit"
              className="w-full  mt-4 bg-yellow-400 py-2 px-3 rounded-md hover:bg-yellow-400 transtion"
            >
              Continue
            </button>
            <div>
              <p>
                Already have an account? <a  onClick={()=>navigate('/sigin')} className="text-yellow-400">Login</a>
              </p>
            </div>
            <div className="  bg-blue-300 px-1 py-2 justify-center flex items-center text-black">
              <p className="mt-4 text-xs">
            By continuing, you agree to Samplebeats
                <br/>
                <a href="#">  Term of Use</a>
               ''
                and
''
                <a href="#">Privacy policy</a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
