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

        {/* Section 2: Featured Categories */}
        <section className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-yellow-400 text-3xl font-semibold mb-12">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {["Hip-Hop", "Lo-Fi", "EDM", "Cinematic"].map((genre, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-2xl text-white hover:bg-gray-800 transition flex flex-col justify-center items-center"
              >
                <h3 className="text-2xl font-bold mb-3">{genre}</h3>
                <p className="text-gray-400 text-sm">
                  Explore premium {genre} samples and loops
                </p>
              </div>
            ))}
          </div>
        </section>

            {/* Section 3: Why Choose Us */}
        <section className="flex flex-col md:flex-row-reverse items-center justify-between max-w-6xl mx-auto px-6">
          <div className="md:w-1/2 text-right mb-10 md:mb-0">
            <h2 className="text-yellow-400 text-2xl mb-3 font-semibold">Why Choose SampleBeats?</h2>
            <p className="text-white text-4xl font-bold mb-6">High Quality Beats & Loops</p>
            <ul className="text-gray-400 space-y-2">
              <li>🎧 100% Royalty-Free</li>
              <li>🚀 Updated Weekly with New Packs</li>
              <li>💾 Instant Downloads</li>
              <li>🌍 Global Producer Community</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={image2} alt="Beats" className="rounded-xl w-full object-cover" />
          </div>
        </section>

        {/* Section 4: Newsletter */}
        <section className="bg-gray-900 py-16 text-center rounded-2xl max-w-5xl mx-auto px-6">
          <h2 className="text-yellow-400 text-3xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-gray-300 mb-6">
            Get exclusive access to new samples, sound packs, and updates delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg w-full sm:w-1/2 outline-none text-black"
            />
            <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </form>
        </section>


      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
