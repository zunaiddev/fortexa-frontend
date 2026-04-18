import {type Location, type NavigateFunction, Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

function AuthLayout() {
    const location: Location = useLocation();
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (location.pathname.endsWith("/auth")) {
            navigate("/auth/login");
        }
    }, [location.pathname, navigate]);

    return (
        <Outlet/>
    );
}

export default AuthLayout;