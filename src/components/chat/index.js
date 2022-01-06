import './index.css';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from 'react';
import { v4 as uuidv4} from 'uuid';
import { io } from 'socket.io-client';
let socket;
const Chat = ({name, authorId}) => {
    const params = useParams()
    const [newMessage, setNewMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [users, setUsers] = useState(0)

    useEffect(() => {
        socket = io('http://localhost:5000');
        socket.emit('joinRoom', params?.chatRoomId)
        socket.on('updateRoomNumber', (inRoom) => {setUsers(inRoom)})
        socket.on("chat", (chat) => {setMessages((prev) => [...prev, chat])})
        return (() => {socket.disconnect()})
    }, [params])

    const sendMessageHandler = () => {
        socket.emit("chat", {authorId, name, message: newMessage, roomId: params?.chatRoomId})
        setNewMessage('')
    }

    return (
        <>
            <p className='chatRoomTitle'>{`Welcome ${name!==''?name:'??'} to chat room ${params?.chatRoomId}`}</p>
            <p className='numberInRoom'>There {users > 1?'are':'is'} {users} {users === 1?'person':'people'} in this room</p>
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
