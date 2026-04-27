import ProfilePic from "./ProfilePic.tsx";

function UserCon() {
    return (
        <div
            className="w-full max-w-lg h-13 flex items-center bg-prussianblue border  gap-2 rounded-lg text-white px-3">
            <ProfilePic src={undefined} latter="A"/>
            <div className="flex flex-col">
                <h2 className="text-sm font-bold">John</h2>
                <small className="">Online</small>
            </div>
        </div>
    );
}

export default UserCon;