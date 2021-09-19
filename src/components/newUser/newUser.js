import React, { useState } from 'react';
import firebase from "firebase/app";
import TextInput from '../../UIControls/TextInput/TextInput';
import Button from '../../UIControls/Button/Button';
import './newUser.css'


const NewUser = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const addUser = () => {
        debugger
        console.log('rest ')
        var db = firebase.firestore();
        db.collection('users').add({
            name: userName,
            password
        }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    // const uploadImage = () => {
    //     var storage = firebase.storage();
    //     var imagesRef = storageRef.child('images');

    // }

    return <div>
        <h1>Register user</h1>
        <TextInput type='text' placeholder='Name' value={userName} onChange={e => setUserName(e.target.value)} />
        <TextInput type='text' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
        <div className='new-user__add__wrapper'>
            <Button label='Add me' onClick={addUser} />
        </div>
        <a href='/' style={{fontSize: '22px', display: 'inline'}}>Back</a>
    </div>
}

export default NewUser;