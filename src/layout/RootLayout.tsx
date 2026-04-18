import {Outlet} from "react-router-dom";

function RootLayout() {
    return (
        <div className="bg-gray-950 h-screen w-screen">
            <Outlet/>
        </div>
    );
}

export default RootLayout;