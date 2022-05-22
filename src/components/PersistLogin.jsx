import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import { RotatingLines } from "react-loader-spinner";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    !auth?.access_token ? verifyRefreshToken() : setIsLoading(false);

    return () => (isMounted = false);
  }, [auth?.access_token, refresh]);

  useEffect(() => {}, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <div className="fixed left-0 top-0 bottom-0 right-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
          <RotatingLines strokeColor="#FBBC15" height={70} width={70} />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default PersistLogin;
