import React from 'react'

function Icon({ theme }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      x="0"
      y="0"
      enableBackground="new 0 0 460.298 460.297"
      version="1.1"
      viewBox="0 0 460.298 460.297"
      xmlSpace="preserve"
      className={`${theme === 'dark' ? 'Dark-theme' : 'Light-theme'}`}
    >
      <path d="M230.149 120.939L65.986 256.274c0 .191-.048.472-.144.855-.094.38-.144.656-.144.852v137.041c0 4.948 1.809 9.236 5.426 12.847 3.616 3.613 7.898 5.431 12.847 5.431h109.63V303.664h73.097v109.64h109.629c4.948 0 9.236-1.814 12.847-5.435 3.617-3.607 5.432-7.898 5.432-12.847V257.981c0-.76-.104-1.334-.288-1.707L230.149 120.939z"></path>
      <path d="M457.122 225.438L394.6 173.476V56.989c0-2.663-.856-4.853-2.574-6.567-1.704-1.712-3.894-2.568-6.563-2.568h-54.816c-2.666 0-4.855.856-6.57 2.568-1.711 1.714-2.566 3.905-2.566 6.567v55.673l-69.662-58.245c-6.084-4.949-13.318-7.423-21.694-7.423-8.375 0-15.608 2.474-21.698 7.423L3.172 225.438c-1.903 1.52-2.946 3.566-3.14 6.136-.193 2.568.472 4.811 1.997 6.713l17.701 21.128c1.525 1.712 3.521 2.759 5.996 3.142 2.285.192 4.57-.476 6.855-1.998L230.149 95.817l197.57 164.741c1.526 1.328 3.521 1.991 5.996 1.991h.858c2.471-.376 4.463-1.43 5.996-3.138l17.703-21.125c1.522-1.906 2.189-4.145 1.991-6.716-.195-2.563-1.242-4.609-3.141-6.132z"></path>
    </svg>
  )
}

export default Icon
