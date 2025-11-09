import image2 from ".././assets/luis-morera-klNRtxIgiMM-unsplash.jpg";
import image3 from ".././assets/troy-t-dX76Mts-LVM-unsplash.jpg";
import sample1 from "../assets/sample1.wav";
import sample2 from "../assets/sample2.wav";
import sample3 from "../assets/sample3.wav";
import sample4 from "../assets/sample4.wav";
import Footer from "../component/Footer";

const Homepage = () => {
  const musicSamples = [
    { id: 1, title: "Chill Beat", src: sample1 },
    { id: 2, title: "Trap Loop", src: sample2 },
    { id: 3, title: "Lo-Fi Groove", src: sample3 },
    { id: 4, title: "Drum Pack", src: sample4 },
  ];

  return (
    <div className=" w-full h-screen">
      {/* Background Image */}
      <img src={image3} alt="Homepage" className="w-full h-full object-cover" />

      {/* Overlay Text (Fixed in Center) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-yellow-400 font-funnel font-bold mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide leading-tight">
          Welcome to SampleBeats
        </h1>
        <h2 className="text-white font-semibold mb-6 sm:text-lg md:text-xl lg:text-2xl">
          Find the top royalty-free samples
        </h2>
        <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition text-sm sm:text-base md:text-lg">
          Start Now
        </button>
      </div>

      {/* Section of music  */}

      <div className=" bg-black py-20 space-y-20">
        <section className=" flex flex-col md:flex-row bg-black text-5xl items-center justify-between max-w-6xl mx-auto px-6  ">
          <div className="md:w-1/2 text-left">
            <h2 className="text-yellow-400 text-2xl mb-3 font-semibold">
              Samplebeats offers
            </h2>
            <p className="text-white text-4xl font-bold">
              A Massive Sample Library
            </p>
          </div>
          {/* <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={image}
              alt="Sample Library"
              className="rounded-xl w-full object-cover"
            />
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
            {musicSamples.map((sample) => (
              <div
                key={sample.id}
                className="bg-yellow-300 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center hover:bg-yellow-400 transition"
              >
                <h2 className="text-xl font-semibold mb-4 text-center">
                  {sample.title}
                </h2>
                <audio
                  controls
                  className="w-full outline-none"
                  src={sample.src}
                ></audio>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col md:flex-row-reverse items-center justify-between max-w-6xl mx-auto px-6">
          <div className="md:w-1/2 text-right">
            <h2 className="text-yellow-400 text-2xl mb-3 font-semibold">
              Discover Sounds
            </h2>
            <p className="text-white text-4xl font-bold">
              High Quality Beats & Loops
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={image2}
              alt="Beats"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
