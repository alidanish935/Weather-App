import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import styled from 'styled-components';


function App() {
  const [city, setCity] = useState("");
  const [submitStatus, setSubmitStatus] = useState(false);
  const API_KEY = "2f1529d5c73a063ca5bb0e2b51d3251f"
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const [post, setPost] = React.useState();
  const submitFn = () => {
    setSubmitStatus(!submitStatus)
  }
  useEffect(() => {
    if (city) {
      axios.get(baseURL).then((response) => {
        console.log('resp...', response.data)
        setPost(response.data);
      })
    };
  }, [submitStatus])

  const Button = styled.button`
 
  color: white;
  width: 80px;
  height: 32px;
  margin-left: 3px;
  background-color: blue;
  border: none;
  border-radius: 6px;
  cursor: pointer;

 `
  return (
    <div class="container pb-3">
      <div class="row">
        <h1 class="alert text-center">Weather App</h1>
        <div className='flex inputContainer'>
          <div className="col mb-3">
            <input type='search' className='input' onChange={(e) => setCity(e.target.value)} placeholder='City' />
          </div>
          <div className="col mb-3">
            <input type='search' className='input'  placeholder='India' />
          </div>
          <div class="col mb-3">
            <Button onClick={submitFn} >Submit</Button>
          </div>

        </div>

        <div class="d-flex justify-content-center " id="weatherwidget">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{post && post.name} , {post && post.sys.country}  Weather</h5>
              <p>Friday, Dec 09,2022</p>
              <div id="tempcard">
                <h6 class="card-subtitle mb2">{post && post.main.temp}°C</h6>
              </div>
              <p>haze</p>
            </div>
          </div>
        </div>
        <div className='detailComp flex space-between'>
          <div >
            <div><span>High/Low</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{post && post.main.temp_max}/{post && post.main.temp_min}</span></div>
            <div>.......................................</div>
            <div><span>Humadity</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{post && post.main.humidity} %</span></div>
            <div>.......................................</div>
            <div><span>Pressure</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{post && post.main.pressure} hpa</span></div>
            <div>.......................................</div>
          </div>
          <div >
            <div><span>Wind</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{post && post.wind.speed}km/h </span></div>
            <div>.......................................</div>
            <div><span>Wind Direction</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{post && post.wind.deg} deg</span></div>
            <div>.......................................</div>
            <div><span>sunrise</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{post && post.sys.sunrise} </span></div>
            <div>.......................................</div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
