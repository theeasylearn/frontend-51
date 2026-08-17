import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const [, , removeCookie] = useCookies(['theeasylearn']);
    const navigate = useNavigate();

    useEffect(() => {
        removeCookie('userid'); //remove cookie userid from cookies
        navigate('/login'); //redirect to login page
    }, [removeCookie, navigate]);

    return null;
}