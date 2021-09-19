import React, { useContext, useEffect, useState } from 'react';
import firebase from "firebase/app";
import { withRouter } from "react-router";
import { UserProfileContext } from '../../store/userContext';
import { MessageContext } from '../../store/messageContext';

const ChatList = props => {
    var db = firebase.firestore()
    const { dispatch } = useContext(MessageContext);
    const { userID } = useContext(UserProfileContext);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        db.collection('users').get().then((querySnapshot) => {
            const result = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setUserList(result);
            // console.log('users list ', result)
        }).catch(err => console.log('Oops ', err))
    }, [db])


    const setChatRoom = (receiver) => {
        db.collection('users').doc(userID).collection('conversations').doc(receiver.id).get().then(querySnapshot => {
                const receiverMessageFields = querySnapshot.data();
                if (querySnapshot.exists && receiverMessageFields.reference) { // if reference exists use the existing reference
                dispatch({
                    type: 'SET_MESSAGE_DOC_URL',
                    payload: {
                        path: receiverMessageFields.url
                    }
                })
            } else { // if reference doesnt exist, then create a new document for message with sender's and receiver's user ID
                const docURL = "/users/" + userID + "/conversations/" + receiver.id + "/messages";
                // adds reference collection to the receiver end.
                db.collection('users').doc(receiver.id).collection('conversations').doc(userID).set({
                    reference: true,
                    url: docURL
                })
                dispatch({
                    type: 'SET_MESSAGE_DOC_URL',
                    payload: {
                        path: docURL
                    }
                })
            }
        }).catch(err => console.log('err ', err))
        dispatch({
            type: 'SET_RECEIVER_DETAILS',
            payload: {
                name: receiver.name,
                userName: receiver.name,
                userID: receiver.id
            }
        })
    }

    // console.log(userList)

    return <div className='chat-list'>
        <div>
            <h3><ul>pick a contact</ul></h3>
            <div>{userList.filter(el => el.id !== userID).map((el, i) => <p key={i} onClick={e => setChatRoom(el)}>{el.name}</p>)}</div>
        </div>
    </div>
}

export default withRouter(ChatList);