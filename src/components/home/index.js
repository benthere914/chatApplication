import { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css'
import { v4 as uuidv4} from 'uuid';

const Home = ({name, setName}) => {
    const numbers = [];
    const [buttonNumber, setButtonNumber] = useState(0)
    const history = useHistory()
    for (let i = 1; i <= 5; i++){
        numbers.push(i);
    }
    const joinRoomHandler = () => {
        if (buttonNumber) history.push(`/chatRoom/${buttonNumber}`)
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
                        {numbers?.map((number) => <button key={uuidv4()} onClick={() => {setButtonNumber(number)}} style={number === buttonNumber?{color: 'white', backgroundColor: 'black'}:null}>{`Room #${number}`}</button>)}
                    </div>
                    <button className='joinRoom' onClick={() => {joinRoomHandler()}}>Join Room</button>
                </div>
            </div>
        </>
    )
}

export default Home
