import React, { useState } from 'react';
import Course from '../Course/Course';
import courseData  from '../../data/data.json';
import Cart from '../Cart/Cart';
import './Main.css'




const Main = () => {
    
    const courses=courseData;

    const [cart,setCart]=useState([]);

    

    const handleAddCourse=(course)=>{
        const newCart=[...cart,course];
        setCart(newCart);
        console.log(cart);
    }

    
    return (
        <div className="mainaArea">
            <div className="course">
            {
                courses.map(course=>
                    <Course handleAddCourse={handleAddCourse} courses={course}></Course>
                    )
            }
            </div>
            <div  >
                <Cart cart={cart}></Cart>
            </div>

            
            
        </div>

    );
};

export default Main;



