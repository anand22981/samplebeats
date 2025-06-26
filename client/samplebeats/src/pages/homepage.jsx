import BGIMG from "../assets/bg-image.jpg";
import BGIMG2 from "../assets/caught-in-joy-ptVBlniJi50-unsplash.jpg";
import BGIMG3 from "../assets/luis-morera-klNRtxIgiMM-unsplash.jpg";
import "../pages/homepage.css";
const homepage = () => {
  return (
    <>

      <div className="container">
        <img className="img-body" src={BGIMG} alt="Sample visual" />
      </div>
      <div className="welcome-container">
        <h1 className="header">
          Welcome to SampleBeats.in
        </h1>
        <p className="text-color-pargraph-1">
          Join thousands of creators who trust BeatSample.in for authentic,
          royalty-free samples and industry-level beats that bring your music to
          life.
        </p>
      </div>
      <div className="flex-box-container-1">
        <div className="flex-box-1">
          <p className="bold-flex-head">
            Experience the quality firsthand — download a free sample and start
            creating magic.
          </p>
        </div>



        <div className="flex-box-2"><p>Explore a world of curated loops, drum kits, and instrumentals.
          Whether you're a beginner or a pro, BeatSample.in empowers your
          creative journey with sounds that inspire.</p></div>
        <div className="flex-box-3"><img src={BGIMG2} alt="not found" /></div>



      </div>



      <div className="flex-box-container-2">
        <div className="flex-box-cont-1">
          <img src={BGIMG3} alt="not found" />

        </div>



        <div className="flex-box-cont-2"><p>Explore a world of curated loops, drum kits, and instrumentals.
          Whether you're a beginner or a pro, BeatSample.in empowers your
          creative journey with sounds that inspire.</p></div>
        <div className="flex-box-cont-3"> <p className="bold-flex-cont-head">
          Your creative journey starts here. Download a sample and bring your
          ideas to life.
        </p></div>



      </div>
    </>
  );
};

export default homepage;
