import { Link } from "react-router-dom";

const BackBtn = () => {
  return (
    <div className="text-center my-4">
      <Link to="/">
        <button
          type="button"
          className="btn btn-info rounded-pill text-white px-5 my-3"
        >
          Back
        </button>
      </Link>
    </div>
  );
};

export default BackBtn;
