import LeftChatPanel from "../components/LeftChatPanel.tsx";
import RightChatPanel from "../components/RightChatPanel.tsx";

function ChatScreen() {
    return (
        <div className="w-full h-full flex">
            <LeftChatPanel/>
            <RightChatPanel/>
        </div>
    );
}

export default ChatScreen;