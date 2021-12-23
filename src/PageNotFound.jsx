import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="text-center text-info pt-5">
        <h1 className="display-4 text-center mt-5">OOPS</h1>
        <h1>
          Something went wrong
          <br />
          You may be able to try refresh
          <br />
          or back to
        </h1>
        <h5>
          <Link to="/" className="text-info">
            Homepage
          </Link>
        </h5>
      </div>
    </>
  );
};

export default NotFound;
