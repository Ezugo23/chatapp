import { useState, useRef } from 'react';
import './App.css';
import {Auth} from "./component/Auth";
import {Chat} from "./component/Chat";
import Cookies from "universal-cookie";
import {auth} from "./firebase-config"

import {signOut} from "firebase/auth"
const cookies = new Cookies()

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
      await signOut(auth)
      cookies.remove("auth-token")
      setIsAuth(false);
      setRoom(null);
  };

  if (!isAuth) {
    return (
      <div className="">
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }

  return <>
          {room ? (<Chat room={room}/> 
        ):( 
  <div className="">
       <label>Enter room name</label>
            <input ref={roomInputRef}/>
            <button onClick={() => setRoom(roomInputRef.current.value)}> 
            Enter Chat</button>
      </div>
      )} 
      <div className="">
        <button onClick={signUserOut}>Sign-Out</button>
      </div>
    </>
}

export default App;
