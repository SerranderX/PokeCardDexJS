import React from 'react'

function Icon({ theme }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
      viewBox="1 1 48 48"
      className={`${theme === 'dark' ? 'Dark-theme' : 'Light-theme'}`}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zM11.522 19.878h5.438V36.22h-5.438V19.878zm5.797-5.055C17.284 13.22 16.138 12 14.277 12c-1.86 0-3.077 1.22-3.077 2.823 0 1.569 1.18 2.824 3.006 2.824h.035c1.897 0 3.078-1.255 3.078-2.824zm12.994 4.671c3.58 0 6.262 2.336 6.262 7.356v9.37h-5.439v-8.743c0-2.196-.787-3.695-2.755-3.695-1.503 0-2.398 1.01-2.791 1.986-.144.35-.18.837-.18 1.325v9.127h-5.439s.072-14.808 0-16.342h5.44v2.315c.721-1.113 2.014-2.699 4.902-2.699z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Icon
