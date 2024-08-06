import { useContext, useEffect, useState } from "react";
import UserContext, { UserProvider } from "./context/user";
import { auth } from "./firebase";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function AppRoot() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setLoading(false);

      if (user) setUser(user);
    });

    return () => unsub();
  }, [setUser]);

  if (user && loading) return <p>loading...</p>;

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default AppRoot;
