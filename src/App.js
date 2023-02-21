import "./App.scss";
import React from "react";
import SearchForm from "./components/SearchForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="title-area">
        <h1>Movie Information Searcher</h1>
        <p>
          Here you'll search for the movies that you want to learn more about,
          if the movie exists on our databases, the information will appear
          bellow
        </p>
      </div>
      <SearchForm />
      <Footer />
    </>
  );
}

export default App;
