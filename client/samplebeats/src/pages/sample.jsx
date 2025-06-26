import "./sample.css";

const sample = () => {
  return (
    <div className="sample">
      
      <form action="/">
      <h1>Create Magic By Searching Sample</h1>
        <input type="text" placeholder="Search" name="search" />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default sample;
