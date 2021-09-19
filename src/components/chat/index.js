import React from 'react';
import { MessageProvider } from '../../store/messageContext';
// import { UserProfileContext } from '../../store/userContext';
import ChatBox from './chatBox';
import ChatList from './chatList';
import './chat.css';

const ChatRoom = () => {
    // const { name: userName } = useContext(UserProfileContext);
    return <div>
        <MessageProvider>
            <div>
                <h1>Chatroom</h1>
                {/* <span>{userName}</span> */}
            </div>
            <div className='chat-elements-container'>
                <ChatList />
                <ChatBox />
            </div>
        </MessageProvider>
    </div>
}


export default ChatRoom;