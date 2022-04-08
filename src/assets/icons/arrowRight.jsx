import React from "react";

function Icon({theme}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="20"
      viewBox="0 0 11 20"
      className={`${(theme === 'dark') ? 'Dark-theme' : 'Light-theme'}`}
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-345 -3434)">
          <g transform="translate(100 3378)">
            <g transform="translate(238 54)">
              <path d="M24 24L0 24 0 0 24 0z" opacity="0.87"></path>
              <path
                fill="#1D1D1D"
                d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 000-1.41L9.15 2.98a1.25 1.25 0 00-1.77 0 1.25 1.25 0 000 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Icon;