import toast from 'react-hot-toast';

const useToast = ({ message, type, color = undefined, bkgColor }) => {

  console.log(type)

  if(type === "success"){
    toast.success(message, {
      duration: 4000,
      position: 'top-center',
      style: {backgroundColor: bkgColor, color: 'black'},
      // Custom Icon
      icon: '👏',
    
      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },
    });
  } else if (type === "error") {
    toast.error(message, {
      duration: 4000,
      position: 'top-center',
      style: {backgroundColor: bkgColor, color: 'black'},
      // Custom Icon
      icon: '😓',
    
      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },
    });
  } else if (type === "info") {
    toast(message, {
      duration: 4000,
      position: 'top-center',
    
      // Styling
      style: {backgroundColor: bkgColor, color: 'black'},
      // Custom Icon
      icon: '⚠️',
    
      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },
    });
  }
}

export { useToast }
