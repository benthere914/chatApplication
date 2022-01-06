import './index.css'
import { useHistory } from "react-router-dom"
import { io } from 'socket.io-client';
import { useEffect } from 'react';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
let socket
const HomeButton = ({setName}) => {
    const history = useHistory();
    const params = useParams()

    useEffect(() => {
        socket = io('http://localhost:5000');
        return (() => {socket.disconnect()})
    })
    return (
        <>
            <h1 className='homeButton' onClick={() => {setName('');history.push('/');socket.emit('leaveRoom', params?.chatRoomId)}}>Home</h1>
        </>
    )
}

export default HomeButton
