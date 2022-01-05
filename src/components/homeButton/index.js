import './index.css'
import { useHistory } from "react-router-dom"

const HomeButton = ({setName}) => {
    const history = useHistory();
    return (
        <>
            <h1 className='homeButton' onClick={() => {setName('');history.push('/')}}>Home</h1>
        </>
    )
}

export default HomeButton
