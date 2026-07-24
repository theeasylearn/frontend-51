import { toast, Bounce } from 'react-toastify';

var options = {
    position: "bottom-center",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
}
export function showMessage(message ='Data Fetched') {
    toast.success(message, options);
}
export function showError(message = 'could not fetch data, it seems you are offline or server is not available') {
    toast.error(message, options);
}