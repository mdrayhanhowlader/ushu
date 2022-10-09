import React from 'react';

const Cart = ({data, handleDeleteToCart}) => {
    // console.log(data);
    return (
        <div>
            <h1 className='text-center font-bold'>Player Summary</h1>
            <h2>Quantity: {data?.length}</h2>
            {
                data?.map(player => <h4 key={player?.id}>{player?.name} 
                <button onClick={() => handleDeleteToCart(player)} className='w-6 h-6 rounded-2xl bg-red-900'>x</button></h4>)
            }
        </div>
    );
};

export default Cart;