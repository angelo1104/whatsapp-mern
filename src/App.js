import React from 'react';
import './App.css';
import SideBar from "./Components/SideBar/SideBar";
import Chat from "./Components/Chat/Chat";

function App() {
  return (
    <div className="App">
        <div className="app_body">
            <SideBar/>
            <Chat/>
        </div>
    </div>
  );
}

export default App;
