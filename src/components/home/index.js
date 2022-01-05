import { useState } from 'react'
import './index.css'

const Home = () => {
    const [name, setName] = useState('')
    const numbers = [];
    const [buttonNumber, setButtonNumber] = useState(0)
    for (let i = 1; i <= 5; i++){
        numbers.push(i);
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
                        {numbers?.map((number) => <button onClick={() => {setButtonNumber(number)}} style={number === buttonNumber?{color: 'white', backgroundColor: 'black'}:null}>{`Room #${number}`}</button>)}
                    </div>
                    <button className='joinRoom'>Join Room</button>
                </div>
            </div>
        </>
    )
}

export default Home
