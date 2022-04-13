import { immediateToast } from 'izitoast-react'

const useToast = ({ message, type, color = undefined, bkgColor }) => {
  immediateToast(type, {
    backgroundColor: bkgColor,
    color: color,
    drag: true,
    pauseOnHover: false,
    closeOnClick: true,
    position: 'bottomCenter',
    message: message,
  })
}

export { useToast }
