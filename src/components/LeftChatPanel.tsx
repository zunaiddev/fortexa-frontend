import SearchInput from "./SearchInput.tsx";

function LeftChatPanel() {
    return (
        <div className=" h-full sm:w-screen sm:max-w-sm p-2 absolute w-screen bg-green-950 sm:relative">
            <SearchInput/>
        </div>
    );
}

export default LeftChatPanel;