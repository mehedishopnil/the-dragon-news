import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container'>
            <h1>Terms and Conditions</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consequuntur vitae, facere a quis veniam illum possimus, enim consectetur natus accusantium eos, cum ipsa dicta quae voluptates itaque corrupti laborum!</p>
            <p>Go back to <Link to = '/register'>Register</Link></p>
        </div>
    );
};

export default Terms;