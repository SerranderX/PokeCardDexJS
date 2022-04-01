import React from "react";

function Icon({theme}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
      viewBox="1 1 48 48"
      className={`${(theme === 'dark') ? 'Dark-theme' : 'Light-theme'}`}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm2.502 25.054v13.058h-5.403V25.054H18.4v-4.5h2.7v-2.701c0-3.671 1.523-5.854 5.853-5.854h3.605v4.5h-2.253c-1.686 0-1.797.629-1.797 1.802l-.006 2.253h4.082l-.478 4.5h-3.604z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;