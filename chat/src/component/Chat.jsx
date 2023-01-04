
import React, {useState, useRef, useEffect} from 'react'
import Message from "./Message"
import SendMessage from './SendMessage'

import {db} from "../firebase"
import {query, collection, orderBy, onSnapshot} from "firebase/firestore"



const style = {
    main: `flex flex-col p-[10px] `
};

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db,"messages"), orderBy("timestamp"))
        const unsubscrib = onSnapshot(q, (QuerySnapshot) => {
            let messages = [];
            QuerySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id});
            });
            setMessages(messages);
            
        })
        return () => unsubscrib();
    }, []);

  return (
    <>
    <main className={style.main}>

        {messages && 
        messages.map((message) =>(
            <Message key={messages.id} message={message}/>

        ))}

        
    </main>
    {/* Send Message Coponent */}
    <SendMessage scroll={scroll}/>
    <span ref={scroll}></span>
    </>
  )
}

export default Chat
