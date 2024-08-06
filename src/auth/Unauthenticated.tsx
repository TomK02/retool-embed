import { useContext } from "react";
import UserContext from "../context/user";
import { Navigate } from "react-router-dom";

function Unauthenticated({ children }: { children: React.ReactNode }) {
  const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to="/retool" />;
  }

  return <>{children}</>;
}

export default Unauthenticated;