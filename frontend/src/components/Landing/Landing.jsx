import React from "react";
import SearchBar from "./SearchBar.jsx";
import CategoriesBlock from "./CategoriesBlock.jsx";
import Services from "./Services.jsx";
import Banner from "./Banner.jsx";
import TaskHighlights from "./TaskHighlights.jsx";
import SatisfactionGuarantee from "./SatisfactionGurantee.jsx";

function Landing() {
  return (
    <>
      <SearchBar />
      <div style={{ marginTop: "-80px", zIndex: 10, position: "relative" }}>
        <CategoriesBlock />
      </div>

      <Services />
      <TaskHighlights />
      <SatisfactionGuarantee />
      <Banner />
    </>
  );
}

export default Landing;
