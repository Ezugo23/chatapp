import {  useEffect, useState } from "react";
import {addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy} from "firebase/firestore";
import {auth, db} from "../firebase-config";

export const Chat = (props) => {
  const {room} = props
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([])

    const messagesRef = collection(db, "messages")


    useEffect(() => {
      const queryMessages = query(messagesRef, where("room", "==", room), orderBy("createdAt"))
       const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
        let messages = [];
         snapshot.forEach((doc) => {
          messages.push({...doc.data(), id: doc.id});
         });
          setMessages(messages);
       });
       
         return () => unsuscribe();

    }, []);

  const handleSubmit = async (e) => {
     e.preventDefault();
     if(newMessage === "") return;
     
     await addDoc(messagesRef, {
      text: newMessage,
         createdAt: serverTimestamp(),
         user: auth.currentUser.displayName,
         room,
     });

     setNewMessage("")
  }
  return(
    <div className=""> 
    <div className="">
      <h1>Welcome to the {room.toUpperCase()}</h1>
      </div>
         <div className="messages">
            {messages.map((message) => 
              <div className="message" key={message.id}>
                <span className="">{message.user}</span>
                {message.text}

              </div>   
              )}
          </div>
    <form onSubmit={handleSubmit} className="">
      <input className="input" placeholder="Message" onChange={(e) => setNewMessage(e.target.value) } value={newMessage}/>
      <button type="submit" className="" >Send</button>
      </form>
       </div>
  )
}
