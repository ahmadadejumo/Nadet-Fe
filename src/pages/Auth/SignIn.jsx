import React, { useState, useRef, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Navbar from "../../components/Navbar";
import { EyeOffIcon } from "@heroicons/react/outline";
import { EyeIcon } from "@heroicons/react/outline";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import rectangle33 from "../../assets/images/rectangle33.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../Api/axios";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { GoogleLogin } from "react-google-login";

const LOGIN_URL = "/auth/login/";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("adejumoahmad4life@gmail.com");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("123456Abcde@");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleClick = () => {
    return setShowPassword(showPassword ? false : true);
  };
  // Google Login
  const responseGoogle = async (response) => {
    console.log(response);
    try {
      const res = await axios.post(
        "/auth/google/",
        JSON.stringify({
          access_token: response.accessToken,
          id_token: response.tokenId,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(res);
      const access_token = res?.data.access_token;
      const refresh_token = res?.data.refresh_token;
      setAuth({ user, pwd, access_token, refresh_token });
      localStorage.setItem("access_token", res?.data.access_token);
      localStorage.setItem("refresh_token", res?.data.refresh_token);
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.res) {
        setErrMsg("No Server Response");
      } else if (err.res?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.res?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  // Login without social account
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: email, username: user, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const access_token = response?.data?.access_token;
      const refresh_token = response?.data?.refresh_token;
      setAuth({ user, pwd, access_token, refresh_token });
      localStorage.setItem("access_token", response?.data?.access_token);
      localStorage.setItem("refresh_token", response?.data?.refresh_token);
      // Clear the input fields
      setPwd("");
      setUser("");
      setEmail("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="font-Lato bg-[#F5F4FD]">
      <Navbar />
      <div className="md:flex md:justify-center lg:mx-[40px] lg:space-x-[30px] md:pt-10 md:pb-48">
        <div className="px-5 md:px-10 md:bg-white md:w-[610px] md:rounded-[40px] lg:rounded-tl-[40px] lg:rounded-bl-[40px] lg:rounded-tr-none lg:rounded-br-none">
          <h1 className="text-center text-[25px] font-bold pt-[40px]">
            Log in to Nadet
          </h1>
          <p className="font-normal text-base text-tcolor pt-[15px] text-center">
            Dont have an account?{" "}
            <Link to={"/signup"} className="text-bcolor">
              Create one for free.
            </Link>
          </p>
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
          <form onSubmit={handleSubmit} className="pt-10 space-y-5">
            <div className="flex flex-col">
              <label htmlFor="username" className="text-lg font-normal">
                Username or Email
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                value={user || email}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                className="h-[50px] w-full rounded-lg outline-none border-[1px] px-5 text-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-lg font-normal">
                Password
              </label>
              <div className="flex items-center relative">
                <input
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  type={showPassword ? "text" : "password"}
                  required
                  className="outline-none h-[50px] w-full px-5 rounded-lg border-[1px] text-lg "
                />
                {showPassword ? (
                  <div className="flex items-center">
                    <EyeIcon
                      onClick={handleClick}
                      className="w-[20px] md:w-[25px] absolute right-10 cursor-pointer"
                    />
                  </div>
                ) : (
                  <div className="flex items-center">
                    <EyeOffIcon
                      onClick={handleClick}
                      className="w-[20px] md:w-[25px] absolute right-10 cursor-pointer"
                    />
                  </div>
                )}
              </div>
            </div>
            <p>
              <Link
                to={"/forgot-password"}
                className="text-bcolor underline font-bold text-base"
              >
                Forgot password?
              </Link>
            </p>

            <div className="flex justify-center md:pt-[11px]">
              <button className="bg-bcolor h-[50px] w-[335px] md:w-full rounded-lg text-base font-bold">
                Log in
              </button>
            </div>
            <div className="flex items-center pt-5 justify-center space-x-[15px]">
              <hr className="border-tcolor w-[75px] md:w-[200px] lg:w-[150px]" />
              <p className="text-sm font-normal lg:text-base">
                or continue with
              </p>
              <hr className="border-tcolor w-[75px] md:w-[200px] lg:w-[150px]" />
            </div>
            <div className="flex justify-center items-center space-x-[45px] pt-5 pb-[79px] lg:pb-[65px]">
              <GoogleLogin
                clientId="1047637905977-gpe6krq8c6uhu4f8mt3ijh4ndhfubr0t.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <img
                      src={google}
                      alt="logo"
                      className="h-[24px] w-[24px] object-contain cursor-pointer"
                    />
                  </button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
              <img
                src={facebook}
                alt="logo"
                className="h-[24px] w-[24px] object-contain cursor-pointer"
              />
              <img
                src={twitter}
                alt="logo"
                className="h-[24px] w-[24px] object-contain cursor-pointer"
              />
            </div>
          </form>
        </div>
        <div className="hidden lg:block">
          <img
            src={rectangle33}
            alt="img"
            className="object-contain lg:w-[720px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
