import {Outlet} from "react-router-dom";

function RootLayout() {
    return (
        <div className="bg-inkblack h-screen w-screen">
            <Outlet/>
        </div>
    );
}

export default RootLayout;