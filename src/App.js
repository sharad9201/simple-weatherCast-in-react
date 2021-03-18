import React from 'react';

const api ={
  key:"351b380c2dd6c7b7b53a463f60feed87",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text"
              className="search-bar"
              placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
