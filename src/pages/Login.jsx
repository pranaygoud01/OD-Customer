import React, { useState } from "react";
import { useCustomer } from "../context/CustomerContext"; // Adjust import path
import { IoFastFoodOutline } from "react-icons/io5";
import { useNavigate } from "@tanstack/react-router";

const Login = () => {
  const { loading, error, sendOtp, verifyOtp, needsProfile, completeProfile } = useCustomer();
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [stage, setStage] = useState("email"); // email -> otp -> profile
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    location: {
      fullAddress: "",
      addressLine1: "",
      addressLine2: "",
      locationLabel: "Home",
      customLabel: "",
    },
  });

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      await sendOtp(email);
      setStage("otp");
    } catch {
      // Error handled in context state .error
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const data = await verifyOtp(email, otp);
      if (data.needsProfile) {
        setStage("profile");
      } else {
        // logged in successfully
        setStage("done");
        // optionally redirect or show logged in UI
      }
    } catch {
      // Error handled in context state .error
    }
  };

  const handleCompleteProfile = async (e) => {
    e.preventDefault();
    try {
      await completeProfile(profile);
      setStage("done");
      // optionally redirect or show logged in UI
    } catch {
      // Error handled in context state .error
    }
  };

  if (stage === "done") {
    navigate({to:"/"})
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat backdrop-blur-sm lg:bg-[url('https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] max-lg:p-0 px-6"
    >
      <div className="w-full max-w-md max-lg:h-[100vh] bg-white rounded-2xl max-lg:rounded-none shadow-xl overflow-hidden">
        {/* Top Green Section */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-12 flex flex-col items-center text-white max-lg:rounded-none rounded-t-2xl select-none">
          <div className="text-7xl mb-3">
            <IoFastFoodOutline />
          </div>
          <h1 className="text-2xl font-cal tracking-wide">Order Now</h1>
        </div>

        {/* Form Section */}
        <div className="px-8 py-10">
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}

          {/* Email input stage */}
          {stage === "email" && (
            <form onSubmit={handleSendOtp}>
              <p className="text-center text-gray-500 mb-6 text-sm font-cal tracking-wide">
                Log in or Sign up
              </p>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full mb-6 border border-gray-300 rounded-xl shadow-sm px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full text-sm bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-xl font-semibold shadow-lg transition-all transform active:scale-95"
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>
          )}

          {/* OTP input stage */}
          {stage === "otp" && (
            <form onSubmit={handleVerifyOtp}>
              <p className="text-center text-gray-500 mb-6 text-sm font-cal tracking-wide">
                Enter the OTP sent to your email
              </p>
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full mb-6 border border-gray-300 rounded-xl shadow-sm px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                pattern="\d{4,6}" // assuming OTP 4-6 digit numbers
                maxLength={6}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full text-sm bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-xl font-semibold shadow-lg transition-all transform active:scale-95"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>
          )}

          {/* Profile completion stage */}
          {stage === "profile" && (
            <form onSubmit={handleCompleteProfile}>
              <p className="text-center text-gray-500 mb-6 text-sm font-cal tracking-wide">
                Complete your profile
              </p>

              <input
                type="text"
                placeholder="First Name"
                className="w-full mb-4 border border-gray-300 rounded-xl shadow-sm px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                value={profile.firstName}
                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                required
              />

              <input
                type="text"
                placeholder="Last Name"
                className="w-full mb-4 border border-gray-300 rounded-xl shadow-sm px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                value={profile.lastName}
                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full mb-4 border border-gray-300 rounded-xl shadow-sm px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                value={profile.mobileNumber}
                onChange={(e) => setProfile({ ...profile, mobileNumber: e.target.value })}
              />

              {/* Required location.fullAddress input */}
              <input
                type="text"
                placeholder="Full Address"
                className="w-full mb-4 border border-gray-300 rounded-xl shadow-sm px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                value={profile.location.fullAddress}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    location: { ...profile.location, fullAddress: e.target.value },
                  })
                }
                required
              />

              {/* Optional additional location fields */}
              <input
                type="text"
                placeholder="Address Line 1"
                className="w-full mb-4 border border-gray-300 rounded-xl shadow-sm px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                value={profile.location.addressLine1}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    location: { ...profile.location, addressLine1: e.target.value },
                  })
                }
              />

              <input
                type="text"
                placeholder="Address Line 2"
                className="w-full mb-4 border border-gray-300 rounded-xl shadow-sm px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                value={profile.location.addressLine2}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    location: { ...profile.location, addressLine2: e.target.value },
                  })
                }
              />

              <input
                type="text"
                placeholder="Location Label (e.g. Home, Work)"
                className="w-full mb-4 border border-gray-300 rounded-xl shadow-sm px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                value={profile.location.locationLabel}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    location: { ...profile.location, locationLabel: e.target.value },
                  })
                }
              />

              <input
                type="text"
                placeholder="Custom Label"
                className="w-full mb-6 border border-gray-300 rounded-xl shadow-sm px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                value={profile.location.customLabel}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    location: { ...profile.location, customLabel: e.target.value },
                  })
                }
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full text-sm bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-xl font-semibold shadow-lg transition-all transform active:scale-95"
              >
                {loading ? "Saving..." : "Complete Profile"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
