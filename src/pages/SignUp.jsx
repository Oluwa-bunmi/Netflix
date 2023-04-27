import { Link } from "react-router-dom";
import bg from "../assets/netflix.jpg";
const SignUp = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          src={bg}
          alt="/"
          className="hidden sm:block absolute h-full w-full object-cover"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="w-full fixed px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto text-white bg-black/75">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form className="w-full flex flex-col py-4 ">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 my-2 bg-gray-700 rounded"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="p-3 my-2 bg-gray-700 rounded"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
              </form>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">
                  Already subscribed to Netflix?
                </span>
                <Link to="/login"> Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
