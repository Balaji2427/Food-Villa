import { Link } from "react-router-dom";
import ErrorLogo from "../images/error.gif";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="mt-20">
        <h1 className="font-bold text-3xl mb-5">
          Something went wrong....!!!!
        </h1>
        <img src={ErrorLogo} alt="error-img" />
      </div>
      <div>
        <Link to="/">
          <button className="bg-orange-500 w-32 py-3 rounded-md text-white mt-8 text-lg">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
