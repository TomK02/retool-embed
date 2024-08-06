import { useContext, useState } from "react";
import "./App.css";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import UserContext from "./context/user";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";

function App() {
  const [pageType, setPageType] = useState<"Login" | "Register">("Login");
  const [error, setError] = useState<string | null>(null);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    if (pageType === "Register") {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        setUser(userCredential.user);
        navigate("/retool");
      } catch (error) {
        console.error(error);

        if (error instanceof FirebaseError) {
          setError(error.message);
        }
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        setUser(userCredential.user);
        navigate("/retool");
      } catch (error) {
        console.error(error);
        if (error instanceof FirebaseError) {
          setError(error.message);
        }
      }
    }
  };

  const handleChange = () => {
    setError(null);
  };

  return (
    <main className="container">
      <h1>{pageType}</h1>
      <section className="box">
        <form className="form-layout" onSubmit={handleSubmit}>
          <div className="flex-box">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="flex-box">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
            <p className="error">{error}</p>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="btn-group">
        <button onClick={() => setPageType("Login")}>Login</button>
        <button onClick={() => setPageType("Register")}>Register</button>
      </section>
    </main>
  );
}

export default App;
