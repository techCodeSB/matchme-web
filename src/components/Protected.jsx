import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const Protected = () => {
    const navigate = useNavigate();
    const token = Cookies.get("mm-token");

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    return <Outlet />;
};

export default Protected;