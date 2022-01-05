import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chat from './components/chat';
import Home from './components/home'
import HomeButton from './components/homeButton';
require('dotenv').config();
function App() {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    return (
		<BrowserRouter>
			<Switch>
                <Route path='/' exact={true}>
                    <Home name={name} setName={setName} setId={setId}/>
                </Route>
                <Route path='/chatRoom/:chatRoomId'>
                    <HomeButton setName={setName}/>
                    <Chat name={name} authorId={id}/>
                </Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
