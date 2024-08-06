import "./App.css";

function App() {
  return (
    <main className="container">
      <section className="box">
        <form className="form-layout">
          <div className="flex-box">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="flex-box">
            <label htmlFor="name">Password:</label>
            <input type="password" id="name" name="name" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}

export default App;
