import React from 'react';

export default function TableCart(props) {

    const {cartItem, onAdd, onRemove} = props;
    const itemsPrice = cartItem.reduce((a, c) => a+c.foodPrice * c.qty, 0);

    return (
        <div>
            {cartItem.length === 0 && <div>Cart is empty</div>}
            {cartItem.map((item) => (
                <div key={item._id} className="row">
                    <h1>{item.foodName}</h1>
                    <div>
                        <button onClick={() => onAdd(item)} className="add">+</button>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>

                    <div>
                        {item.qty} x {item.foodPrice}
                    </div>
                </div>
            ))}

            {cartItem.length !== 0 && (
                <>
                    <h2>{itemsPrice}</h2>
                </>
            )}
        </div>
    )
}
