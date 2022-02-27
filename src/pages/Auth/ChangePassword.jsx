import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import { EyeOffIcon } from "@heroicons/react/outline";
import { EyeIcon } from "@heroicons/react/outline";
import { Link, useParams } from "react-router-dom";
import rectangle35 from "../../assets/images/rectangle35.png";
import axios from "../../Api/axios";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { uid, token } = useParams();

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const errRef = useRef();

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [pwd, matchPwd]);

  const handleClick = () => {
    return setShowPassword(showPassword ? false : true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = PWD_REGEX.test(pwd);
    if (!v1) {
      setErrMsg("Invalid Password");
      return;
    }
    try {
      await axios.patch(
        "/auth/password-reset/change/",
        JSON.stringify({
          password: pwd,
          token: token,
          uidb64: uid,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // Clear input strings
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
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
            Create new password
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
          <p className="font-normal text-base text-tcolor pt-[15px] text-center">
            Reset your password with the new one of your choice below.
          </p>
          <form onSubmit={handleSubmit} className="pt-10 space-y-[30px]">
            <div className="flex flex-col">
              <label htmlFor="password" className="text-lg font-normal">
                New Password
              </label>
              <div className="flex items-center relative">
                <input
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
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
              <div
                className={`${
                  pwdFocus && !validPwd ? "block" : "hidden"
                } rounded-lg mt-2 bg-hcolor`}
              >
                <p className=" px-3 py-3 text-tcolor font-normal text-sm">
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters:{" "}
                  <span aria-label="exclamation mark">!</span>{" "}
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>{" "}
                  <span aria-label="dollar sign">$</span>{" "}
                  <span aria-label="percent">%</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirm password" className="text-lg font-normal">
                Confirm Password
              </label>
              <input
                id="confirm password"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                type="password"
                className="h-[50px] w-full rounded-lg outline-none border-[1px] px-5 text-lg"
              />
            </div>
            <div
              className={`${
                matchFocus && !validMatch ? "block" : "hidden"
              } rounded-lg mt-2 bg-hcolor`}
            >
              <p className=" px-3 py-3 text-tcolor font-normal text-sm">
                Must match the first password input field.
              </p>
            </div>
            <div className="flex justify-center md:pt-[11px]">
              <button className="bg-bcolor h-[50px] w-[335px] md:w-full rounded-lg text-base font-bold">
                Change Password
              </button>
            </div>
            <p className="font-normal text-tcolor text-base text-center pt-[10px] pb-48 md:pb-80 lg:pb-40">
              Remember your password?{" "}
              <Link to={"/signin"} className="text-bcolor font-bold">
                Sign in
              </Link>
            </p>
          </form>
        </div>
        <div className="hidden lg:block">
          <img
            src={rectangle35}
            alt="img"
            className="object-contain lg:w-[720px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
