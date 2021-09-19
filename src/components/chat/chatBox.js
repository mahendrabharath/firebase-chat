import React, { useContext, useEffect, useState } from 'react';
import { UserProfileContext } from '../../store/userContext';
import firebase from "firebase/app";
import { MessageContext } from '../../store/messageContext';
import TextInput from '../../UIControls/TextInput/TextInput';
import Button from '../../UIControls/Button/Button';

const ChatBox = () => {
    const { receiver: { userName: receiverName }, messagesDocPath } = useContext(MessageContext);
    const { name: userName, userID } = useContext(UserProfileContext);
    const [messageList, setMessageList] = useState([]);
    const [messageText, setMessageText] = useState('');
    var db = firebase.firestore()

    useEffect(() => {
        // console.log({userID, receiverUserID})
        console.log("messagesDocPath ", messagesDocPath)
        if (messagesDocPath) {
            db.collection(messagesDocPath).get().then((querySnapshot) => {
                const result = querySnapshot.docs.map(doc => doc.data());
                setMessageList(result);
                console.log('Receiver messages ', result)
            }).catch(err => console.log('Oops ', err))

            db.collection(messagesDocPath).orderBy("time", "asc").onSnapshot(doc => {
                const result = doc.docs.map(doc => doc.data());
                setMessageList(result);
                // console.log('u')
            })
        }

    }, [db, messagesDocPath]);


    const sendMessage = () => {
        if (!messageText) return;
        db.collection(messagesDocPath).add({
            message: messageText,
            time: new Date(),//'July 19, 2021 at 12:00:00 AM UTC+5:30'
            user: userID
        }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    if (!receiverName) return null;
    // console.log('ChatBox dis', messageProps)
    return <div className='chat-box-container'>
        <h3 className="chat-box-title">{receiverName}</h3>
        <div className="chat-box">
            <div>
                {!!messageList.length && messageList.map((el, i) => <p key={i} className={el.user === userID ? 'profile right' : 'profile left'}>
                    {el.user === userID ? `${el.message} <- ${userName}` : `${receiverName} -> ${el.message}`}  { }
                </p>)}
            </div>
            <div className='message-ui-control'>
                <TextInput className='test' placeholder='start typing...' type='text' value={messageText} onChange={e => setMessageText(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && sendMessage()}
                />
                <Button className='send-btn' onClick={sendMessage} label={'Send'} />
            </div>
        </div>
    </div>
}

export default ChatBox;