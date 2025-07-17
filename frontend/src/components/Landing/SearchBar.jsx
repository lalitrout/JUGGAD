import React from "react";
import "./SearchBar.css";
import Search from "./Search.jsx";

const SearchBar = () => {
  return (
    <div>
      <div
        className="Dk9TVqv"
        data-impression-item="f54836f2-39a0-406e-9d1d-5a171495f516"
        impressed-item="true"
      >
        <div className="_1rfvtgw16n _1rfvtgw0 _1rfvtgw11i _1rfvtgw195 _1rfvtgw1b8">
          <h1
            className="_1v0vd7jk _1rfvtgw1hr _1rfvtgw2 _1x8midc0"
            style={{ "--_1v0vd7j0": "var(--mqvym5d)", fontWeight: 280 }}
          >
            Our{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, #0d47a1,  #90caf9, #1976d2, #42a5f5, #2196f3, #1e88e5, #1e88e5, #1976d2, #1565c0, #0d47a1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 280,
              }}
            >
              juggad
            </span>{" "}
            helpers <br />
            will take it from here
          </h1>

          <div
            className="_19aaquz1j _19aaquz1l _19aaquz1m _19aaquz1n _1rfvtgw0"
            style={{
              "--_19aaquz0": "100%",
              "--_19aaquz2": "436px",
              "--_19aaquz3": "560px",
              "--_19aaquz4": "616px",
            }}
          >
            <div className="_1rfvtgw0 search-bar-package search_bar-package">
              <form className="search-form button-inside">
                <Search />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
