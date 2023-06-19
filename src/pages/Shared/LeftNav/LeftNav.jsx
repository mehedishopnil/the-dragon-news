import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then (res => res.json())
        .then( data => setCategories(data))
        .catch(error =>{
            console.log(error);
        })
    },[])
    return (
        <div>
            <h4>All Category</h4>
            <div className='categories'>
            {
                categories.map(category => <p
                key={category.id}
                >
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
            </div>
        </div>
    );
};

export default LeftNav;