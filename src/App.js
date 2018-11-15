import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css'
import Title from './componet/title/title.react.js';
import Form  from './componet/form/form.react.js';
import Weather  from './componet/weather/weather.react.js';
const API_KEY = "4ab8404d260984d8c9430de5082237e3";

class App extends Component {

  state = {
    city:null,
    country:null,
    temperature:null,
    humidity:null,
    description:"",
    error:null
  }

  getWeather = async (e)=>{
     e.preventDefault();
    
    const city = e.target.elements.city.value;
    const country = e.target.elements.city.value;              
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    

   if(city && country){
    this.setState({
      city:data.name,
      country:data.sys.country,
      temperature:data.main.temp,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:""

    })

   }else{
    this.setState({
      city:null,
      country:null,
      temperature:null,
      humidity:null,
      description:null,
      error:"Please Entry the values"

    })
   }
     
  }

  render() {
    return (
      <div className="App">
        <div className="container">
            <div className="row">
              <div className="col-md-12">
               <div className="row">
                 <div className="col-md-6">
                   <Title />
                 </div>
                 <div className="col-md-6 det">
                   <div className="weather">
                   <Form get={this.getWeather} />
                   <Weather city={this.state.city} country={this.state.country} description={this.state.description} temperature={this.state.temperature} humidity={this.state.humidity} error={this.state.error}/>
                   </div>
                 </div>
               </div>
              </div>
            </div>        
        </div>
      </div>
    );
  }
}

export default App;
