import React from 'react';

import './weather.css';

const Weather = (props) => {

    return (
        <div className='weather_wrapper'>
          <div className="row">
           <div className="col-lg-12 text-left">
           {
            props.city && props.country && <p>Location : 
            
            <span> {props.city } {props.country} </span>
            
            </p>
        }

        {
            props.description  && <p> description : 
            
            <span> {props.description} </span>
            
            </p>
        }

        {
            props.temperature  && <p> temperature : 
            
            <span> {props.temperature} </span>
            
            </p>
        }

        {
            props.humidity  && <p> humidity : 
            
            <span> {props.humidity} </span>
            
            </p>
        }

        {
            props.error  && <p> Error : 
            
            <span> {props.error} </span>
            
            </p>
        }
           </div>
          </div>
        </div>
    );

}

export default Weather;