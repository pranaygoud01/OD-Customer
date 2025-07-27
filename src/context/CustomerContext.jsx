import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const CustomerContext = createContext();

export const useCustomer = () => useContext(CustomerContext);

const BASE_URL = import.meta.env.VITE_API_URL; // adjust as needed

export const CustomerProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null); // logged in customer
  const [needsProfile, setNeedsProfile] = useState(false);
  const [emailWaiting, setEmailWaiting] = useState(null);

  const axiosInstance = axios.create({
    withCredentials: true, // for cookies
  });

  // Send OTP to email
  const sendOtp = async (email) => {
    setLoading(true);
    try {
      await axiosInstance.post(`${BASE_URL}/api/customers/send-otp`, { email });
      setError(null);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchCustomer=async()=>{
    try {
        const res=await axiosInstance.get(`${BASE_URL}/api/customers/me`);
       console.log(res.json())
    } catch (error) {
        console.log(error)
    }
  }
  // Verify OTP and login/register or prompt profile
  const verifyOtp = async (email, otp) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        `${BASE_URL}/api/customers/verify-otp`,
        { email, otp }
      );
      if (response.data.needsProfile) {
        setNeedsProfile(true);
        setEmailWaiting(email);
        setUser(null);
      } else {
        setUser({ email }); // Simplified user state; consider fetching full user profile
        setNeedsProfile(false);
        setEmailWaiting(null);
      }
      setError(null);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Complete profile for new users
  const completeProfile = async (profileData) => {
    setLoading(true);
    try {
      // include emailWaiting automatically so you don't need user to input email again
      const dataToSend = { ...profileData, email: emailWaiting };
      await axiosInstance.post(
        `${BASE_URL}/api/customers/complete-profile`,
        dataToSend
      );
      setUser({ email: emailWaiting, ...profileData });
      setNeedsProfile(false);
      setEmailWaiting(null);
      setError(null);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };
useEffect(()=>
{
fetchCustomer();
},[])
  return (
    <CustomerContext.Provider
      value={{
        loading,
        error,
        user,
        needsProfile,
        sendOtp,
        verifyOtp,
        completeProfile,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
