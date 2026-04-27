import ProfilePic from "../pages/ProfilePic.tsx";

function UserCon() {
    return (
        <div
            className="w-full max-w-lg h-13 flex items-center bg-prussianblue border  gap-2 rounded-lg text-white px-3">
            <ProfilePic src={undefined} latter="A"/>
            <div className="bg-gray-950 flex flex-col">
                <h2 className="text-sm bg-blue-600 font-bold">John</h2>
                <small className="bg-red-400">Online</small>
            </div>
        </div>
    );
}

export default UserCon;