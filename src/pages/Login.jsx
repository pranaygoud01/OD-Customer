import { IoFastFoodOutline } from "react-icons/io5";
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat backdrop-blur-sm lg:bg-[url('https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] max-lg:p-0 px-6">
      <div className="w-full max-w-md max-lg:h-[100vh] bg-white rounded-2xl max-lg:rounded-none shadow-xl overflow-hidden">
        {/* Top Green Section */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-12 flex flex-col items-center text-white max-lg:rounded-none rounded-t-2xl select-none">
          <div className="text-7xl mb-3"><IoFastFoodOutline/></div>
          <h1 className="text-2xl font-cal tracking-wide">Order Now</h1>
        </div>

        {/* Login Section */}
        <div className="px-8 py-10">
          <p className="text-center text-gray-500 mb-6 text-sm font-cal tracking-wide">
            Log in or Sign up
          </p>

          {/* Phone Input */}
          <div className="flex items-center border border-gray-300 rounded-xl shadow-sm px-3 py-2 mb-6 focus-within:ring-2 focus-within:ring-green-400 transition">
           

            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-grow ml-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none transition"
            />
          </div>

          {/* Continue Button */}
          <button
            className="w-full text-sm bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-xl font-semibold shadow-lg transition-all transform active:scale-95"
            type="submit"
          >
            Continue
          </button>

          {/* Or Separator */}
          <div className="flex items-center my-8 space-x-3">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="flex justify-center gap-6">
            <button
              aria-label="Continue with Google"
              className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google"
                className="w-6 h-6"
              />
            </button>

            <button
              aria-label="Continue with Facebook"
              className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </button>

            <button
              aria-label="Continue with Apple"
              className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src="https://img.icons8.com/fluency/48/000000/mac-os.png"
                alt="Apple"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
