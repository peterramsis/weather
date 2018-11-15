import React from 'react';
import './form.css';

const Form = (props) => {

    return (
        <div className='form_wrapper'>
           <form onSubmit={props.get}>
            <div className="form-groub row">
                <input type="text" className="form-control col-6" name="city" placeholder="enter your city...."/>
                <input type="text" className="form-control col-6" country="country" placeholder="Enter Your Country...."/>
            </div>

            <input type="submit" value="Get Weather" className="btn"/>
            
           </form>
        </div>
    );

}

export default Form;