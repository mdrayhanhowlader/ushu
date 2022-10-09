import React, { createContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ContextApi from '../ContextApi/ContextApi';
import Player from '../Player/Player';

export const PlayersContext = createContext([])
const Home = () => {
    const players = useLoaderData([])
    const [cart, setCart] = useState([])
    const [data, getData] = useState([])


    useEffect(() => {
        const getDb = localStorage.getItem('cart')
        const parseGetDb = JSON.parse(getDb)
        getData(parseGetDb)
    }, [cart])
    const handleAddToCart = player => {
        const exist = cart.find(pl => pl.id === player)
        if(exist){
            alert('player added')
        }
        else {
            const newCart = [...cart, player]
            setCart(newCart)
        localStorage.setItem("cart", JSON.stringify(newCart))
        }
    }

    const handleDeleteToCart = player => {
        const restPlayer = cart.filter(pl => pl.id !== player.id)
        localStorage.setItem("cart", JSON.stringify(restPlayer))
        setCart(restPlayer)
    }



    return (
        <div className='md:grid md:grid-cols-5'>
            <PlayersContext.Provider value={players}>
            <div className='md:col-span-4 grid grid-cols-3 gap-2 md:m-4'>
                {
                players.map(player => <Player key={player.id} player={player}
                handleAddToCart={handleAddToCart}
                ></Player>)
                }
            </div>
            <div className='md:col-span-1 bg-orange-500 max-h-96 mt-4 rounded-sm p-4 text-white'>
                <Cart data={data} handleDeleteToCart={handleDeleteToCart}></Cart>
            </div>
            </PlayersContext.Provider>
        </div>

    );
};

export default Home;