import './index.css'
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useState } from 'react'
import { v4 as uuidv4} from 'uuid';

const Chat = ({name, authorId}) => {
    const params = useParams()
    const [newMessage, setNewMessage] = useState('')
    const [messages, setMessages] = useState([])
    const sendMessageHandler = () => {
        setMessages((prev) => [...prev, {authorId, name, message: newMessage}]);
        setNewMessage('')
    }
    return (
        <>
            <p className='chatRoomTitle'>{`Welcome ${name!==''?name:'??'} to chat room ${params?.chatRoomId}`}</p>
            <div className='messageBoard'>

                <div className="messages">
                    {messages?.map((message) => (
                        <div key={uuidv4()} className={authorId === message?.authorId?'myMessage':'yourMessage'}>
                            <p className='messageAuthor'>{message?.name !== ''?message?.name.slice(0, 10): '??'}</p>
                            <p className='messageText'>{message?.message}</p>
                        </div>
                    ))}
                </div>
                <div className='sendMessage'>
                    <input value={newMessage} onChange={(e) => {setNewMessage(e.target.value)}}/>
                    <button onClick={() => {sendMessageHandler()}}>Send</button>
                </div>
            </div>
        </>
    )
}

export default Chat
