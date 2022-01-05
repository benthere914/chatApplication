import './index.css'
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useState } from 'react'

const Chat = ({name, authorId}) => {
    const params = useParams()
    const [newMessage, setNewMessage] = useState('')
    const [messages, setMessages] = useState([])
    const sendMessageHandler = () => {

    }
    return (
        <>
            <p className='chatRoomTitle'>{`Welcome ${name} to chat room #${params?.chatRoomId}`}</p>
            <div className='messageBoard'>

                <div className="messages">
                    {messages?.map((message) => (
                        <div className={authorId === message?.authorId?'myMessage':'yourMessage'}>
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