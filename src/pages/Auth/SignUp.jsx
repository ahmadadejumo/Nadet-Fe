import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { EyeOffIcon } from "@heroicons/react/outline";
import { EyeIcon } from "@heroicons/react/outline";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import rectangle32 from "../../assets/images/rectangle32.png";
import { Link } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const FULL_REGEX = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    if (agree === true) {
      return setAgree(agree);
    } else {
      setAgree(!agree);
    }
    // if agree === false, it will be set to true
  };

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [fullName, setFullName] = useState("");
  const [validFullName, setValidFullName] = useState(false);
  const [fullNameFocus, setFullNameFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  const userRef = useRef();
  const emailRef = useRef();
  const fullNameRef = useRef();
  const errRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    fullNameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidFullName(FULL_REGEX.test(fullName));
  }, [fullName]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd, email, fullName]);

  const handleClick = () => {
    return setShowPassword(showPassword ? false : true);
  };
  return (
    <div className="font-Lato bg-[#F5F4FD]">
      <Navbar />
      <div className="md:flex md:justify-center lg:mx-[40px] lg:space-x-[30px] md:pt-10 md:pb-14">
        <div className="px-5 md:px-10 md:bg-white md:w-[610px] md:rounded-[40px] lg:rounded-tl-[40px] lg:rounded-bl-[40px] lg:rounded-tr-none lg:rounded-br-none">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="text-center text-[25px] font-bold pt-[100px]">
            Create Your Free Account
          </h1>
          <p className="font-normal text-base text-tcolor pt-[15px] text-center">
            Already have an account?{" "}
            <Link to={"/signin"} className="text-bcolor">
              Login.
            </Link>
          </p>
          <form className="pt-10 space-y-5">
            <div className="flex flex-col">
              <label htmlFor="username" className="text-lg font-normal">
                Username
              </label>
              <input
                type="text"
                required
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                className="h-[50px] w-full rounded-lg outline-none border-[1px] px-5 text-lg"
              />
              <div
                className={`${
                  userFocus && user && !validName ? "block" : "hidden"
                } rounded-lg mt-2 bg-hcolor`}
              >
                <p className=" px-3 py-3 text-tcolor font-normal text-sm">
                  4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-normal">
                Email Address
              </label>
              <input
                id="email"
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                type="email"
                required
                className="h-[50px] w-full rounded-lg outline-none border-[1px] px-5 text-lg"
              />
              <div
                className={`${
                  emailFocus && email && !validEmail ? "block" : "hidden"
                } rounded-lg mt-2 bg-hcolor`}
              >
                <p className=" px-3 py-3 text-tcolor font-normal text-sm">
                  4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="full name" className="text-lg font-normal">
                Full name
              </label>
              <input
                type="text"
                id="full name"
                ref={fullNameRef}
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                required
                aria-invalid={validFullName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setFullNameFocus(true)}
                onBlur={() => setFullNameFocus(false)}
                className="h-[50px] w-full rounded-lg outline-none border-[1px] px-5 text-lg"
              />
              <div
                className={`${
                  fullNameFocus && fullName && !validFullName
                    ? "block"
                    : "hidden"
                } rounded-lg mt-2 bg-hcolor`}
              >
                <p className=" px-3 py-3 text-tcolor font-normal text-sm">
                  4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
              </div>
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
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
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
              <label htmlFor="password" className="text-lg font-normal">
                Confirm password
              </label>
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                className="h-[50px] w-full rounded-lg outline-none border-[1px] px-5 text-lg"
              />
              <div
                className={`${
                  matchFocus && !validMatch ? "block" : "hidden"
                } rounded-lg mt-2 bg-hcolor`}
              >
                <p className=" px-3 py-3 text-tcolor font-normal text-sm">
                  Must match the first password input field.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-[15px]">
              <input
                type="checkbox"
                onChange={checkboxHandler}
                className="h-[24px] w-[24px] "
              />
              <label for="checkbox" className="font-normal text-base">
                I Accept{" "}
                <Link
                  to={"/terms-&-condition"}
                  className="text-bcolor underline"
                >
                  Terms And Condition
                </Link>
              </label>
            </div>
            <div className="flex justify-center md:pt-[11px]">
              <button
                disabled={
                  !validName ||
                  !validEmail ||
                  !validFullName ||
                  !validPwd ||
                  !validMatch ||
                  !agree
                    ? true
                    : false
                }
                className="bg-bcolor h-[50px] w-[335px] md:w-full rounded-lg text-base font-bold"
              >
                Create Account
              </button>
            </div>
            <div className="flex items-center pt-5 justify-center space-x-[15px]">
              <hr className="border-tcolor w-[75px] md:w-[200px] lg:w-[150px]" />
              <p className="text-sm font-normal lg:text-base">
                or continue with
              </p>
              <hr className="border-tcolor w-[75px] md:w-[200px] lg:w-[150px]" />
            </div>
            <div className="flex justify-center items-center space-x-[45px] pt-5 pb-[79px]">
              <img
                src={google}
                alt="logo"
                className="h-[24px] w-[24px] object-contain cursor-pointer"
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
            src={rectangle32}
            alt="img"
            className="object-contain lg:w-[720px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
