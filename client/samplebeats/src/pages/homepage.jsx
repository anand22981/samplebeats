import BGIMG from "../assets/bg-image.jpg";
import BGIMG2 from "../assets/caught-in-joy-ptVBlniJi50-unsplash.jpg";
import BGIMG3 from "../assets/luis-morera-klNRtxIgiMM-unsplash.jpg";
import "../pages/homepage.css";
const homepage = () => {
  return (
    <>
      <div className="bg-image-below-header" style={{ background: "black" }}>
        <img src={BGIMG} alt="bg-image" />
        <br />
        <br />
        <h1 className="text-color">Welcome to SampleBeats.in</h1>
        <br />
        <p className="text-color-pargraph">
          Join thousands of creators who trust BeatSample.in for authentic,
          royalty-free samples and industry-level beats that bring your music to
          life.
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="container" style={{ background: "black" }}>
        <h1 className="header">
          Experience the quality firsthand — download a free sample and start
          creating magic.
        </h1>
        <br />
        <p className="text-color-pargraph-1">
          Explore a world of curated loops, drum kits, and instrumentals.
          Whether you're a beginner or a pro, BeatSample.in empowers your
          creative journey with sounds that inspire.
        </p>
        <img className="img-body" src={BGIMG2} />
      </div>

      <br />

      <div className="container" style={{ background: "black" }}>
        <img className="img-body" src={BGIMG3} />

        <br />

        <p className="text-color-pargraph-2">
          Explore a world of curated loops, drum kits, and instrumentals.
          Whether you're a beginner or a pro, BeatSample.in empowers your
          creative journey with sounds that inspire.
        </p>

        <h1 className="header-right">
          Your creative journey starts here. Download a sample and bring your
          ideas to life.
        </h1>
      </div>
    </>
  );
};

export default homepage;
