import React, { useContext } from 'react';
import { PlayersContext } from '../Home/Home';

const ContextApi = () => {
    const players = useContext(PlayersContext)
    return (
        <div>
            <h2>context</h2>
            {
                players.map(player => <h2>{player.name}</h2>)
            }
        </div>
    );
};

export default ContextApi;