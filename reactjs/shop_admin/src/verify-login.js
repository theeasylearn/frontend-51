import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function useVerifyLogin() {
    const [cookies] = useCookies(['theeasylearn']);
    const navigate = useNavigate();

    useEffect(() => {
        //check whether userid cookies exists or not. if not redirect to login
        if (cookies['userid'] === undefined) {
            navigate('/login');
        }
    }, [cookies, navigate]);
}