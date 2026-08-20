// Higher order Component (function) 
import { useParams, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
//function
const withHooks = (Component) => {
    //inner arrow function
    const Wrapper = (props) => {
        const params = useParams();
        const navigate = useNavigate();
        const [cookies, setCookie, removeCookie] = useCookies();

        return (
            <Component
                {...props}
                params={params}
                navigate={navigate}
                cookies={cookies}
                setCookie={setCookie}
                removeCookie={removeCookie}
            />
        );
    };

    return Wrapper;
};

export default withHooks;