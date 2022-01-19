/** @format */

import React, { useEffect, useState } from "react";
import "./ListHeader.scss";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
export default function ListHeader() {
  const [selectedPage, setPage] = useState<string>("");
  useEffect(() => {
    if (window.location.pathname === "/") {
      setPage("Repositories");
    } else {
      setPage("Developers");
    }
  }, [window.location.pathname]);
  return (
    <div className='list-header-contianer'>
      <div className='list-header-contianer__navigation-btns'>
        <Link to='/'>
          <button
            className={`list-header-contianer__navigation-btns__reboBtn ${
              selectedPage === "Repositories" && "activeBtn"
            }`}>
            Repositories
          </button>
        </Link>
        <Link to='/developer'>
          <button
            className={`list-header-contianer__navigation-btns__devBtn ${
              selectedPage === "Developers" && "activeBtn"
            }`}>
            Developers
          </button>
        </Link>
      </div>
      <div className='list-header-contianer__leftDiv'>
        {selectedPage === "Repositories" ? (
          <span>
            Spoken Language: Any
            <IoMdArrowDropdown />
          </span>
        ) : null}

        <span>
          Language: Any
          <IoMdArrowDropdown />
        </span>
        <span>
          Date range: Today
          <IoMdArrowDropdown />
        </span>
      </div>
    </div>
  );
}
