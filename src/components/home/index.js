import { useContext } from "react";
import { ThemeContext } from "../../store/themeContext";
// import firebase from "firebase/app";
import { withRouter } from "react-router";
// import { ChatIcon } from "../../UIControls/SVGs/ChatIcon";
import Button from "../../UIControls/Button/Button";

const HomeComponent = (props) => {
    const { backgroundColor } = useContext(ThemeContext);

    // const add = () => {
    //     var db = firebase.firestore()
    //     db.collection("text").add({
    //         first: "Ada",
    //         last: "Lovelace",
    //         born: 1815
    //     })
    //     .then((docRef) => {
    //         console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch((error) => {
    //         console.error("Error adding document: ", error);
    //     });
    // }

    return <div style={{width: '100%', backgroundColor, display: 'flex', flexDirection: "column" }}>
        <div className='image-container'>
            <img className='welcome-image' alt='welcome' src='/assets/images/Chat-Icon.gif' />
            {/* <ChatIcon /> */}
            {/* <img className='welcome-image' alt='welcome' src='/assets/images/welcomeImage1.jpeg' /> */}
        </div>
        {/* <button onClick={() => dispatch({type: 'CHANGE_THEME'})}>Change</button> */}
        {/* <button >Start</button> */}
        <Button onClick={() => props.history.push('/chatRoom')} label={'Start'}></Button>
    </div>
}

export default withRouter(HomeComponent);