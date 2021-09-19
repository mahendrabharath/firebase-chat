import React, { useContext, useState } from 'react';
import { UserProfileContext } from '../../store/userContext';
import firebase from "firebase/app";
import TextInput from '../../UIControls/TextInput/TextInput';
import './Login.css';

const Login = () => {
    const { loginStatus, dispatch, name } = useContext(UserProfileContext);
    const [userID, setuserID] = useState('')
    const [password, setPassword] = useState('')
    var db = firebase.firestore()

    const login = () => {
        db.collection('users').doc(userID).get().then((querySnapshot) => {
            const result = querySnapshot.data();
            // setUserList(result);
            console.log('messages list ', result)
            dispatch({
                type: 'USER_LOGIN', payload: {
                    name: result.name,
                    loggedInTime: new Date(),
                    userStatus: "Online",
                    loginStatus: 'Logged in',
                    userID
                }
            })
        }).catch(err => console.log('Oops ', err))
    }

    if (!loginStatus) {
        return <div>
            <div>
                <span className='login--header__title'>Lets login</span>
                <TextInput placeholder='Enter userID' value={userID} onChange={e => setuserID(e.target.value)} />
                <TextInput placeholder='Enter password' value={password} onChange={e => setPassword(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && login(e.target.value)}
                />
            </div>
        </div>
    }

    return <h3>{name}</h3>
}

export default Login;