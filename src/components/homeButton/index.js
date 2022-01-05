import './index.css'
import { useHistory } from "react-router-dom"

const HomeButton = () => {
    const history = useHistory();
    return (
        <>
            <h1 className='homeButton' onClick={() => {history.push('/')}}>Home</h1>
        </>
    )
}

export default HomeButton
