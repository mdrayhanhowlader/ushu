import React, { useContext } from 'react';
// import { PlayersContext } from './../Home/Home';

const Player = ({player, handleAddToCart}) => {
    // const players = useContext(PlayersContext)
    const {img, name, description, age, time} = player
    return (
        <div className='p-2 border-solid border-2 border-indigo-100'>
            <img className='w-full h-52 mx-auto rounded-md' src={img} alt="" />
            <div className=''>
                <h4 className='font-bold py-2'>{name}</h4>
                <p><small>{age}</small></p>
                <p><small>{time}</small></p>
                <p>{description}</p>
            </div>
            <button onClick={() => handleAddToCart(player)} className='py-2 w-full text-white bg-orange-500 hover:bg-orange-400 cursor-pointer rounded-md my-0'>Add Player</button>

        </div>
    );
};

export default Player;