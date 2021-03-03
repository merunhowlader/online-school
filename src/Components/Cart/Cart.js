import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const totalPrice=cart.reduce((sum,course)=>sum+course.price,0)
    console.log(totalPrice);
    return (
        <div>
            {
                cart.map(course=><h6>{course.courseName}  : : : ${course.price}</h6>)
            }

            <h3>Total price:{totalPrice}</h3>
        </div>
    );
};

export default Cart;