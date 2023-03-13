//import { PaperAirplaneIcon, PaperClipIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
//import Dropzone from 'react-dropzone';
import MessageFormUI from './MessageFormUI';


const StandardMessageForm = ({props, activeChat}) => {
    console.log("props",props);
    console.log("activeChat",activeChat);
    const [message, setMessage] = useState("");
    const [attachment,setAttachment] = useState("");
    //const [preview,setPreview] = useState("");
    const handleChange = (e) => setMessage(e.target.value);

    const handleSubmit = async () => {
        const date = new Date().toISOString()
        .replace("T"," ")
        .replace("Z",`${Math.floor(Math.random() * 10000)}+00:00`);
        
        const at = attachment ? [{blob: attachment, file: attachment.name}] :[];
        const form = {
            attachments: at,
            created: date,
            sender_username: props.username,
            text: message,
            activeChatId: activeChat.id,

        }
        props.onSubmit(form);
        setMessage("");
        setAttachment("");
     };


  return (
    <MessageFormUI 
    onSubmit={setAttachment} 
    message={message}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    />

  );
};

export default StandardMessageForm;