import { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css'
import { v4 as uuidv4} from 'uuid';

const Home = ({name, setName, setId}) => {
    const numbers = [];
    const [roomId, setRoomId] = useState('')
    const history = useHistory()
    for (let i = 1; i <= 5; i++){
        numbers.push(i);
    }
    const joinRoomHandler = () => {
        if (roomId) {
            setId(uuidv4())
            history.push(`/chatRoom/${roomId}`)
        }
    }
    return (
        <>
            <div className='homePage'>
                <h1>Chat Application</h1>
                <div className='roomForm'>
                    <p>What is your name</p>
                    <input value={name} onChange={(e) => {setName(e.target.value)}}/>
                    <p>What room do you want to enter</p>
                    <div className='rooms'>
                        {numbers?.map((number) => <button key={uuidv4()} onClick={() => {setRoomId(`${number}`);}} style={`${number}` === roomId?{color: 'white', backgroundColor: 'black'}:null}>{`Room ${number}`}</button>)}
                        <input value={roomId} onChange={(e) => {setRoomId(e.target.value)}}/>
                    </div>
                    <button className='joinRoom' onClick={() => {joinRoomHandler()}}>Join Room</button>
                </div>
            </div>
        </>
    )
}

export default Home
