import React from 'react';
import CounterApp from  './Components/counterApp';
import SongList from './Components/SongList';
import SongDetails from './Components/SongDetails';

const App = () => {
    return(
        <div>
            <CounterApp />
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "50px"
            }}
            >
            <SongList />
            <SongDetails />
            </div>

        </div>
    )
};

export default App;