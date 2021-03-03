import React from 'react';

const Course = (props) => {
   
    const{courses,handleAddCourse}=props
     const course=courses;
    
    return (
        <div>
            <img src={course.img} alt=""/>
            <h3>{course.courseName}</h3>
            <h5>price  :${course.price}</h5>
            <button onClick={()=>props.handleAddCourse(props.courses)} >Enrole Now</button>
        </div>
    );
};

export default Course;