import React from "react";
import SearchBar from "./SearchBar.jsx";
import CategoriesBlock from "./CategoriesBlock.jsx";
import Services from "./Services.jsx";
import Banner from "./Banner.jsx";
import TaskHighlights from "./TaskHighlights.jsx";


function Landing() {
  return (
    <>
        <SearchBar />
        <CategoriesBlock />
        <Services />
        <Banner />
        <TaskHighlights />
    </>
  );
}

export default Landing;
