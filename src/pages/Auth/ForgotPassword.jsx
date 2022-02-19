import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import rectangle34 from "../../assets/images/rectangle34.png";
import { Link } from "react-router-dom";
import axios from "../../Api/axios";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

const FP_URL = "/auth/password/reset/";
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const emailRef = useRef();
  const errRef = useRef();

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(email);
    if (!v1) {
      setErrMsg("Invalid Email");
      return;
    }
    try {
      const response = await axios.post(
        FP_URL,
        JSON.stringify({ email: email }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.data) {
        setErrMsg(errMsg);
      }
      // Clear the input fields
      setEmail("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Connection");
      } else if (err.response?.status === 400) {
        setErrMsg("This email does not exist");
      } else {
        setErrMsg("Failed to send email");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="font-Lato bg-[#F5F4FD]">
      <Navbar />
      <div className="md:flex md:justify-center lg:mx-[40px] lg:space-x-[30px] md:pt-10 md:pb-48">
        <div className="px-5 md:px-[50px] md:bg-white md:w-[610px] md:rounded-[40px] lg:rounded-tl-[40px] lg:rounded-bl-[40px] lg:rounded-tr-none lg:rounded-br-none">
          <h1 className="text-center md:text-left text-[25px] font-bold pt-[40px] md:pt-[130px] lg:pt-[40px]">
            Forgot your password?
          </h1>
          <div
            className={`${
              errMsg ? "block" : "hidden"
            } rounded-xl border border-red-600 bg-red-200 mt-3 flex justify-center items-center`}
            ref={errRef}
            aria-live="assertive"
          >
            <ExclamationCircleIcon className="h-[25px] w-[25px] text-red-700" />
            <p className="text-center py-5">{errMsg}</p>
          </div>
          <p className="font-normal md:w-[393px] text-base text-tcolor pt-[15px] text-center md:text-left">
            Please enter your email address. You will receive a link to create a
            new password via email.
          </p>
          <form onClick={handleSubmit} className="pt-10 space-y-5">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-normal">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="uidnote"
                required
                className="h-[50px] w-full rounded-lg outline-none border-[1px] px-5 text-lg"
              />
            </div>
            <div className="flex justify-center md:pt-[11px]">
              <button className="bg-bcolor h-[50px] w-[335px] md:w-full rounded-lg text-base font-bold">
                Send Reset Link
              </button>
            </div>
            <p className="font-normal text-tcolor text-base text-center pt-[10px] pb-48 md:pb-80 lg:pb-64">
              Remember your password?{" "}
              <Link to={"/signin"} className="text-bcolor font-bold">
                Sign in
              </Link>
            </p>
          </form>
        </div>
        <div className="hidden lg:block">
          <img
            src={rectangle34}
            alt="img"
            className="object-contain lg:w-[720px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
