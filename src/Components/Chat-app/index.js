import React, { useRef, useState } from 'react';
import "./Chat-app.css"

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyC6PpxF_NwVp1ypD6NzIhKmFXZ3QT8PYt4",
    authDomain: "chat-travel-57088.firebaseapp.com",
    projectId: "chat-travel-57088",
    storageBucket: "chat-travel-57088.appspot.com",
    messagingSenderId: "422828769745",
    appId: "1:422828769745:web:8a3c02002fab3e7783e0f0"
})

const auth = firebase.auth();
const firestore = firebase.firestore();



function ChatApp() {

  const [user] = useAuthState(auth);

  return (
    <div className="ChatApp">
      <header className="ChatAppHeader">
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section className="ChatAppSection">
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage} className="ChatAppform">

      <input id="textsender" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button className="ChatAppformBtn" type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p className="ChatAppp">{text}</p>
    </div>
  </>)
}


export default ChatApp;
