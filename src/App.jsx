import React, { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="/hero.png" alt="hero bg" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle{" "}
          </h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="white">{searchTerm}</h1>
      </div>
    </main>
  );
};
export default App;
