import { Fragment } from "react";
import logo from "../assets/FullLogo_Transparent_NoBuffer.png"

export default function Footer() {
  return (
    <Fragment>
      <footer className="bg-black text-yellow-400 pt-12 mt-10">
        <div className=" flex items-center space-x-3">
          
          
          <img src ={logo} alt="image" className="w-50 h-20 object-contain"/>
          
        </div>

        {/* <h1 className="text-2xl font-bold tracking-wide"> samplebeats.in</h1> */}
        {/* <div>
            <ul className="flex flex-cols pt-1 mt-1 ml-5 gap-2 ">
                <li><a>Insta</a></li>
                <li><a>Insta</a></li>
                <li><a>Insta</a></li>
                <li><a>Insta</a></li>
            </ul>

        </div> */}
        

        <div className=" grid grid-cols-3  gap-8 sm:grid-cols-3 md:grid-cols-4 max-w-4xl mx-auto  text-gray-400 mt-2 text-sm">
          <div >
            <h3 className=" mb-3 font-bold">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-yellow-300">Company</li>
              <li className="hover:text-yellow-300">About us</li>
              <li className="hover:text-yellow-300">Careers</li>
              <li className="hover:text-yellow-300">Contacts</li>
            </ul>
          </div>
          <div >
            <h3 className="mb-3 font-semibold ">Support</h3>
            <ul className="space-y-2">
              <li className="hover:text-yellow-300">Help center</li>
              <li className="hover:text-yellow-300">FAQ</li>
              <li className="hover:text-yellow-300">Community</li>
            </ul>
          </div>
          <div >
            <h3 className="mb-3 font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li className="hover:text-yellow-300">Term and condition</li>
              <li className="hover:text-yellow-300">Privacy Policy</li>
              <li className="hover:text-yellow-300">License Agreement</li>
            </ul>
          </div>
           <div >
            <h3 className="mb-3 font-semibold">Connect</h3>
            <ul className="space-y-2">
              <li className="hover:text-yellow-300">Instagram</li>
              <li className="hover:text-yellow-300">Twitter</li>
              <li className="hover:text-yellow-300">YouTube</li>
            </ul>
          </div>

        </div>

        <div>
            <h1 className="text-center text-l">Made with love in Bihar</h1>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-xs">
                          
          © {new Date().getFullYear()} SampleBeats. All rights reserved.
        </div>
        
            
      
      </footer>
    </Fragment>
  );
}
