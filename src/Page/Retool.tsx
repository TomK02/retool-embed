import { useContext } from "react";
import UserContext from "../context/user";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Retool() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setUser(null);
    await auth.signOut();
    navigate("/");
  };

  return (
    <main style={{ padding: "12px" }}>
      <section>
        <h1>Embed Retool below: </h1>
      </section>

      <section>
        <button
          onClick={handleLogout}
          style={{ width: "100%", margin: "0 auto" }}
        >
          Logout
        </button>
      </section>
    </main>
  );
}

export default Retool;
