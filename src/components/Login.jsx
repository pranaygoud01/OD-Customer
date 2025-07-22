const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <div className="w-full max-w-md bg-white rounded-xl overflow-hidden shadow-lg">
        {/* Top Green Section */}
        <div className="bg-green-500 p-10 flex flex-col items-center text-white">
          <div className="text-6xl mb-4">
            🍽️
          </div>
          <h1 className="text-xl font-bold">ORDERNOW</h1>
        </div>

        {/* Login Section */}
        <div className="px-6 py-8">
          <p className="text-center text-sm text-gray-600 mb-4">Log in or Sign up</p>

          <div className="flex items-center border rounded-lg overflow-hidden shadow-sm mb-4">
            {/* Country Code Selector */}
            <select className="bg-white border-r px-3 py-2 text-sm">
              <option value="+44">🇬🇧 +44</option>
              <option value="+91">🇮🇳 +91</option>
              {/* Add more if needed */}
            </select>

            {/* Phone Input */}
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="flex-1 px-3 py-2 focus:outline-none text-sm"
            />
          </div>

          <button className="w-full bg-green-500 text-white py-2 rounded-lg font-medium shadow-md hover:bg-green-600 transition">
            Continue
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t"></div>
            <span className="mx-2 text-sm text-gray-400">or</span>
            <div className="flex-grow border-t"></div>
          </div>

          {/* Social Login Icons */}
          <div className="flex justify-center gap-4">
            <button className="bg-green-100 p-2 rounded-full hover:bg-green-200">
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="G" className="w-5 h-5" />
            </button>
            <button className="bg-green-100 p-2 rounded-full hover:bg-green-200">
              <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="F" className="w-5 h-5" />
            </button>
            <button className="bg-green-100 p-2 rounded-full hover:bg-green-200">
              <img src="https://img.icons8.com/fluency/48/000000/mac-os.png" alt="Apple" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
