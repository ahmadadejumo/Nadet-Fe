import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, persist } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    !auth?.access_token ? verifyRefreshToken() : setIsLoading(false);
  }, [auth?.access_token, refresh]);

  useEffect(() => {
    console.log(`isLoading: ${isLoading}`);
    console.log(`aT: ${JSON.stringify(auth?.access_token)}`);
  }, [auth?.access_token, isLoading]);

  return <div>{isLoading ? <p>Loading...</p> : <Outlet />}</div>;
};

export default PersistLogin;
