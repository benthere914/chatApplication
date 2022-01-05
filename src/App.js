import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chat from './components/chat';
import Home from './components/home'
import HomeButton from './components/homeButton';
require('dotenv').config();
function App() {
    const [name, setName] = useState('')
    return (
		<BrowserRouter>
			<Switch>
                <Route path='/' exact={true}>
                    <Home name={name} setName={setName}/>
                </Route>
                <Route path='/chatRoom/:chatRoomId'>
                    <HomeButton/>
                    <Chat name={name}/>
                </Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
