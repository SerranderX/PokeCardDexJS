import React from 'react'

function Icon({ theme }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 32 32"
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      className={`${theme === 'dark' ? 'Dark-theme' : 'Light-theme'}`}
    >
      <path d="M16 7c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .6.4 1 1 1zM8.2 9.6c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L7.5 6.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.1 2.1zM3 17h3c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1zM25 16c0 .6.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1h-3c-.6 0-1 .4-1 1zM23.1 9.9c.3 0 .5-.1.7-.3l2.1-2.1c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-2.1 2.1c-.4.4-.4 1 0 1.4.2.2.4.3.7.3zM8.8 19.4c.1.4.5.6.9.6h12.6c.4 0 .7-.2.9-.6.5-1.1.8-2.2.8-3.4 0-4.4-3.6-8-8-8s-8 3.6-8 8c0 1.2.3 2.3.8 3.4zM29 22H3c-.6 0-1 .4-1 1s.4 1 1 1h26c.6 0 1-.4 1-1s-.4-1-1-1zM19 26H7c-.6 0-1 .4-1 1s.4 1 1 1h12c.6 0 1-.4 1-1s-.4-1-1-1zM25 26h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1z"></path>
    </svg>
  )
}

export default Icon
