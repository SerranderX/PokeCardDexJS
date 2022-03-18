import React from "react";

function Icon(theme) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 24 24"
      className={`${(theme === 'dark') ? 'Dark-theme' : 'Light-theme'}`}
    >
      <path d="M12 1.25C6.067 1.25 1.25 6.067 1.25 12S6.067 22.75 12 22.75 22.75 17.933 22.75 12 17.933 1.25 12 1.25zM12 10a1.503 1.503 0 00-1.5 1.5V18a1.503 1.503 0 001.5 1.5 1.503 1.503 0 001.5-1.5v-6.5A1.503 1.503 0 0012 10zm0-5.75a1.75 1.75 0 11-.001 3.501A1.75 1.75 0 0112 4.25z"></path>
    </svg>
  );
}

export default Icon;