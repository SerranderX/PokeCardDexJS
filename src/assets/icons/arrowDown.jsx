import React from "react";

function Icon(theme) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="36"
      viewBox="0 0 12 5"
      className={`${(theme === 'dark') ? 'Dark-theme' : 'Light-theme'}`}
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-616 -2467)">
          <g transform="translate(100 2404)">
            <g transform="translate(510 54)">
              <path d="M0 0H24V24H0z"></path>
              <path
                fill="#1D1D1D"
                d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 111.41 1.41l-4.59 4.59a.996.996 0 01-1.41 0L6.7 10.7a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Icon;