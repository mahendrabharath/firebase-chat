
import { createContext, useReducer } from "react";

const initialMessages = {
    messages: [],
    receiver: {
        name: '',
        userName: '',
        userID: ''
    },
    messagesDocPath: ''
}

export const MessageContext = createContext(initialMessages);


export const MessageProvider = props => {
    const [state, dispatch] = useReducer(messageReducer, initialMessages);
    // console.log('dispatch ',dispatch)
    return <MessageContext.Provider value={{ ...state, dispatch }}>
        {props.children}
    </MessageContext.Provider>;
};

const messageReducer = (state = initialMessages, action) => {
    switch (action.type) {
        case 'SET_RECEIVER_DETAILS': {
            return {
                ...state, receiver: {
                    name: action.payload.name,
                    userName: action.payload.userName,
                    userID: action.payload.userID
                }
            }
        }
        case 'SET_MESSAGE_DOC_URL': {
            return {
                ...state, messagesDocPath: action.payload.path
            }
        }
        default: return { ...state };
    }
};
